import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // When we call use state - we set initial value - we get back an array with exactly 2 values -
  // we use array destructuring to store those two values in separate constants
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // If you are updating your state based on the previous version of your state you should pass in a function
    // When you are changing the state setIsEditing(!isEditing) -> state update is scheduled - not instantly updated.
    setIsEditing(editing => !editing);
  }

  // React gives us even tobject automatically
  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  // You can store JSX code in a variable
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // To change a text in the button - just create a variable and check for its boolean value
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
      {/* isEditing ? "Save" : "Edit"  --> could also use ternary operator*/}
    </li>
  );
}

// Showing input filed cold also be checked with ternary operator
// {!isEditing ? (
//     <span className="player-name">{name}</span>
//   ) : (
//     <input type="text" />
//   )}
