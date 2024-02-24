import "./index.scss";

const Button = (props) => {
  const { type, children, cssClassName, handleClick } = props;

  const classNames = `button ${cssClassName ? cssClassName : ""}`;

  return (
    <button className={classNames} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
