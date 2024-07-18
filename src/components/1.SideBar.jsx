import React, { useState } from 'react';
import { Form } from "react-bootstrap";

export default function Sidebar( {choices, setChoices}) {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);

    function handleYear(event) {
        console.log(event.target.value);
        setChoices({
            ...choices,
            year: event.target.value
        })
    }

    

  return (
    <div className="sidebar">
      
      <Form>
        <select name="year" onChange={handleYear}>
            <option value="" >Choose Year</option>
            <option value={currentYear}>{currentYear}</option>
            <option value={currentYear-1}>{currentYear-1}</option>
            <option value={currentYear-2}>{currentYear-2}</option>
            <option value={currentYear-3}>{currentYear-3}</option>
            <option value={currentYear-4}>{currentYear-4}</option>
            <option value={currentYear-5}>{currentYear-5}</option>
        </select>
      </Form>
      
    </div>
  );
}