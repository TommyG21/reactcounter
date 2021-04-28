const Button = (props) => {
  return (
    <button
      className="reset"
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      0
    </button>
  );
};

export default Button;
