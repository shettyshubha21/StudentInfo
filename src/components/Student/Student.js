import React from "react";

import styles from "./Student.module.css";

const Student = ({ display }) =>
  display.map(info => <StudentInfo key={info.id} info={info} />
);

const StudentInfo = ({ info }) => {
  return (
            <div className={styles.student}>
            
            <h4>Name: {info.name}</h4>
              <p>Age: {info.age} years</p>
              <p>Course: {info.course}</p>
            </div>
             
            
  );
};

export default Student;
