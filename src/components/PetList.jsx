import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import './PetList.css';  // Add your own CSS for styling

const apibaseurl = "https://backend-petadoption-4.onrender.com"; // API base URL

const PetList = () => {
  const [pets, setPets] = useState([]);  // State to hold the list of pets
  const [searchTerm, setSearchTerm] = useState("");  // State for search input
  const [filteredPets, setFilteredPets] = useState([]);  // State to hold filtered pets
  const navigate = useNavigate();  // Hook for navigation

  // Fetch pets data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`${apibaseurl}/api/pets`);
        const data = await response.json();
        setPets(data);  // Update state with the fetched pet data
        setFilteredPets(data);  // Initially, show all pets
      } catch (error) {
        console.error("Failed to fetch pets", error);
      }
    };
    fetchPets();
  }, []);

  // Function to handle navigation to the adoption form
  const handleAdoptClick = (pet) => {
    navigate("/adopt-pet-form", { state: { pet } });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  // Handle Search Button Click
  const handleSearchClick = () => {
    const term = searchTerm.toLowerCase();

    // Filter pets based on the search term (name or breed)
    const filtered = pets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(term) ||
        pet.breed.toLowerCase().includes(term)
    );
    setFilteredPets(filtered);
  };

  // Navigate to the pet details page
  const handleDetailsClick = (pet) => {
    navigate("/pet-details", { state: { pet } });  // Navigate to PetDetailsPage with pet details
  };

  return (
    <div className="pet-list-container">
      <h2>Available Pets for Adoption</h2>

      {/* Search bar with Search button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or breed"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button
          onClick={handleSearchClick}
          className="search-btn"
        >
          Search
        </button>
      </div>

      <div className="pet-list">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div className="pet-card" key={pet._id}>
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p>{pet.breed}</p>
                <button onClick={() => handleAdoptClick(pet)} className="adopt-btn">
                  Adopt
                </button>
                <br />
                <br />
                <button onClick={() => handleDetailsClick(pet)} className="adopt-btn">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No pets found</p>
        )}
      </div>
    </div>
  );
};

export default PetList;
