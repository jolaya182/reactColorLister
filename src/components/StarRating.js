import PropTypes from 'prop-types';
import Star from './Star';

class StarRating extends Component {
  constructor(props){
    this.state ={
      starSelected : 0
    }
    this.change - this.change.bind(this);
  }
  change(starSelected){
    this.setState({starSelected})
  }
  render(){
    const {totalStar} = this.props;
    const {starsSelected} =this.state;
    return(
      <div className = "star-rating">
      {[...Array(totalStars)].map(n,i)=>
        <Star key= {i}
          selected = {i<starsSelected}
          onClick={()=>this.change(i+1)}
          /> 
    )}
    <p> {starsSelected} of {totalStars} stars</p>
    </div>
    )
  }
}

// StarRating.propTypes ={
//   starsSelected: propTypes.number,
//   totalStars : PropTypes.number,
//   onRate: PropTypes.func
// }
// StarRating.defaultProps = {
//   totalStars : 5
// }
export default StarRating