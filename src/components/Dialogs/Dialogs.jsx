import React from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';

let AddNewMessageForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={s.sendBlock}>
                <div>
                    <Field name='newMessage' placeholder='Enter your message..' component='textarea' />
                </div>
                <div>
                    <button>SEND</button>
                </div>
            </div>
        </Form>
    );
}

AddNewMessageForm = reduxForm({
    form: 'AddNewMessageForm'
})(AddNewMessageForm);


const Dialogs = (props) => {
    let dialogsElements = props.dialogsElements.map(n => <DialogsItem name={n.name} id={n.id} />);
    let message = props.messages.map(m => <Messages message={m.message} />);

    let addNewMessage = (data) => {
        props.addNewMessageAC(data.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {message}
            </div>
            <AddNewMessageForm onSubmit={addNewMessage}/>
        </div>

    );
}

export default Dialogs;