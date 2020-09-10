import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import CaretakerList from "../../components/CaretakerList/CaretakerList";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Caretakers() {
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

  console.log("what is my caretakerList?", caretakerList);

  if (caretakerList === undefined) return "loading";

  return (
    <div>
      <Jumbotron>
        <h1>Welcome to Care 2 Pets</h1>
      </Jumbotron>
      <div className="outerCaretakerBox">
        {caretakerList.map((caretaker) => {
          console.log("WHAT IS A INDIVICUAL CARETAKER?", caretaker);
          return (
            <CaretakerList
              key={caretaker.id}
              userName={caretaker.userName}
              image={caretaker.image}
              animalSits={caretaker.animalsits}
              city={caretaker.city}
              animalTypes={caretaker.animalTypesInterested}
              description={caretaker.description}
            />
          );
        })}
      </div>
    </div>
  );
}
