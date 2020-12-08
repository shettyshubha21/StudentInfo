import React from "react";
import styles from "./SearchField.module.css";

const SearchField = ({text, onChange}) => {
  return (
    <div className={styles.SearchField}>
       <input type="text" placeholder="Enter student name to be searched"  value={text} onChange={onChange} />   
    </div>
  );
};
SearchField.propTypes = {};

export default SearchField;
