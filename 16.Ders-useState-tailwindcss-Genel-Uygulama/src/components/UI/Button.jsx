/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button
      className={`py-2 text-lg bg-teal-700 text-white ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
