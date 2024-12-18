import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const apibaseurl = "https://backend-petadoption-4.onrender.com";

const PetCard = ({ pet, onAdopt }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [adopted, setAdopted] = useState(false);  // Track if the pet has been adopted
  const [adoptionDetails, setAdoptionDetails] = useState(null);  // Store the adoption details to display

  const handleAdopt = async () => {
    if (window.confirm(`Are you sure you want to adopt ${pet.name}?`)) {
      setLoading(true);
      setError(null); // Reset previous error state

      try {
        // Assuming you have a userId stored in the application context or localStorage
        const userId = localStorage.getItem("userId"); // Modify this to your authentication flow

        if (!userId) {
          setError("User is not authenticated.");
          setLoading(false);
          return;
        }

        const response = await fetch(`${apibaseurl}/api/adopt`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming you're using JWT
          },
          body: JSON.stringify({
            petId: pet._id,
            userId: userId,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Successfully adopted the pet
          setAdopted(true);  // Update adoption state
          setAdoptionDetails({
            name: pet.name,
            breed: pet.breed,
            age: pet.age,
            temperament: pet.temperament,
            adoptionFee: pet.adoptionFee, // If you want to show adoption fee, assuming it exists
            healthStatus: pet.healthStatus, // Assuming health status is available
          });
          alert(`Successfully adopted ${pet.name}!`);
          onAdopt(pet);  // Call the onAdopt function to update parent state if needed
        } else {
          throw new Error(data.message || "Adoption failed");
        }
      } catch (error) {
        setError(error.message);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="card">
      <img
        src={
          pet.imageUrl ||
          "https://classroomclipart.com/image/static7/preview1/brown-dog-animation-50799.jpg"
        }
        className="card-img-top"
        alt={pet.name}
      />
      <div className="card-body">
        <h5 className="card-title">{pet.name}</h5>
        <p className="card-text">
          Breed: {pet.breed} <br />
          Age: {pet.age} years <br />
          Temperament: {pet.temperament}
        </p>

        {/* Link to Pet Details Page */}
        <Link to={`/pet-details/${pet._id}`} className="btn btn-info">View Details</Link>

        <button
          className="btn btn-primary"
          onClick={handleAdopt}
          disabled={loading || adopted}  // Disable button if adoption is in progress or already adopted
        >
          {loading ? "Adopting..." : adopted ? "Adopted" : "Adopt"}
        </button>

        {error && <div className="text-danger">{error}</div>}

        {/* Show Adoption Confirmation Details */}
        {adopted && adoptionDetails && (
          <div className="alert alert-success mt-3">
            <h5>Adoption Successful!</h5>
            <p>You have successfully adopted <strong>{adoptionDetails.name}</strong>!</p>
            <p><strong>Breed:</strong> {adoptionDetails.breed}</p>
            <p><strong>Age:</strong> {adoptionDetails.age} years</p>
            <p><strong>Temperament:</strong> {adoptionDetails.temperament}</p>
            {adoptionDetails.adoptionFee && (
              <p><strong>Adoption Fee:</strong> ${adoptionDetails.adoptionFee}</p>
            )}
            {adoptionDetails.healthStatus && (
              <p><strong>Health Status:</strong> {adoptionDetails.healthStatus}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    temperament: PropTypes.string.isRequired,
    adoptionFee: PropTypes.number, // Optional: if you have adoption fee
    healthStatus: PropTypes.string, // Optional: if you want to show health status
  }).isRequired,
  onAdopt: PropTypes.func.isRequired, // Function prop for adoption
};

export default PetCard;
