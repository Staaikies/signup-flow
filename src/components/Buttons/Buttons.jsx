import { ProgressBar } from "../ProgressBar/ProgressBar";
import "./Buttons.css";
import ChevronDown from "../../assets/chevron-down.svg";
import { useNavigate } from "react-router-dom";



export const Button = ({children, style, size, ...props}) => {
  const navigate = useNavigate();
  return (
      <button onClick={() => navigate(props.to)} type="button" className={`button ${style ? `button--${style}` : `button--primary`} ${size ? `button--${size}` : `button--default`}`} disabled={props.disabled}>
        {children}
      </button>
  )
}

export const ButtonRow = ({leftText, leftTo, rightText, rightTo, rightDisabled, step}) => {
  return (
    <div className="button-row-wrapper">
      <ProgressBar step={step} />
      <div className="button-row">
        <Button to={leftTo} style="secondary">{leftText ? leftText : "Back"}</Button>
        <Button to={rightTo} style="primary" disabled={rightDisabled}>{rightText}</Button>
      </div>
    </div>
  )
}

export const ViewMoreButton = ({onClick, isOpen}) => {
  return (
    <button type="button" className="viewmore-button" onClick={onClick}>
      {isOpen ? "View less" : "View more"}
      <img src={ChevronDown} className={`viewmore-button__icon ${isOpen && "view-button__icon--expanded"}`} />
    </button>
  )
}