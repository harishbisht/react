import React from 'react'
import Sidebar from './Siderbar'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Users from './Users'
import {Container,Row, Col } from 'react-bootstrap'



export default function Webapi() {

    return (
        <div>
            <Router>    
            <Container>
                    
            <Row>
                  <Col>
                    <Sidebar/>
                  </Col>
                  <Switch>
                    
                        <Route exact path="/webapi/user">
                        <Col>
                            <Users/>
                        </Col>
                        </Route>
                        
                        <Route exact path="/post">
                        <Col>
                            this is post
                        </Col>
                        </Route>
                        <Route exact path="/Comments">
                        <Col>
                            this is comments
                        </Col>
                        </Route>
                </Switch>
            </Row>
            </Container>
           </Router>
        </div>
    )
}
