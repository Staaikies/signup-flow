import { ProgressBar } from "../ProgressBar/ProgressBar";
import "./Buttons.css";
import ChevronDown from "../../assets/chevron-down.svg";
import { useNavigate } from "react-router-dom";

export const Button = ({ children, style, size, to, onClick, disabled, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to && !disabled) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`button ${style ? `button--${style}` : `button--primary`} ${size ? `button--${size}` : `button--default`} ${props.center ? `button--center` : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


export const ButtonRow = ({ leftType, leftText, leftTo, rightType, rightText, rightTo, rightOnClick, rightDisabled, step }) => {
  return (
    <div className="button-row-wrapper">
      <ProgressBar step={step} />
      <div className="button-row">
        <Button type={leftType || "button"} to={leftTo} style="secondary">
          {leftText || "Back"}
        </Button>
        <Button
          type={rightType || "button"}
          to={rightTo || ""}
          onClick={rightOnClick}
          style="primary"
          disabled={rightDisabled}
        >
          {rightText || "Confirm"}
        </Button>
      </div>
    </div>
  );
};


export const ViewMoreButton = ({onClick, isOpen}) => {
  return (
    <button type="button" className="viewmore-button" onClick={onClick}>
      {isOpen ? "View less" : "View more"}
      <img src={ChevronDown} className={`viewmore-button__icon ${isOpen && "view-button__icon--expanded"}`} />
    </button>
  )
}