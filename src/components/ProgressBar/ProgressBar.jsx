import "./ProgressBar.css";

export const ProgressBar = ({step}) => {
  return (
    <div className={`progress-bar progress-bar--step-${step}`}></div>
  )
}