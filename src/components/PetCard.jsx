// React import removed as it's not used in this component
import PropTypes from "prop-types";
const PetCard = ({ pet }) => {
  return (
    <div className="card">
      <img
        src={pet.imageUrl || "https://classroomclipart.com/image/static7/preview1/brown-dog-animation-50799.jpg"}
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
        <button className="btn btn-primary">Adopt</button>
      </div>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    temperament: PropTypes.string.isRequired,
  }).isRequired,
};

export default PetCard;
