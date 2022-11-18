import React, { useEffect } from 'react';

function List({emails, setEmails}) {


  useEffect(() => {
    const isAllEmailsRead = emails.every((email) => email.status === 1)
    if(isAllEmailsRead){
      alert('Todos os emails foram lidos')
    }
  },[emails])

  const setEmailStatus = (emailID, status) => {
    const updatedEmails = emails.map((email) => {
      if(email.id === emailID){
        return {...email, status}
      }
      return email
    })

    setEmails(updatedEmails)
  }

  const setAllEmailStatus = (status) => {
    const updatedEmails = emails.map((email) => {
      return {...email, status}
    })

    setEmails(updatedEmails)
  }

  return (
    <>
      <button type='button' onClick={ () => setAllEmailStatus(1) }>Marcar todos como lido</button>
      <button type='button'  onClick={ () => setAllEmailStatus(0) }>Marcar todos como não lido</button>
      {emails.map((email, index) => (
        <div key={index}>
          <p key={email.id} className={email.status === 1 ? 'readEmail' : null}>
            {email.title}
          </p>
          <button type='button' onClick={ () => setEmailStatus(email.id, 1) }>
            Marcar como lido
          </button>
          <button type='button' onClick={ () => setEmailStatus(email.id, 0) }>Marcar como não lido</button>
        </div>
      ))}
    </>
  );
}

export default List;
