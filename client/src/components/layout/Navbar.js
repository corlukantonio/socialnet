import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Pretraži</Link>
      </li>
      <li>
        <Link to='/posts'>Objave</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{" "}
          <span className='hide-sm'>Kontrolna ploča</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Odjavi se</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Pretraži</Link>
      </li>
      <li>
        <Link to='/register'>Registriraj se</Link>
      </li>
      <li>
        <Link to='/login'>Prijavi se</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-light'>
      <h1>
        <Link to='/'>socialnet</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
