import "./Forms.css";

export const FormWrapper = ({children}) => {
  return (
    <form className="form">
      {children}
    </form>
  )
}

export const TextInput = ({ label, type, value, onChange, id }) => {
  return (
    <div className="text-input-wrapper">
      <label className="form-label">{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} className="text-input" />
    </div>
  );
};


export const BirthdaySelect = ({ label, value, onChange }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div>
      <label className="form-label">{label}</label>
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