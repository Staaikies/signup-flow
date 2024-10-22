import { useState } from "react";
import { createContext, useContext } from "react";
import "./Cards.css";
import { ViewMoreButton } from "../Buttons/Buttons";
import { Icon } from "../Icons/Icons"

const RadioCardContext = createContext();

export const RadioCard = ({title, description, features, ...props}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {value, onChange} = useContext(RadioCardContext);

  const toggleViewMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={`card-radio-wrapper ${value === props.value && "card-radio-wrapper--selected"}`}>
      <label className="card-radio" htmlFor={props.id}>
        <input 
          type="radio"
          checked={value === props.value}
          onChange={onChange}
          {...props} 
        />
        <span className="card-radio__icon">
          <span className="card-radio__icon-selected"></span>
        </span>
        <div className={`card-radio__content ${isExpanded && "card-radio__content--expanded"}`}>
          <h3 className="card-radio__heading">{title}</h3>
          <p className="card-radio__description">{description}</p>
          <ul className="card-radio__feature-list">
            {features.map((feature) => (
              <li className="card-radio__feature"><Icon icon={feature.positive ? "checkmark" : "cancelcross"} size="small" /> {feature.description}</li>
            ))}
          </ul>
          <div className="card-radio__fade"></div>
        </div>
      </label>
      <ViewMoreButton onClick={toggleViewMore} isOpen={isExpanded} />
    </div>
  )
}

export const RadioCardWrapper = ({value, onChange, children}) => {
  return (
    <RadioCardContext.Provider value={{value, onChange}}>
      {children}
    </RadioCardContext.Provider>
  )
}