import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const Tags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Badge key={index} bg={tag.backgroundColor} className="mx-1">
          {tag.text}
        </Badge>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tags;
