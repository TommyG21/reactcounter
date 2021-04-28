const Button = (props) => {
  return (
    <button
      className="reset"
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      Cliquez ici !
    </button>
  );
};

export default Button;
