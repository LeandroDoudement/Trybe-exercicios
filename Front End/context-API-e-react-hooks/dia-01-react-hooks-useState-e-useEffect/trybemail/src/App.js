import React from 'react';
import { useState } from 'react';
import './App.css';
import emailsData from './services/emailsData';
import List from './List';

function App() {
  const [emails, setEmails] = useState(emailsData);
  return (
    <>
      <header>
        <h1>Trybemail</h1>
      </header>
      <List emails={emails} setEmails={setEmails}></List>
    </>
  );
}

export default App;
