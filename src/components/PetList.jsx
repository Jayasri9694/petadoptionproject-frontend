import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import './PetList.css';  // Add your own CSS for styling

const apibaseurl = "https://adopt-backend-1.onrender.com"; // API base URL

const PetList = () => {
  const [pets, setPets] = useState([]);  // State to hold the list of pets
  const [searchTerm, setSearchTerm] = useState("");  // State for search input
  const [filteredPets, setFilteredPets] = useState([]);  // State to hold filtered pets
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const navigate = useNavigate();  // Hook for navigation

  // Check if the user is authenticated
  useEffect(() => {
    const authToken = localStorage.getItem("authToken"); // Assuming the token is stored in localStorage
    if (authToken) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  // Fetch pets data from the API if logged in
  useEffect(() => {
    if (isLoggedIn) {
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
    }
  }, [isLoggedIn]);

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

  // Navigate to the login page
  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="pet-list-container">
      {isLoggedIn ? (
        <>
          {/* Pet list */}
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
        </>
      ) : (
        <div className="not-logged-in">
          <h2>Please Log In</h2>
          <p>You need to log in to view the pet list and adopt a pet.</p>
          <button onClick={handleLoginRedirect} className="login-btn">
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
};

export default PetList;
