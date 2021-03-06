import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Izradi svoj profil</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Dodaj neke informacije o sebi
      </p>
      <small>* = obavezno polje</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Čime se baviš'
            name='status'
            value={status}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Čime se trenutno baviš, koja je tvoja pozicija ukoliko si zaposlen
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Tvrtka / fakultet / škola'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Tvrtka u kojoj si zaposlen, tvrtka koju vodiš, fakultet, škola
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Web stranica'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Vlastita web stranica, web stranica tvrtke
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Lokacija'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Grad i država u kojoj živiš (npr. Varaždin, Hrvatska)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Vještine'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Koristi zareze za navođenje više vještina (npr. Photoshop, Web
            programiranje)
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Kratka biografija'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Napiši nešto više o sebi</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Ostale društvene mreže
          </button>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' value='Spremi' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Natrag
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
