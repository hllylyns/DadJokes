import React, {Component} from 'react';

class NewJoke extends Component {
    constructor(){
        super();
    
    this.state = {
        write: ''
    };

    this.handleAdd = this.handleAdd.bind( this );
}

handleInputChange( value ) {
  this.setState({ write: value });
}

handleAdd() {
  this.props.add( this.state.write );
  this.setState({ write: '' });
}

render() {
  return (
    <div>
      <input value={ this.state.write } 
            placeholder="Create" 
            onChange={ (e) => this.handleInputChange( e.target.value ) }
      />

      <button onClick={ this.handleAdd }>Add</button>
    </div>
  )
}
}
export default NewJoke;