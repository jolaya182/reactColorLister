import { Component } from 'react';
import AddColorForm from './AddColorForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
  }
  addColor(title, color) {
    this.setState(prevState => ({
      colors: [...prevState.colors,
        {
          id: 0,
          title,
          color,
          rating: 0,
        }],
    }));
  }
  render() {
    const { addColor } = this;
    const { colors } = this.colors;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />

      </div>
    );
  }
}
