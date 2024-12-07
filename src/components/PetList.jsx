import axios from 'axios';
import { useEffect, useState } from 'react';

const PetList = () => {
   const [pets, setPets] = useState([]);

   const fetchPets = async () => {
       try {
           const response = await axios.get('http://localhost:5000/api/pets');
           setPets(response.data); // Assuming the API returns a list of pets
       } catch (error) {
           console.error('Error fetching pets:', error);
       }
   };

   useEffect(() => {
       fetchPets();
   }, []);

   return (
       <div>
           <h1>Pet List</h1>
           <ul>
               {pets.map((pet) => (
                   <li key={pet.id}>{pet.name}</li>
               ))}
           </ul>
       </div>
   );
};

export default PetList;
