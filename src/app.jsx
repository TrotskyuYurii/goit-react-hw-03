import { useState } from 'preact/hooks'
import './app.css'

import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import ContactList from './components/ContactList/ContactList.jsx'

export function App() {

  const usersContactInitial =    
  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];


  const [usersContact, setusersContact] = useState(()=>{
    const dateFromStorage = localStorage.getItem('usersContact');
    if (!dateFromStorage){
      return usersContactInitial;
    } else {return JSON.parse(dateFromStorage)}
  });



  






  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList usersContact={usersContact}/>
</div>

  )
}
