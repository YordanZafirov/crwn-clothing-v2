import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { LogoContainer, NavLink, NavLinkContainer, NavigationContainer } from "./navigation.styles";

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/fitebase/firebase.utils';

const Nav = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to="/shop">
                        Shop
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                                Sign out
                            </NavLink>
                        )
                            :
                            (
                                <NavLink to="/auth">
                                    Sign in
                                </NavLink>
                            )
                    }
                    <CartIcon />
                </NavLinkContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Nav;