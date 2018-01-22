import PropTypes from "prop-types";
import "../../styleSheets/Star.scss";

const Star = ({ selected = false, onClick = f => f }) =>
  (<div
    className={(selected) ? "star selected" : "star"}
    onClick={onClick}
  />);

// Star.propTypes = {
//   selected: PropTypes.bool,
//   onClick: PropsTypes.func,
// };
export default Star;
