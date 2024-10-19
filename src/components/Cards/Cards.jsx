import ChevronDown from "../../assets/chevron-down.svg";

export const ViewMoreButton = ({onclick, isOpen}) => {
  return (
    <button className="button-viewmore">
      {isOpen ? "View less" : "View more"}
      <img src={ChevronDown} className="button-viewmore__icon" />
    </button>
  )
}

export const RadioCard = ({id, name, value, title, description}) => {
  return (
    <div className="card-radio">
      <input type="radio" id={id} name={name} value={value} />
      <div className="card-radio__header">
        <h3 className="card-radio__heading">{title}</h3>
        <span className="card-radio__icon">
          <span className="card-radio__icon-active"></span>
        </span>
      </div>
      <div>
        <p className="card-radio__description">{description}</p>
        <ViewMoreButton />
      </div>
    </div>
  )
}