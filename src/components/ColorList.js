import PropTypes from "prop-types";
import Color from './Color';
import "../../styleSheets/ColorList.scss";

const ColorList = ({ colors = [] }) =>
  (<div className="color-list">
    {(colors.length == 0) ?
      <p>No Colors Listed.(add a color)</p> :
      colors.map(color => <Color key={color.id}{...color} />)
    }
   </div>);

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: Prop.func,
};

export default ColorList;
