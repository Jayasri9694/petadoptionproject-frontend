import { useState, useEffect } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets');
        setPets(response.data);
      } catch (err) {
        setError('Error fetching pets');
        console.error(err);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <h1>Available Pets</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            <h2>{pet.name}</h2>
            <p>{pet.description}</p>
            <p>{pet.age} years old</p>
            <p>Breed: {pet.breed}</p>
            <p>Status: {pet.adoptionStatus ? 'Available' : 'Adopted'}</p>
            <img src={pet.imageUrl} alt={pet.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
