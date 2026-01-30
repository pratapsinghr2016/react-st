import { useLayoutEffect, useRef, useState } from 'react';

const ChatMessageList = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey, how are you?' },
    { id: 2, text: 'I am doing great!' },
    { id: 3, text: 'Want to grab coffee?' },
  ]);

  const messagesEndRef = useRef(null);
  const messageRefs = useRef([]);
  const messageHeights = useRef({});

  // Point 1: Auto-scroll to latest message
  useLayoutEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  // Point 2: Measure message heights
  useLayoutEffect(() => {
    messageRefs.current.forEach((ref) => {
      if (ref) {
        messageHeights.current[ref.dataset.id] = ref.offsetHeight;
      }
    });
    console.log('Message heights:', messageHeights.current);
  }, [messages]);

  const addMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      text: `Message ${messages.length + 1}`,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h2>Chat Messages</h2>

      {/* Messages Container */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={message.id}
            ref={(el) => {
              messageRefs.current[index] = el;
            }}
            data-id={message.id}
            style={{
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            {message.text}
          </div>
        ))}
        {/* This div will be scrolled into view */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <button
        onClick={addMessage}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Add Message
      </button>
    </div>
  );
};

export default ChatMessageList;