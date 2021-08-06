import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";

const LoginForm = (props) => {
  const [name, setname] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();

  };
  const onTextChange = (e) => {
    setname(e.target.value);
  };
  return (
    <center>
    <h1> socket Messenger </h1>
    <form onSubmit={handelSubmit} >
    <TextField
      name="message"
      onChange={(e) => onTextChange(e)}
      value={name}
      id="outlined-multiline-static"
      variant="outlined"
      label="Name"
    />
    <center>
      <button>Start Messenger</button>
    </center>
    </form>
    </center>
  );
};
export default LoginForm