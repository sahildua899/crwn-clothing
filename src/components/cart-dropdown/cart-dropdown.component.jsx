import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';
import React, {useContext} from 'react'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
        <CartItems>
          {
            cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))) : (
              <EmptyMessage>Your Cart is Empty</EmptyMessage>
            )  
          }
        </CartItems>
        <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown