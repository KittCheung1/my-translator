import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("")


  const handleInput = event => {
    setName(event.target.value)
  }
  
  function displayUser ()
  {
    console.log(name)
  }

  // const usernames = users.map((user) => {
  //   if (name === user.username) {
  //     //load new route
  //     return name
  //   }
  //   //else return user to login page
  // })

  //   async function getUser(name) {
  //     const response = await fetch("https://trivia-game-noroff-api.herokuapp.com/trivia");
  //     const data = await response.json();
  //     const result = data.find(x => x.username === name);
  //     setUsers(result);
  //     console.log(result)
  // }

  // getUser(name)

  // const handleLoadUserData = async () => {
  //   const response = await fetch(
  //     "https://trivia-game-noroff-api.herokuapp.com/trivia"
  //   );
  //   const result = await response.json();
  //   ;
  //   setUsers(result);
  //   console.log(result)
  // };

  return (

    <div className="App" >
      <div>

        <h1> My Translator </h1>
        <form>
          <fieldset >
            <label>Username</label>
            <input type="text" value={name} placeholder="Enter name" onInput={handleInput}></input>
          </fieldset>
            <button onClick={displayUser}>Continue</button>
            <p>{name}</p>

        </form>
      </div>

    </div>




  )
}

export default Users;