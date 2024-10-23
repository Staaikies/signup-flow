import ReactS from "react";
import { FormWrapper, TextInput, BirthdaySelect } from '../components/Forms/Forms';
import { ButtonRow } from "../components/Buttons/Buttons";

const Details = ({userDetails, setUserDetails, handleBirthdateChange}) => {

  const detailsFilled = (userDetails.firstName && userDetails.lastName && userDetails.email);
  
  return (
    <div className="section">
      <h1 className="heading heading--is-light text-center">Your details</h1>
      <FormWrapper>
        <div className="form-field form-field--horizontal">
          <TextInput 
            label="First name:"
            value={userDetails.firstName}
            onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
            id="firstName"
          />
          <TextInput 
            label="Last name:"
            value={userDetails.lastName}
            onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
            id="lastName"
          />    
        </div>
        <div className="form-field">
          <TextInput 
            label="Email:"
            value={userDetails.email}
            onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
            id="email"
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
        rightTo={detailsFilled != "" ? "/plans" : ""}
        rightDisabled={!detailsFilled}
        step={1}
      />
    </div>
  );
};

export default Details;