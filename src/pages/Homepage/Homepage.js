import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import CaretakerList from "./../../components/CaretakerList/CaretakerList";
import "./Homepage.css";

export default function Homepage() {
  const dispatch = useDispatch();
  const [caretakers, set_caretakers] = useState([]);

  useEffect(() => {
    async function fetchCaretakers() {
      const response = await axios.get(`http://localhost:4000/caretakers`);
      set_caretakers(response.data.caretakers);
    }
    fetchCaretakers();
  }, []);

  const caretakerList = caretakers;

  //console.log("what are my caretakers?", caretakers);

  if (caretakerList === undefined) return "loading";

  return (
    <div>
      <h1>Welcome to Care2Pets</h1>
      <div className="outerCaretakerBox">
        {caretakerList.map((caretaker) => {
          //console.log("WHAT IS A CARETAKER", caretaker);
          return (
            <CaretakerList
              key={caretaker.id}
              userName={caretaker.userName}
              image={caretaker.image}
              animalSits={caretaker.animalsits}
              city={caretaker.city}
              animalTypes={caretaker.animal_types_interested}
              description={caretaker.description}
            />
          );
        })}
      </div>
    </div>
  );
}
