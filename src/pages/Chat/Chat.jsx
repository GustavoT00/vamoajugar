import React, { useState, useEffect } from 'react'
import socket from './socket-client'
import './Chat.css'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    // Escuchar mensajes del servidor
    socket.on('mensaje-recibido', newMessage => {
      setMessages(messages => [...messages, newMessage])
    });

    // Escuchar usuarios conectados del servidor
    socket.on('usuarios-conectados', users => {
      setUsers(users);
    });

    // Limpiar la conexión al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, [])

  const handleSubmit = event => {
    event.preventDefault();
    if (selectedUser) {
      // Enviar el mensaje al usuario seleccionado
      socket.emit('enviar-mensaje-privado', { message, to: selectedUser });
      setMessages(messages => [...messages, { text: message, sender: 'Me' }]);
      setMessage('');
    }
  }

  const handleUserClick = user => {
    setSelectedUser(user);
    // Puedes cargar el historial de mensajes con este usuario aquí
  }

  return (
    <div className="ChatContainer">
      <div className="UsersList">
        <h2>Usuarios Conectados</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => handleUserClick(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="Chat">
        {selectedUser && (
          <div className="ChatHeader">
            <h2>Chat con {selectedUser.name}</h2>
          </div>
        )}
        <div className="ChatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`ChatMessage ${msg.sender === 'Me' ? 'MyMessage' : 'TheirMessage'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        {selectedUser && (
          <form onSubmit={handleSubmit} className="ChatForm">
            <input type="text" placeholder="Escribir un mensaje" value={message} onChange={event => setMessage(event.target.value)} />
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Chat
