import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetDetail = () => {
  const { id } = useParams(); // Get petId from URL params
  const [petDetails, setPetDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pets/${id}`);
        setPetDetails(response.data);
      } catch (err) {
        setError('Pet not found');
        console.error(err);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {petDetails ? (
        <div>
          <h2>{petDetails.name}</h2>
          <p>{petDetails.description}</p>
          <p>{petDetails.age} years old</p>
          <p>Breed: {petDetails.breed}</p>
          <p>Status: {petDetails.adoptionStatus ? 'Available' : 'Adopted'}</p>
          <img src={petDetails.imageUrl} alt={petDetails.name} width="200" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PetDetail;
