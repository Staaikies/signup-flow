import "./Buttons.css";
import ChevronDown from "../../assets/chevron-down.svg";

export const Button = ({children, style, size}) => {
  return (
    <button type="button" className={`button ${style ? `button--${style}` : `button--primary`} ${size ? size : `button--default`}`}>
      {children}
    </button>
  )
}

export const ButtonRow = ({children}) => {
  return (
    <div className="button-row">
      {children.map((child) => (
        <>
          {child}
        </>
      ))}
    </div>
  )
}

export const ViewMoreButton = ({onclick, isOpen}) => {
  return (
    <button type="button" className="viewmore-button" onClick={() => {console.log("ViewMore Clicked!")}}>
      {isOpen ? "View less" : "View more"}
      <img src={ChevronDown} className="viewmore-button__icon" />
    </button>
  )
}