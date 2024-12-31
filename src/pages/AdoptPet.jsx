// Importing necessary components and hooks
import PetList from "../components/PetList";
import { useState, useEffect } from "react";
import AdoptPetForm from "../components/ApplicationForm.jsx";  // Import ApplicationForm component
import "./AdoptPet.css";  // Import the CSS file for styling

const apibaseurl = "https://adopt-backend-1.onrender.com";  // API base URL

const AdoptPet = () => {
  const [pets, setPets] = useState([]);  // State to hold fetched pets
  const [selectedPet, setSelectedPet] = useState(null);  // State to store the selected pet for adoption

  useEffect(() => {
    // Fetching pets data from the API
    const fetchPets = async () => {
      try {
        const response = await fetch(`${apibaseurl}/api/pets`);
        const data = await response.json();
        setPets(data);  // Update pets state with the fetched data
      } catch (error) {
        console.error("Failed to fetch pets", error);
      }
    };

    fetchPets();
  }, []);

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