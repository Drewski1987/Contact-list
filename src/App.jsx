import { useState } from 'react'
import './App.css'
import './Components/ContactList.jsx'
import ContactList from './components/ContactList'
import ContactRow from './Components/ContactRow'
import SelectedContact from './components/SelectedContact';


function App(){
  const [selectedContactId, setSelectedContactId] = useState(null);




  
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId = {selectedContactId} setSelectedContactId = {setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      ) }
      
    </>
  );
}


export default App