const Button = (props) => {
  return (
    <button
      className="reset"
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      O
    </button>
  );
};

export default Button;
