import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyPetsList from "../../components/MyPetsList/MyPetsList";
import { selectUser } from "../../store/user/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import { fetchMyPetsById } from "../../store/MyPets/actions";
import { selectMyPetsDetails } from "../../store/MyPets/selectors";

export default function MyPets() {
  const user = useSelector(selectUser);
  const [myPets, set_myPets] = useState([]);
  const myPet = useSelector(selectMyPetsDetails);

  const dispatch = useDispatch();

  const id = user.id;

  useEffect(() => {
    dispatch(fetchMyPetsById(id));
  }, [dispatch, id]);

  console.log("What is mypets?", myPets);

  return (
    <div>
      <Jumbotron>
        <h1>These are your awesdome pets!</h1>
      </Jumbotron>
      <MyPetsList
        key={myPet.id}
        petName={myPet.PetName}
        image={myPet.image}
        ownerUserName={user.userName}
        species={myPet.species}
        animalType={myPet.animal_type}
        petDescription={myPet.pet_description}
      />
    </div>
  );
}
