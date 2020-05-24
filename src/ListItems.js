import React from 'react';
import PropTypes from 'prop-types';

const ShoppingListItems = (props) => (
  <div>
    <p className="items">Items</p>
    <ol className="item-list">
    {props.items.map((item, index) => <li key={index}>{item}</li>)}
  </ol>
  </div>
);

ShoppingListItems.propTypes = {
  items: PropTypes.array.isRequired,
};
export default ShoppingListItems;
