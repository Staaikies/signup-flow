import "./Icons.css";

export const Icon = ({icon, size}) => {
  return (
    <i className={`icon icon--${icon} icon--${size}`}></i>
  )
}