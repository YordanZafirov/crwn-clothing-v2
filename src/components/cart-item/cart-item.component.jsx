import { CartItemContainer, CartItemName, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <CartItemName>{name}</CartItemName>
                <CartItemName>{quantity} x ${price}</CartItemName>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;