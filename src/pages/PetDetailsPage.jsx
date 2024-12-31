import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './petdetailspage.css';
const PetDetailsPage = () => {
  const location = useLocation();
  const { pet } = location.state || {};

  if (!pet) {
    return <div>Pet details not available</div>;
  }

  return (
    <div className="pet-details">
      <img src={pet.imageUrl || "https://th.bing.com/th/id/R.e7e2ad7917723692c1fd5dd3c2a2c769?rik=4dT4OmKZg%2bSL%2bg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-DCkdd73syuk%2fTdTkrB-ci9I%2fAAAAAAAAAAc%2fULWUxJRhlNA%2fs1600%2fcute-dog2.jpg&ehk=49cvXjLBXAJ8BC673XkMF2vOQCZcBfbt7309P3AcPWg%3d&risl=&pid=ImgRaw&r=0"} alt={pet.name} className="pet-details-image" />
      <h2>{pet.name}</h2>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Temperament:</strong> {pet.temperament}</p>
      <p>Dogs are the most popular pet on the planet!
        A third of ALL households around the world have a dog. These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.</p>
      <p>Dogs have been bred for desired behaviors, sensory capabilities, and physical attributes. Dog breeds vary widely in shape, size, and color. They have the same number of bones (with the exception of the tail), powerful jaws that house around 42 teeth, and well-developed senses of smell, hearing, and sight. Compared to humans, dogs have an inferior visual acuity, a superior sense of smell, and a relatively large olfactory cortex. They perform many roles for humans, such as hunting, herding, pulling loads, protection, companionship, therapy, aiding disabled people, and assisting police and the military.</p>
    </div>
  );
};

export default PetDetailsPage;
