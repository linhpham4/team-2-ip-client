import "./Button.scss";

const Button = ({ className, text, onClick }) => {
  return (
    <>
      <button className={`button ${className}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};
export default Button;
