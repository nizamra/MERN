import React from 'react';
import io from 'socket.io-client';
  
  const Chat = props => {
      const [rmis, setRmis] = React.useState("");
      const [socket] = React.useState(() => io(':8000'));
      React.useEffect(() => {
        console.log("useEffect inside Chat.js");
        socket.on('sendingDataToOthers', data => {
            setRmis(data);
        });
        return () => socket.disconnect(true);
      })

      return (
          <h2>Ramallah testing Hi! {rmis}</h2>
      );
  }

  export default Chat