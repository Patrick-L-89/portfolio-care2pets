import React from "react";

export default function MyPetsList(props) {
  return (
    <div>
      <div className="Pets">
        <h2>Hello, my name is {props.petName}</h2>
        <p>
          <img src={props.image} alt="this is you pet" />
          <ul>
            <li>Animal species: {props.species}</li>
            <li>Owner: {props.ownerUserName}</li>
            <li>Animal type: {props.animalType}</li>
            <li>Description: {props.petDescription}</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
