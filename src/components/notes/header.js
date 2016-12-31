import React from "react";

const Header = (props) => (
  <h2>Name: {props.username}</h2>
);

Header.propTypes = {
  username: React.PropTypes.string.isRequired,
};

export default Header;
