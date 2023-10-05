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
          <span className="search-icon" onClick={handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#DFDEDE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <label htmlFor="">Search</label>
        </>
      ) : (
        <form onSubmit={handleInput}>
          <input
            type="text"
            className="searchBAr"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      )}
    </div>
  );
};

export default Search;
