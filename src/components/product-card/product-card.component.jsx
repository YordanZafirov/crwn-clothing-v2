import { useContext } from 'react';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../context/cart.context'
import { ProductCardContainer, ProductFooter, ProductName, ProductPrice } from './product-card.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
            </ProductFooter>
        </ProductCardContainer>
    );
}

export default ProductCard;