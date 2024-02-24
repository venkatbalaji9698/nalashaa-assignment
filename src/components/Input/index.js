import { useId } from "react";
import "./index.scss";

const Input = (props) => {
  const { label, value, errorMessage, handleChange } = props;
  const inputId = useId();

  return (
    <>
      <label className="input_label" htmlFor={inputId}>
        {label}:
      </label>
      <div className="input_container">
        <input id={inputId} type="text" value={value} onChange={handleChange} />
        {errorMessage !== '' && <p className="input_error-message">{errorMessage}</p>}
      </div>
    </>
  );
};

export default Input;
