import "./Buttons.css";
import ChevronDown from "../../assets/chevron-down.svg";

export const Button = ({children, style, size}) => {
  return (
    <button type="button" className={`button ${style ? `button--${style}` : `button--primary`} ${size ? `button--${size}` : `button--default`}`}>
      {children}
    </button>
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