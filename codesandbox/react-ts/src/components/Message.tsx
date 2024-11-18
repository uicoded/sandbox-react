import React from "react";
import "./Message.css"; // Optional, if you'd like to style the component

export type MessageType = "warning" | "info" | "error" | "success";

// interface MessageProps {
//   type?: MessageType;
//   children: React.ReactNode;
// }

// export default function Message({ type, children }: MessageProps) {
//   const typeClass = `message-${type}`;

//   return <div className={`message ${typeClass}`}>{children}</div>;
// }

// Either way it is upto you.
export default function Message({ type, children }: {type?: MessageType, children: React.ReactNode}) {
  const typeClass = `message-${type}`;

  return <div className={`message ${typeClass}`}>{children}</div>;
}
