import { useEffect, useState } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]); // State to store pets data
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(true); // State to handle loading

  // Function to fetch pet data from the API
  const fetchPets = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';// Fetch the base API URL from environment variables
      if (!API_URL) {
        throw new Error('API URL is not defined in environment variables.');
      }

      const response = await axios.get(`${API_URL}/api/pets`); // Fetch pets data from the API
      console.log('API Response:', response.data); // Log response for debugging

      // Validate and set pets data
      if (Array.isArray(response.data)) {
        setPets(response.data);
      } else if (response.data && Array.isArray(response.data.pets)) {
        setPets(response.data.pets); // Handle nested pets data
      } else {
        throw new Error('Unexpected response format'); // Handle unexpected format
      }
    } catch (err) {
      console.error('Error fetching pets:', err);
      setError('Failed to load pet data. Please try again later.');
    } finally {
      setLoading(false); // Set loading state to false regardless of success or error
    }
  };

  useEffect(() => {
    fetchPets(); // Fetch pets on component mount
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Pet Adoption List</h1>

      {/* Display error message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Display loading state */}
      {loading && <p style={{ textAlign: 'center' }}>Loading pets...</p>}

      {/* Display no pets message if not loading and no pets */}
      {!loading && pets.length === 0 && !error && (
        <p style={{ textAlign: 'center', color: 'grey' }}>No pets available for adoption at the moment.</p>
      )}

      {/* Display pet cards */}
      <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  }}
>
  {pets.map((pet) => (
    <div
      key={pet.id} // Make sure this is unique for each pet
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        maxWidth: '300px',
        textAlign: 'center',
        color: 'grey',
      }}
    >
      <h3>{pet.name}</h3>
      <p>
        <strong>Breed:</strong> {pet.breed}
      </p>
      <p>
        <strong>Age:</strong> {pet.age} years
      </p>
      <p>{pet.description}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default PetList;
