// Importing necessary components and hooks
import PetList from "../components/PetList";
import { useState, useEffect } from "react";
import AdoptPetForm from "../components/ApplicationForm";  // Import the Adoption Form component
import axios from "axios";  // Import axios for API requests
import './adoptpet.css';  // Import custom CSS file

const apibaseurl = "https://adopt-backend-1.onrender.com";  // API base URL

const AdoptPet = () => {
  const [pets, setPets] = useState([]);  // State to hold the fetched pets
  const [selectedPet, setSelectedPet] = useState(null);  // State to store the selected pet for adoption

  // Fetching pets data from the backend with authorization
  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("token");  // Get the token from localStorage
      if (!token) {
        console.log("No token found. User might not be logged in.");
        return;
      }

      try {
        const response = await axios.get(`${apibaseurl}/api/pets`, {
          headers: {
            Authorization: `Bearer ${token}`,  // Pass the token in Authorization header
          },
        });
        setPets(response.data);  // Update pets state with the fetched data
      } catch (error) {
        console.error("Failed to fetch pets", error.response ? error.response.data : error);
      }
    };

    fetchPets();
  }, []);  // Empty dependency array means it runs once when the component mounts

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);  // When a pet is selected, set it as the selected pet
  };

  return (
    <div className="adopt-pet-container">
      <h2>Adopt a Pet</h2>
      {/* Passing pets and handlePetSelect as props to PetList component */}
      <PetList pets={pets} onPetSelect={handlePetSelect} />

      {/* Conditionally render the Adoption Form when a pet is selected */}
      {selectedPet && (
        <div className="application-form-container">
          <h3>Apply to Adopt {selectedPet.name}</h3>
          {/* Pass selectedPet to the AdoptPetForm component */}
          <AdoptPetForm pet={selectedPet} />
        </div>
      )}
    </div>
  );
};

export default AdoptPet;
