import { useState } from "react";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ViewMoreButton } from "../Buttons/Buttons";
import { Icon } from "../Icons/Icons"
import "./Cards.css";

const PlanCardContext = createContext();

export const PlanCard = ({title, description, features, ...props}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {value, onChange} = useContext(PlanCardContext);

  const toggleViewMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={`card-plan-wrapper ${value === props.value ? "card-plan-wrapper--selected" : ""}`}>
      <label className="card-plan" htmlFor={props.id}>
        <input 
          type="radio"
          checked={value === props.value}
          onChange={onChange}
          {...props} 
        />
        <span className="card-plan__icon">
          <span className="card-plan__icon-selected"></span>
        </span>
        <p className="card-plan__heading">
          {title} <span className="card-plan__heading-subtext">policy</span>
          <span className="card-plan__heading-price">€{props.price} per month</span>  
        </p>
        <div className={`card-plan__content ${isExpanded ? "card-plan__content--expanded" : ""}`}>
          
          <p className="card-plan__description">{description}</p>
          <div className="card-plan__content-spacer"></div>
          {features 
          ?
            <ul className="card-plan__feature-list">
              {features.map((feature, index) => (
                <li key={index} className="card-plan__feature"><Icon icon={feature.positive ? "checkmark" : "cancelcross"} size="small" /> {feature.description}</li>
              ))}
            </ul>
          :
            ''
          }
          <div className="card-plan__fade"></div>
        </div>
      </label>
      <ViewMoreButton onClick={toggleViewMore} isOpen={isExpanded} />
    </div>
  )
}

export const PlanCardWrapper = ({value, onChange, children}) => {
  return (
    <PlanCardContext.Provider value={{value, onChange}}>
      {children}
    </PlanCardContext.Provider>
  )
}

const SummaryLine = ({type, content}) => {
  return (
    <div className="summary-card-line">
      <div className="summary-card-line__content-wrapper">
        <label className="summary-card-line__label">{type}</label>
        <p className="summary-card-line__content">{content}</p>
      </div>
      <Button to="/details" style="text-link">edit</Button>
    </div>
  )
}

export const SummaryCard = ({userDetails, userPlan}) => {
  return (
    <div className="summary-card">
      <h1 className="summary-card__heading">Summary</h1>
      <div className="summary-card-line-wrapper">
        <SummaryLine type="Name:" content={userDetails.firstName + " " + userDetails.lastName} />
        <SummaryLine type="Email:" content={userDetails.email} />
        <SummaryLine type="Birth date:" content={userDetails.birthdate.day + "/" + userDetails.birthdate.month + "/" + userDetails.birthdate.year} />
      </div>
      
      <div className="card-plan-wrapper card-plan-wrapper--selected card-plan-wrapper--summary">
        <label className="card-plan">
          <span className="card-plan__icon">
            <span className="card-plan__icon-selected"></span>
          </span>
          <p className="card-plan__heading">
          {userPlan ? userPlan.title : ""} <span className="card-plan__heading-subtext">policy</span>
          <span className="card-plan__heading-price">€{userPlan.price} per month</span>  
        </p>
          <div className="card-plan__content card-plan__content--expanded">
            <p className="card-plan__description">{userPlan ? userPlan.description : ""}</p>
          </div>
        </label>
      </div>

        <Button to="/plans" style="text-link text-center" center={true}>change</Button>
      
    </div>
  )
}