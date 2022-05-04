import React, {useState, useEffect, useRef} from 'react'

//l'argomento è la props = quello che ci interessa ricavare dal form
const TodoForm = (props) => {
const [input, setInput] = useState(props.edit ? props.edit.value : '');
const [id, setId] = useState(0);


const inputRef = useRef(null);

//automaticamente pronto x input utente
useEffect(() => {
    inputRef.current.focus()
})

const giveId = () => {
    setId(id +1)
    return id; 
}

const handleChange = (e) => {
    setInput(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();   

    //salva l'input in un oggetto, per ogni oggetto un id unico
    props.onSubmit({
        id: giveId(),
        text: input
    });

    setInput('');
}; 


  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
        <>
          <input
            placeholder='Hai cambiato idea?'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Cambia
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Cosa devi fare oggi?'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Aggiungi
          </button> 
          </>
      )}
         </form>
    </div>
  )
}

export default TodoForm;