import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("")

  const handleInput = event => {
    setName(event.target.value)
  }

  const usernames = users.map((user) => {
    if (name == user.username) {
      return name
    }
  })

  //   async function getUser(name) {
  //     const response = await fetch("https://trivia-game-noroff-api.herokuapp.com/trivia");
  //     const data = await response.json();
  //     return data.find(x => x.username === name);
  // }

  const handleLoadUserData = async () => {
    const response = await fetch(
      "https://trivia-game-noroff-api.herokuapp.com/trivia"
    );
    const result = await response.json();

    ;
    setUsers(result);
    console.log(result)
  };

  return (
    <div className="App" >
      <h1> My Translator </h1>

      <input onChange={handleInput} placeholder="Enter name"></input>
      <button onClick={handleLoadUserData}>Login</button>
      <p>{usernames}</p>
    </div>
  )
}

export default Users;