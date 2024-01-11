import React from 'react'

const AddCart = (props) => {
    const { item } = props;
  return (
    <div>
      <div>
      {/* Display information about the clicked item */}
      <h2>Item Added to Cart</h2>
      <p>{item.title}</p>
      <p>{item.description}</p>
      {/* ... other details */}
    </div>
    </div>
  )
}

export default AddCart
