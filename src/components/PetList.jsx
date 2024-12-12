import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "./PetCard";

const PetList = () => {
  const [pets, setPets] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPets, setFilteredPets] = useState([]); // Initialize as an empty array

  // Fetch pet data from the backend
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets');
        const petsData = response.data;

        // Ensure the response data is an array
        if (Array.isArray(petsData)) {
          setPets(petsData);
          setFilteredPets(petsData);
        } else {
          console.error("API did not return an array:", petsData);
          setPets([]);
          setFilteredPets([]);
        }
      } catch (error) {
        console.error("Error fetching pets:", error);
        setPets([]);
        setFilteredPets([]);
      }
    };

    fetchPets();
  }, []);

  // Update filteredPets based on the search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPets(pets);
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = pets.filter((pet) =>
        pet.name.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredPets(filtered);
    }
  }, [searchTerm, pets]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Available Pets for Adoption</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by pet name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {Array.isArray(filteredPets) && filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div className="col-md-4 mb-4" key={pet._id}>
              <PetCard pet={pet} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No pets found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetList;
