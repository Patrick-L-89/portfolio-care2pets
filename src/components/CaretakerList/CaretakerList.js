import React from "react";
import "./CaretakerList.css";

export default function listCaretakers(props) {
  return (
    <div>
      <div className="caretakers">
        <h2>Username: {props.userName}</h2>
        <p>
          <img src={props.image} alt="the caretaker" />
          <ul>
            <li>Animalsits: {props.animalSits}</li>
            <li>City: {props.city}</li>
            <li>Animal types interested in: {props.animalTypes}</li>
            <li>Description: {props.description}</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
