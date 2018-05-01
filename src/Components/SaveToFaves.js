import React, {Component} from 'react';

class SaveToFaves extends Component {
    constructor(){
        super();
    
    this.state = {
        savedjokes: []
    };

    this.handleAdd = this.handleAdd.bind( this );
}

handleInputChange( value ) {
  this.setState({ savedjokes: value });
}

handleAdd() {
  this.props.save( this.state.savedjokes );
  this.setState({ savedjokes: '' });
}

render() {
  return (
      <button onClick={ this.handleAdd }>Save</button>
  )
}
}
export default SaveToFaves;