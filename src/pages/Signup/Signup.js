import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [fullName, set_fullName] = useState("");
  const [userName, set_userName] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [streetName, set_streetName] = useState("");
  const [city, set_city] = useState("");
  const [houseNumber, set_houseNumber] = useState("");
  const [phoneNumber, set_phoneNumber] = useState(" ");
  const [isCaretaker, set_isCaretaker] = useState(false);
  const [animalTypesInterested, set_animalTypesInterested] = useState("");
  const [description, set_description] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      signUp(
        fullName,
        userName,
        email,
        password,
        streetName,
        city,
        houseNumber,
        phoneNumber,
        isCaretaker,
        animalTypesInterested,
        description
      )
    );

    set_fullName("");
    set_userName("");
    set_email("");
    set_password("");
    set_streetName("");
    set_city("");
    set_houseNumber(0);
    set_phoneNumber(" ");
    set_isCaretaker(false);
    set_animalTypesInterested("");
    set_description("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicfullName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(event) => set_fullName(event.target.value)}
            type="text"
            placeholder="Enter your full name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicuserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={userName}
            onChange={(event) => set_userName(event.target.value)}
            type="text"
            placeholder="Enter your desired user name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => set_password(event.target.value)}
            type="password"
            placeholder="type your Password"
            required
          />
          <Form.Group controlId="formBasicstreet">
            <Form.Label>Streetname</Form.Label>
            <Form.Control
              value={streetName}
              onChange={(event) => set_streetName(event.target.value)}
              type="text"
              placeholder="Enter your streetname"
            />
          </Form.Group>
          <Form.Group controlId="formBasiccity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(event) => set_city(event.target.value)}
              type="text"
              placeholder="Enter your city"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasichouseNumber">
            <Form.Label>House number</Form.Label>
            <Form.Control
              value={houseNumber}
              onChange={(event) => set_houseNumber(event.target.value)}
              type="text"
              placeholder="Enter your housenumber and extension"
            />
          </Form.Group>
          <Form.Group controlId="formBasicphoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              value={phoneNumber}
              onChange={(event) => set_phoneNumber(event.target.value)}
              type="number"
              placeholder="Enter your phonenumber"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => set_email(event.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicisCaretaker">
            <Form.Label>Are you interested in taking care of pets?</Form.Label>
            <Form.Control
              value={isCaretaker}
              onChange={(event) => set_isCaretaker(isCaretaker ? false : true)}
              type="checkbox"
            />
          </Form.Group>
          <Form.Group controlId="formBasicanimalTypesInterested">
            <Form.Label>Animal types interested in:</Form.Label>
            <Form.Control
              value={animalTypesInterested}
              onChange={(event) =>
                set_animalTypesInterested(event.target.value)
              }
              type="text"
              placeholder="Enter the animals your interested in"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(event) => set_description(event.target.value)}
              type="text"
              placeholder="Enter a description of yourself for others to see"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
