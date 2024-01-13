import PropTypes from "prop-types";
import "./Titulo.css";

const Title = ({ text }) => {
  return (
    <div className="my-4">
      <h1 className="title">{text}</h1>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
