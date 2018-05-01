import React from 'react';
import MySavedJokes from './MySavedJokes';

export default function MyOwnJokes( props ) {
  let list = props.morejokes.map( ( element, index ) => {
    console.log(element.text);
    return (
        <div>
       <h2><MySavedJokes key={ index } joke={ element.text } handleUpdate={props.handleUpdate} id={element.id}/></h2>  
     
      </div>
    )
  })

  return (
    <div>
      { list } 
    </div>
  )
}