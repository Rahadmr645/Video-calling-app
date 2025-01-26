import React,{useState,useCallback, useEffect} from 'react';
import './Lobbyscreen.css'
import { useSocket } from '../context/SocketProvider';
const Lobbyscreen = () => {
  
  const [email,setEmail] = useState('');
  const [room,setRoom] = useState('');
  
  const socket = useSocket();

  //handle for submit
  
  const handleForSubmit = useCallback((e) => {
    e.preventDefault();
    socket.emit("room:join",{email,room});
  },
  [email,room,socket]
)

// handle join room
const handleJoinRoom = useCallback((data) => {
  const {email, room} = data;
   console.log(email, room)
},[]);



useEffect(() => {
  socket.on("room:join", handleJoinRoom);
  return() => {
    socket.off('room:join', handleJoinRoom);
  }
})
  return (
    <div className='lobby-container'>
      <h1>Lobby</h1>
      <form onSubmit={handleForSubmit}>
        <div className='input-container' >
          <label htmlFor='email'>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id='email'/>
        </div>
        <div className='input-container' >
          <label htmlFor='room'>Room</label>
          <input value={room} onChange={(e) => setRoom(e.target.value)} type="number" placeholder="Enter your room" id='room'/>
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Lobbyscreen;
