import React, { useState, useEffect } from 'react'
import { Form, Button, ListGroup, Container,Row, Col } from 'react-bootstrap'

export default function Todos() {
    const [todo, setTodo] = useState([{name:"first todo", key:1}, {name: "second todo", key: 2}])
    const [inputValue, setInputValue] = useState("")

    function CustomTODOItems({props}) {
        return (<Container>
                    <Row>
                        <Col><ListGroup.Item>{props.name}</ListGroup.Item></Col>
                        <Col><Button onClick={(e)=>DeleteButtonClicked(props)} variant="danger">Delete</Button></Col>
                    </Row>
                    <br/>
                </Container>)
    }


    const DeleteButtonClicked = (props)=> {
        let tempTodo = []
        for( var i = 0; i < todo.length; i++){     
            if ( todo[i].key === props.key) { 
                continue
            }
            else{
                tempTodo.push(todo[i])
            }
        }

        setTodo(tempTodo)
        console.log(props)
    }


    const submitbuttonClicked = (params) => {
        params.preventDefault();
        let key
        if (todo.length===0) {
            key=0
        }
        else{
        key = todo[todo.length-1].key + 1
        }
        if (inputValue !== ""){
            const new_todo = {name: inputValue, key: key}
            console.log(new_todo);
            setTodo([...todo, new_todo]);
            setInputValue("")
        }
    }
    useEffect(() => {
        console.log("hiiiiiiiii")             
        },[inputValue, ])



    return (
        <div style={{paddingLeft : "10%", paddingRight: "10%"}}>    
                <div>
                    <h1 style={{ textAlign : "center"}}>Enter the list items</h1>
                    <Form onSubmit={submitbuttonClicked}> 
                        <Form.Group className="mb-3" controlId="formBasicItem">
                            <Form.Label>Enter item name</Form.Label>
                            <Form.Control onChange={(e)=>setInputValue(e.target.value)} 
                                        value={inputValue} type="item"
                                        placeholder="Enter Item Name" />
                        </Form.Group>
                        <Button onClick={submitbuttonClicked} variant="primary" type="button">
                        Submit
                    </Button>   
                    </Form>
                </div>
        <hr/>
        <hr/>
        <h2>Listing:</h2>
        <ListGroup>
            {todo.map((todo_item)=>(<CustomTODOItems key={todo_item.key} props={todo_item} />))}
        </ListGroup>
    </div>

)
}
