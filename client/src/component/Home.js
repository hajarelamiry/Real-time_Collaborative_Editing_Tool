import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomId,setroomId]=useState("");
  const [username,setusername]=useState("");
  
  const navigate=useNavigate();

  const generateRoomId=(e)=>{
    e.preventDefault();
    const id =uuid();
    setroomId(id);
    toast.success("Room Id is generated")
  };

  const joinRoom=()=>{
    if(!roomId || !username){
      toast.error("Both the field is required");
      return;
    }
    navigate(`/editor/${roomId}`,{
      state:{username}
    })
    toast.success('Room is created')
  };

  return (
    <div className='container-fluid'>
        <div className='row justify-content-center align-items-center min-vh-100'>
            <div className='col-12 col-md-6'>
                <div className='card shadow-sm p-2 mb-5 bg-secondry rounded'>
                    <div className='card-body text-center ' style={{ backgroundColor: '#343a40' }}>
                      <br></br>
                     <img className='img-fluid mx-auto d-block' src='/images/logo.png' alt='codeeditor' style={{maxWidth:"220px"}}></img>
                     <br></br>
                     <br></br>
                     <h3 className='text-light'>Enter the Room Id</h3>
                     <div className='form-group'>
                       <input
                       value={roomId}
                       onChange={(e)=>{setroomId(e.target.value)}}
                       type='text'
                       className='form-control mb-2'
                       placeholder='Room Id'
                       />
                       </div>
                       <div className='form-group'>
                       <input
                       value={username}
                       onChange={(e)=>{setusername(e.target.value)}}
                       type='text'
                       className='form-control mb2'
                       placeholder='Username'
                       />
                       </div>
                       <br></br>
                       <button onClick={joinRoom} className='btn btn-success btn-lg btn-block'>JOIN</button>
                       <p className='mt-3 text-light'>Don't have a room Id?{' '} 
                       <span className='text-success p-2' style={{cursor:'pointer'}} onClick={generateRoomId}>New Room</span></p>
                     
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Home