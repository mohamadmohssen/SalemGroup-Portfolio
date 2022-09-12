import React from "react";
import "./drop.css";

export default function Drop({subject, setSubject}) {
  const handleChange = (value) => {
    setSubject(value)
  }
  return (
    <div class="dropdown">
      <button class="dropbtn" >{subject === ""? "Subject" : subject}</button>
      <div class="dropdown-content">
        <span onClick={()=>handleChange("Inquiries")}>Inquiries </span>
        <span onClick={()=>handleChange("Quotation request")}>Quotation request</span>
        <span onClick={()=>handleChange("Other")}>Other</span>
      </div>
    </div>
  );
}
