import { useEffect, useState } from 'react';
import axios from 'axios';

const PetList = () => {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch pet data from the API
    const fetchPets = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/pets'); // Backend API URL
            setPets(response.data);
        } catch (err) {
            console.error('Error fetching pets:', err);
            setError('Failed to load pet data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchPets(); // Fetch pets on component mount
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Pet Adoption List</h1>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {!error && pets.length === 0 && <p>Loading pets...</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {pets.map((pet) => (
                    <div
                        key={pet.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '15px',
                            maxWidth: '300px',
                            textAlign: 'center',
                            color:"grey"
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
