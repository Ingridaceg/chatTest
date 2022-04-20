import {ReactElement} from "react";

type ChatViewProps = {
  chatContent : string,
}


const ChatView = ({chatContent}:ChatViewProps):ReactElement => {
  return (
    <div>
      <p>{chatContent}</p>
    </div>
  );
}

export default ChatView;