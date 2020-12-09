import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import WriteAMessage from './WriteAMessage/WriteAMessage';
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

  let dialogsElements =
    props.dialogs.map(d => <DialogsItem id={d.id} name={d.name} key={d.id}/>);
  let messagesElements =
    props.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>);

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
      <WriteAMessage sendMessage={props.sendMessage} />
    </div>
  );
};

export default Dialogs;
