import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import axios from 'axios'

export default function Users() {
    const [userstate, usersetstate] = useState([])
    const [paginationdata, setpaginationdata] = useState(null)
    const [pageNumber, setpageNumber] = useState(1) 
    const paginationClicked = (e) => {
       
        let page;
        console.log(e.target.text)
        if (e.target.text === '›Next'){
            page = paginationdata.page + 1
        }
        else if (e.target.text === "»Last"){
            page = paginationdata.pages
        }
        else{
            page = e.target.text
        }
        console.log(page)
        setpageNumber(page)

    }

    function makeUserRequest(){
        axios.get('https://gorest.co.in/public/v1/users', {
            params: {
            page: pageNumber
            }
        })
        .then(function (response) {
                        usersetstate(response.data.data)
                        console.log(response.data.meta.pagination)
                        setpaginationdata(response.data.meta.pagination)
                        console.log(paginationdata)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .then(function () {
                        console.log("Executed")
                    });  
    }

    useEffect(() => {
        makeUserRequest()
    }, [pageNumber]);

    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
          {userstate.map((userdata, index)=>(
                                <tr key={userdata.id}>
                                <td> </td>
                                <td> {userdata.id}</td>
                                <td> {userdata.name} </td>
                                <td> {userdata.email} </td>
                                <td> {userdata.gender} </td>
                                <td> {userdata.status} </td>
                                </tr>
                                ))}
            </tbody>
            </Table>
            { paginationdata ?
                <Pagination onClick = {paginationClicked}>
                    <Pagination.First/>
                    <Pagination.Prev />

                    <Pagination.Item { ...paginationdata.page - 2 <0 ? 'disabled': '' }>{ (paginationdata.page - 2) <=0 ? '': paginationdata.page - 2 }</Pagination.Item>
                    <Pagination.Item>{ (paginationdata.page - 1) <0 ? 'disabled': paginationdata.page -1 }</Pagination.Item>
                    
                    <Pagination.Item active>{paginationdata.page  }</Pagination.Item>
                    
                    <Pagination.Item>{paginationdata.page +1 }</Pagination.Item>
                    <Pagination.Item>{paginationdata.page +2 }</Pagination.Item>


                    <Pagination.Next />
                    <Pagination.Last/>
                </Pagination>
                : ''}
                    </div>        
    )
}



