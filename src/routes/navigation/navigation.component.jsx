import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./../../store/user/user.selector.js";
import { selectIsCartOpen } from "./../../store/cart/cart.selector.js";

import { ReactComponent as CrwnLogo } from "./../../assets/87 - crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "./../../components/cart-icon/cart-icon.component.jsx";

import { signOutUser } from "./../../utils/firebase/firebase.utils.js";

import { CartContext } from "./../../contexts/cart.context.jsx";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = function () {
  const currentUser = useSelector(selectUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen ? <CartDropdown /> : ""}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
