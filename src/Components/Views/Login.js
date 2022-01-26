import { useState } from "react";

const Users = () => {
  //const guitars = [];
  const [users, setUsers] = useState([]);


const handleLoadUserData = async () => {
    const response = await fetch(
      "https://trivia-game-noroff-api.herokuapp.com/trivia"
    );
    const result = await response.json();
    setUsers(result);
  };

  return (
    <div className="App" >
    <h1> My Translator </h1>
    <button onclick={handleLoadUserData}>Login</button>
</div>
  )
}

export default Users;