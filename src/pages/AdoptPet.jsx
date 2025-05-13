// Importing necessary components and hooks
import PetList from "../components/PetList";
import { useState, useEffect } from "react";
import AdoptPetForm from "../components/ApplicationForm"; // Import the Adoption Form component
import axios from "axios"; // Import axios for API requests
import './adoptpet.css'; // Import custom CSS file

const apibaseurl = "https://adopt-backend-1.onrender.com"; // API base URL

const AdoptPet = () => {
  const [pets, setPets] = useState([]); // State to hold the fetched pets
  const [selectedPet, setSelectedPet] = useState(null); // State to store the selected pet for adoption
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetching pets data from the backend with authorization
  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (!token) {
        setError("User not logged in. Please log in to view available pets.");
        return;
      }

      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const response = await axios.get(`${apibaseurl}/api/pets`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in Authorization header
          },
        });
        setPets(response.data); // Update pets state with the fetched data
      } catch (err) {
        setError(err.response ? err.response.data.message : "Failed to fetch pets");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPets();
  }, []); // Empty dependency array means it runs once when the component mounts

  const handlePetSelect = (pet) => {
    setSelectedPet(pet); // When a pet is selected, set it as the selected pet
  };

  return (
    <div className="adopt-pet-container">
      <h2>Adopt a Pet</h2>

      
      {loading && <p>Loading pets...</p>}

     
      {error && <p className="error-message">{error}</p>}

      
      {!loading && !error && pets.length > 0 && (
        <PetList pets={pets} onPetSelect={handlePetSelect} />
      )}

      
      {selectedPet && (
        <div className="application-form-container">
          <h3>Apply to Adopt {selectedPet.name}</h3>
          
          <AdoptPetForm pet={selectedPet} pets={pets} />
        </div>
      )}
    </div>
  );
};

export default AdoptPet;
