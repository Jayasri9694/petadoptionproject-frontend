import { useState, useEffect } from "react";
import AdoptPetForm from "./AdoptPetForm";
import PetList from "./PetList";  // Assuming PetList is the component you're using
import "./AdoptPet.css";  // Import the CSS file for styling


const AdoptPet = () => {
  const [pets, setPets] = useState([]);  // Initialize pets with an empty array or fetch data

  useEffect(() => {
    // Fetching pets data from the API
    const fetchPets = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/pets`);
        const data = await response.json();
        setPets(data);  // Update pets state with the fetched data
      } catch (error) {
        console.error("Failed to fetch pets", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h2>Adopt a Pet</h2>
      {/* Passing the pets state to PetList component */}
      <PetList pets={pets} />
    </div>
  );
};

export default AdoptPet;
