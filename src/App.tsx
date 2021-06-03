import React, { useState } from "react";
import students from "./studentInfo";
import "./App.css";
import Student from "./components/Student/Student";
import SearchField from "./components/SearchField/SearchField";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = (event:any) => {
    let keyword = event.target.value
    setSearchTerm(keyword);
  };

  const studentInfo = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
    //student info
  );

  return (
    <div className="App">
      <SearchField text={searchTerm} onChange={onChange}/>
      <Student display={studentInfo} />
    </div>
  );
}

export default App;
