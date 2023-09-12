import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, Header, HeaderBlock, Total } from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <CheckoutContainer>
            <Header>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </Header>
            <div>
                {cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item} />
                )
                )}
                <Total>Total: ${cartTotal}</Total>
            </div>
        </CheckoutContainer>
    );
}

export default Checkout;