import PropTypes from 'prop-types';
import StartRating from './StarRating';
import '../../styleSheets/Color.scss';

const Color = ({ title, color, rating, onRemove=> f => f, onRate=f => f }) =>
<section className="color">
  <h1> {title} </h1>
  <button onClick={onRemove}> X</button>
  <div className="color"
    style={{ backgroundColor: color }}>
  </div>
  <div>
    <StarRating starSelected={rating} onRate={onRate} />
  </div>
</section>