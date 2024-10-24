import "./Forms.css";

export const FormWrapper = ({children, onSubmit}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export const TextInput = ({ label, type = "text", value, onChange, id, error }) => {
  return (
    <div className="text-input-wrapper">
      <label className="form-label" htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={id} 
        value={value} 
        onChange={onChange} 
        className={`text-input ${error ? "input-error" : ""}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};


export const BirthdaySelect = ({ label, value, onChange }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div>
      <label className="form-label" htmlFor="day">{label}</label>
      <div className="select-dropdown-horizontal-wrapper">
        <select className="select-dropdown" value={value.day} onChange={(e) => onChange({ ...value, day: e.target.value })}>
          <option value="">Day</option>
          {days.map(day => <option key={day} value={day}>{day}</option>)}
        </select>
        <select className="select-dropdown" value={value.month} onChange={(e) => onChange({ ...value, month: e.target.value })}>
          <option value="">Month</option>
          {months.map(month => <option key={month} value={month}>{month}</option>)}
        </select>
        <select className="select-dropdown" value={value.year} onChange={(e) => onChange({ ...value, year: e.target.value })}>
          <option value="">Year</option>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};