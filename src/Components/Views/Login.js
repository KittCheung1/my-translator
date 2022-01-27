import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("")

  const handleInput = event => {
    setName(event.target.value)
  }

  const usernames = users.map((user) => {
    if (name === user.username) {
      //load new route
      return name
    }
    //else return user to login page
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

  // const handleTranslation =

  return (
   
    <div className="App" >
      <div>
       
        <h1> My Translator </h1>

        <input type="text" value={name} placeholder="Enter name" onInput={handleInput}></input>
        <button onClick={handleLoadUserData}>Login</button>
        <p>{usernames}</p>
    
      </div>

    </div>




  )
}

export default Users;