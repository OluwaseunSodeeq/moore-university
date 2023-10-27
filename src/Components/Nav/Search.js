import styles from "./Search.module.css";
import { useState } from "react";

const Search = () => {
  const [type, setType] = useState(true);
  const [input, setInput] = useState("");
  const [saveInput, setSavedInput] = useState("");

  const handleChange = function () {
    setType((curent) => !curent);
  };
  const handleInput = (e) => {
    e.preventDefault();
    setSavedInput(input);
    setType((curent) => !curent);
    setInput("");
  };
  const savedEnteredValue = saveInput;
  console.log(savedEnteredValue);

  return (
    <div className={styles.seacrchDiv}>
      {type ? (
        <>
          <span className={styles.searchIcon} onClick={handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <label htmlFor="">Search</label>
        </>
      ) : (
        <form onSubmit={handleInput}>
          <input
            type="text"
            className={styles.searchBAr}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      )}
    </div>
  );
};

export default Search;
