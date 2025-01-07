// Importing necessary components and hooks
import PetList from "../components/PetList";
import { useState, useEffect } from "react";
import AdoptPetForm from "../components/ApplicationForm.jsx";  // Import ApplicationForm component
import axios from "axios";  // Import axios for API requests

const apibaseurl = "https://adopt-backend-1.onrender.com";  // API base URL

const AdoptPet = () => {
  const [pets, setPets] = useState([]);  // State to hold fetched pets
  const [selectedPet, setSelectedPet] = useState(null);  // State to store the selected pet for adoption

  // Fetching pets data with Authorization header
  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("token");  // Retrieve the token from localStorage
      if (!token) {
        console.log("No token found. User might not be logged in.");
        return;  // If no token is found, stop the request
      }

      try {
        const response = await axios.get(`${apibaseurl}/api/pets`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token as Authorization header
          },
        });
        setPets(response.data);  // Update pets state with the fetched data
      } catch (error) {
        console.error("Failed to fetch pets", error.response ? error.response.data : error);
      }
    };

    fetchPets();
  }, []);  // Empty dependency array means it runs once when the component is mounted

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);  // When a pet is selected, update the selectedPet state
  };

  return (
    <div className="adopt-pet-container">
      <h2>Adopt a Pet</h2>
      {/* Passing pets and handlePetSelect as props to PetList component */}
      <PetList pets={pets} onPetSelect={handlePetSelect} />

      {/* Conditionally render the ApplicationForm if a pet is selected */}
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
