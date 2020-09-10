import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCaretakersByAnimalType } from "../../store/SearchCaretakers/actions";
import CaretakerList from "../../components/CaretakerList/CaretakerList";
import Jumbotron from "react-bootstrap/Jumbotron";
import { selectSearchCaretakers } from "../../store/SearchCaretakers/selectors";

export default function Caretakers() {
  const dispatch = useDispatch();
  const [animalTypeFilter, set_animalTypeFilter] = useState("birds");
  const searchCaretakers = useSelector(selectSearchCaretakers);

  useEffect(() => {
    dispatch(fetchCaretakersByAnimalType(animalTypeFilter));
  }, [dispatch, animalTypeFilter]);

  console.log("WHAT IS searchCaretakers", searchCaretakers);

  return (
    <div>
      <Jumbotron>
        <h1>Search for a caretaker here:</h1>
      </Jumbotron>
      <div className="searchCheckBoxes">
        the search criteria are:
        <input
          type="radio"
          name="birds"
          checked={animalTypeFilter === "birds"}
          onClick={(event) => set_animalTypeFilter("birds")}
        ></input>
        Birds
        <input
          type="radio"
          name="bugs"
          checked={animalTypeFilter === "bugs"}
          onClick={(event) => set_animalTypeFilter("bugs")}
        ></input>
        Bugs
        <input
          type="radio"
          name="snakes"
          checked={animalTypeFilter === "snakes"}
          onClick={(event) => set_animalTypeFilter("snakes")}
        ></input>
        Snakes
        <input
          type="radio"
          name="turtles"
          checked={animalTypeFilter === "turtles"}
          onClick={(event) => set_animalTypeFilter("turtles")}
        ></input>
        Turtles
        <input
          type="radio"
          name="otherReptiles"
          checked={animalTypeFilter === "otherReptiles"}
          onClick={(event) => set_animalTypeFilter("otherReptiles")}
        ></input>
        Other reptiles
        <input
          type="radio"
          anme="mammals"
          checked={animalTypeFilter === "mammals"}
          onClick={(event) => set_animalTypeFilter("mammals")}
        ></input>
        Mammals
        <input
          type="radio"
          name="fish"
          checked={animalTypeFilter === "fish"}
          onClick={(event) => set_animalTypeFilter("fish")}
        ></input>{" "}
        Fish
        <input
          type="radio"
          name="otherAnimals"
          checked={animalTypeFilter === "otherAnimals"}
          onClick={(event) => set_animalTypeFilter("otherAnimals")}
        ></input>
        Other animals
      </div>
      <div className="outerCaretakerBox">
        {searchCaretakers.map((caretaker) => {
          console.log("GIVE ME MY CARETAKERS!!!", caretaker);
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
