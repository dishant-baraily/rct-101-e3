import React from "react";


const Navbar = () => {
  const myStyle = {
    display: "flex",
    justifyContent: "space-between"
  };
  return (
    <div style={myStyle} data-cy="navbar">
      <div>
        <a style={{textDecoration: "none"}} data-cy="navbar-home-link" href="/">Logo</a>
      </div>
      <div style={{display: "flex"}}>
        <div style={{marginRight:'50px'}} data-cy="navbar-cart-items-count">Cart: 0</div>
        <button data-cy="navbar-login-logout-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
