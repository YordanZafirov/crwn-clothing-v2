import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Arrow, CheckoutItemContainer, CheckoutNameAndPrice, CheckoutQuantity, CheckoutValue, ImageContainer, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <CheckoutNameAndPrice>{name}</CheckoutNameAndPrice>
            <CheckoutQuantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <CheckoutValue>{quantity}</CheckoutValue>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </CheckoutQuantity>
            <CheckoutNameAndPrice>{price}</CheckoutNameAndPrice>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;