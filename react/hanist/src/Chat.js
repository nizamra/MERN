import React from 'react';
import io from 'socket.io-client';
  
  const Chat = props => {

      const [rmis, setRmis] = React.useState("");
      const [socket] = React.useState(() => io(':8000'));
      React.useEffect(() => {
        console.log('Is this running?');
        socket.on('sendingDataToOthers', data => {
            setRmis(data);
          console.log('Presenting Data');
          console.log(data)
        });
    
        // return () => socket.disconnect(true);
      }, []);

      return (
          <h2>Ramallah testing Hi! {rmis}</h2>
      );
  }

  export default Chat