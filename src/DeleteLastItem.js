import React from 'react';

const DeleteLastItem = (props) => { 
  // event can be accessed here
  const handleDeleteLastItem = event => {
    props.deleteLastItem();
  };

  return (
    <button onClick={handleDeleteLastItem} disabled={props.noItemsFound}>
		Delete Last Item
	</button>
	)
}

export default DeleteLastItem;