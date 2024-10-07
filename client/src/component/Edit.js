import React, { useState } from 'react'
import Client from './Client';
import Editor from './Editor';
import { useNavigate } from 'react-router-dom';

function Edit() {
  //useState permet de cree une variable d'etat
  //setclient permet de faire la mise a jour
  // clients est la variable d'etat 
  const[clients,setClient]=useState([
      { socketId:1, username:'hajar'},
      {socketId:2, username:'elamiry'},
    ]);
  const navigate=useNavigate();
  const leave=()=>{
    navigate(`/`)
  };

  return ( 
    <div className='container-fluid vh-100'>
      <div className='row h-100'>
        <div className='col-md-2 text-light d-flex flex-column h-100' style={{boxShadow:"20px 0px 4px rgba(10,10,10,0.3)", backgroundColor:"rgba(52, 58, 64, 1)"}}>
          <img className='img-fluid mx-auto d-block' src='/images/logo.png' alt='codeeditor' style={{maxWidth:"190px", marginTop:'20px'}}></img>
          <hr/> 
          {/* client list     */}
          <div className='d-flex flex-column overflow-auto'>
            {clients.map((client)=>(
               <Client key={client.socketId} username={client.username}/>  
            ))}
          </div>
          {/* buttons */}
          <div className='mt-auto'>
            <hr/>
            <button className='btn btn-success'>Copy Room Id</button>
            <p></p>
            <button className='btn btn-danger mb-2 px-3 btn-block' onClick={leave}>Leave Room</button>
          </div>
        </div>
        <div className='col-md-10 text-light d-flex flex-column h-100'>
          <Editor />
        </div>

      </div>

    </div>
  )
}

export default Edit