import React,{useState,useCallback} from 'react';

const Lobbyscreen = () => {
  
  const [email,setEmail] = useState('');
  const [room,setRoom] = useState('');
  
  
  //handle for submit
  
  const handleForSubmit = useCallback((e) => {
    e.preventDefault();
    alert(JSON.stringify({
      email,
      room,
    }))
  })
  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleForSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id='email'/>
        </div>
        <div>
          <label htmlFor='room'>Room</label>
          <input value={room} onChange={(e) => setRoom(e.target.value)} type="number" placeholder="Enter your room" id='room'/>
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Lobbyscreen;
