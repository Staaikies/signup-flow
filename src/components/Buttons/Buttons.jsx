import "./Buttons.css";

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