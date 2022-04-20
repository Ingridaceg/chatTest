import {ReactElement} from "react";

type ChatUser = {
  user:string,
  onSent: (message: string) => {},
}

const ChatUser = ({user, onSent}:ChatUser):ReactElement => {
  const onClickHandler = () => {
    console.log(document.getElementById("chatEntry"));

  }
  return <div>
    <span>{user}</span>
    <input type="text" id="chatEntry"> </input>
    <button onClick={onClickHandler}>Sent</button>
  </div>
}