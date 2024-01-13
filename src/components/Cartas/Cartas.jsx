import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Tags from '../Tags/Tags'
import './Cartas.css';

const CustomCard = ({ title, content, imageUrl, tags }) => {
  return (
    <Card className="my-4">
      {imageUrl && <Card.Img variant="top" src={imageUrl} alt="Card Image" />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Tags tags={tags} /> {/* Agrega los tags como botones */}
      </Card.Body>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomCard;
