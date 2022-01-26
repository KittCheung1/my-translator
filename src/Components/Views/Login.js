import { useState } from "react";

const Users = () => {
  //const guitars = [];
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("")
  
  const handleInput = event => {
    setName(event.target.value)
  }

  async function getUser(name) {
    const response = await fetch("https://trivia-game-noroff-api.herokuapp.com/trivia");
    const data = await response.json();
    return data.find(x => x.username === name);
}

  const handleLoadUserData = async () => {
    const response = await fetch(
      "https://trivia-game-noroff-api.herokuapp.com/trivia"
    );
    const result = await response.json();
    console.log(result)
    setUsers(result);
  };

  return (
    <div className="App" >
      <h1> My Translator </h1>

      <input onChange={handleInput} placeholder="Enter name"></input>
      <button onClick={handleLoadUserData}>Login</button>
      <p>{name}</p>
    </div>
  )
}

export default Users;