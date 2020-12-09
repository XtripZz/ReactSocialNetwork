import React from 'react';
import s from './WriteAMessage.module.css';
import {reduxForm, Field} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/utils";

const maxLength50 = maxLengthCreator(50)

const WriteAMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       component={Textarea} placeholder={'Message text'}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const WriteAMessageReduxForm = reduxForm({
    form: 'dialogsWriteAMessage'
})(WriteAMessageForm)

const WriteAMessage = props => {

    const addNewMessage = values => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <WriteAMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default WriteAMessage;
