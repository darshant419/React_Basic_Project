
import PropTypes from 'prop-types';


// li component props usage here

function Corecomponent({ image, title, description }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  
  Corecomponent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  

  export default Corecomponent;