import Message, { MessageType } from "./components/Message";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [messageType, setMessageType] = useState<MessageType>("info");

  function handleChange (event: React.ChangeEvent<HTMLSelectElement>) {
    setMessageType(event.target.value as MessageType);
  }

  return (
    <div className="App">
      <h1>CodeSandbox</h1>
      <Message type={messageType}>Received {messageType} message</Message>
      <select onChange={handleChange}>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
        <option value="success">Success</option>
      </select>
    </div>
  );
}
