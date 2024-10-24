import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { FormWrapper, TextInput, BirthdaySelect } from '../components/Forms/Forms';
import { ButtonRow } from "../components/Buttons/Buttons";

const Details = ({userDetails, setUserDetails, handleBirthdateChange}) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate ();

  const validate = () => {
    const newErrors = {};
    if (!userDetails.firstName) newErrors.firstName = "First name is required";
    if (!userDetails.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (userDetails.lastName.length < 2) {
      newErrors.lastName = "Please enter a valid last name"
    }
    if (!userDetails.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = "Email address is invalid";
    }
    return newErrors;
  };

  const handleChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      navigate("/plans");
    }
  };

  const detailsFilled = (userDetails.firstName && userDetails.lastName && userDetails.email && userDetails.birthdate.day && userDetails.birthdate.month && userDetails.birthdate.year);
  
  return (
    <div className="section">
      <h1 className="heading heading--is-light text-center">Your details</h1>
      <FormWrapper>
        <div className="form-field">
          <div className="form-field-horizontal">
            <TextInput 
              label="First name:"
              value={userDetails.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              id="firstName"
            />
            <TextInput 
              label="Last name:"
              value={userDetails.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              id="lastName"
            />    
          </div>
          {errors.firstName
          ?
            <span className="error-message">{errors.firstName}</span>
          : 
            ""
          }
          {errors.lastName
          ?
            <span className="error-message">{errors.lastName}</span>
          : 
            ""
          }
          
          
        </div>
        
        <div className="form-field">
          <TextInput 
            label="Email:"
            value={userDetails.email}
            onChange={(e) => handleChange('email', e.target.value)}
            id="email"
            error={errors.email}
          />    
        </div>
        <div className="form-field form-field--flush">
          <BirthdaySelect
            label="Birthday:"
            value={userDetails.birthdate}
            onChange={handleBirthdateChange}
          />
        </div>
      </FormWrapper>


      <ButtonRow
        leftTo="/"
        rightText="Confirm"
        rightOnClick={handleSubmit}
        rightDisabled={!detailsFilled}
        step={1}
      />
    </div>
  );
};

export default Details;