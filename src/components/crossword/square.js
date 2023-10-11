import styles from "@/styles/crossword.module.css";

function Square(props) {
  let {
    character,
    key_character,
    handleSquareInput,
    handleKeyDown,
    row,
    col,
    clueNumber,
    dimensions,
    inputLocation,
  } = props;

  function handleChange(event) {
    handleSquareInput(event.target.value, row, col, inputLocation, event);
  }

  function handleDownKey(event) {
    handleKeyDown(event, row, col, inputLocation);
  }

  function backgroundYellow(event) {
    event.target.style.backgroundColor = "yellow"
  }
  function backgroundWhite(event) {
    event.target.style.backgroundColor = "white"
  }

  return (
    <>
      <div className={styles.div}>
        {clueNumber != 0 ? <p className={styles.number}>{clueNumber}</p> : null}
        <input
          ref={(element) =>
            (inputLocation.current[row * dimensions + col] = element)
          }
          className={styles.square}
          readOnly={key_character === "*" || key_character === "&"}
          style={
            key_character == "*"
              ? { backgroundColor: "black", borderColor: "black" }
              : key_character == "&"
              ? {
                  backgroundColor: "white",
                  height: 0,
                  width: 0,
                  border: 0,
                }
              : { backgroundColor: "white", borderColor: "black" }
          }
          maxLength={1}
          type="text"
          onChange={handleChange}
          onKeyDown={handleDownKey}
          onFocus={backgroundYellow}
          onBlur={backgroundWhite}
          disabled={
            key_character === "*" || key_character === "&"
          }
        ></input>
      </div>
    </>
  );
}

export default Square;
