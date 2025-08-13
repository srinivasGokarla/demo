import React, { useRef } from 'react'
import {firestore} from '../firebase'
import { addDoc, collection } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const messageRef = useRef()
    const ref = collection(firestore, "message")
    const navigate = useNavigate();


  const handleSave = async (e) => {
    e.preventDefault();
    const message = messageRef.current.value;
    try {
      await addDoc(ref, { message });
      navigate('/greeting', { state: { userMessage: message } });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
     <form onSubmit={handleSave}>
        <label> Enter Message</label>
        <input type="text" ref={messageRef}/>
        <button type="submit">Save</button>
     </form>
    </div>
  )
}

export default Home
