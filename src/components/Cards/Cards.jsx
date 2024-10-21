import { createContext, useContext } from "react";
import "./Cards.css";
import { ViewMoreButton } from "../Buttons/Buttons";

const RadioCardContext = createContext();

export const RadioCard = ({title, description, ...props}) => {
  const {value, onChange} = useContext(RadioCardContext);

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
        <div className="card-radio__content">
          <h3 className="card-radio__heading">{title}</h3>
          <p className="card-radio__description">{description}</p>
          <div className="card-radio__fade"></div>
        </div>
      </label>
      <ViewMoreButton />
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