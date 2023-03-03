import { CartItemContainer, Image, ItemDetails, Name } from './cart-item.styles'

import React from 'react'

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />

        <ItemDetails>
          <Name>{name}</Name>
          <span className='price'>{quantity} x ${price}</span>
        </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem