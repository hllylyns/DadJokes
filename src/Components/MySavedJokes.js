import React from 'react';
import EditableLabel from 'react-inline-editing';

export default function MySavedJokes (props) {
return (
  <div>

    <EditableLabel text={ props.joke } onFocusOut={(text)=>props.handleUpdate(props.id, text)}/>
  </div>
)
}