import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Lozinke se ne podudaraju", "danger");
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Registriraj se</h1>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Ime i prezime'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            // required
          />
          <small className='form-text'>
            Ova stranica koristi Gravatar, stoga ako želite imati profilnu
            fotografiju koristite{" "}
            <a
              href='https://en.gravatar.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              Gravatar
            </a>{" "}
            email.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Lozinka'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            // minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Potvrdi lozinku'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            // minLength='6'
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Registriraj se'
        />
      </form>
      <p className='my-1'>
        Imaš svoj korisnički račun? <Link to='/login'>Prijavi se</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
