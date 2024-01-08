import { useState } from "react";

export default function Player({Intialname,symbol , isActive , onChangeName}){
  
    const [isEditing,setisEditing] = useState(false); //for switching bet 'save' and 'edit'.

    const [playerName,setPlayerName] = useState(Intialname);//for saving the player name

    function handleEditClick(){
      // setisEditing(true)//just for first approach (begining) here it will just make isediting=true and then it will make 'edit' to 'save' but when we click on 'save' it will not change back to 'edit' that's why see below
      // setisEditing(isEditing ? false :true);//this we have done to switch between 'edit'and 'save'
      //or 
      // setisEditing(!isEditing);see this is also not true see in notepad
      setisEditing((editing)=>!isEditing);
     
      if(isEditing){
        onChangeName(symbol,playerName);
      }

    }

    function handleChange(event){
      // console.log(event);
      setPlayerName(event.target.value);//here target means 'input' by whom the event is being handled
    }

    let editablePlayerName=<span className="player-name">{playerName}</span>;
    // let btnCaption='Edit';//1st way

    if(isEditing){ 
      editablePlayerName= <input type="text" value={playerName}  onChange={handleChange}  required/>
      // btnCaption="Save";
    }


    return(
        <li className={isActive ? "active" : undefined}>
          <span id="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> {/*second way is ternary operator (see this one {isEditing ? 'Save' : 'Edit'} it is only for the situation that if isediting is true then make 'edit' to 'save' now if we click on save then it does not become 'edit' for this we have handleClick function which will switch the values of isediting . */} 
        </li>
    );
}