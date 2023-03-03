
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { Image, ProductCardContainer, FooterContainer, Name, Price } from './product-card.styles';

import React, {useContext} from 'react'

const ProductCard = ({product}) => {
    const {name , price , imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)

    const addProductToCart =  () => addItemToCart(product)
  return (
    <ProductCardContainer>
        <Image src={imageUrl} alt={`${name}`} />
        <FooterContainer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </FooterContainer>
        <Button type='inverted' onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard