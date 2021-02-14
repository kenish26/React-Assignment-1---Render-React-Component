import React from 'react';
import { Container, Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';


const Cityinput = ({city,setCity,fetchCityWeather}) => {
    
    const [error,setError]=React.useState("");
    const handleInputChange = (event) => {
           setCity(event.target.value);
    };
    //console.log("City is" ,city);
    const handleSubmit=()=>
    {
        if(!city)
        {
            setError("Field is empty");
        }
        else
        {
            setError("")
            fetchCityWeather();
            //Makeapi call
        }
    }


    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control 
            value={city}
            type="text" 
            placeholder="Enter city"
            onChange={handleInputChange}
            />
            <p className ="text-danger">{error}</p>
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  };
export default Cityinput;