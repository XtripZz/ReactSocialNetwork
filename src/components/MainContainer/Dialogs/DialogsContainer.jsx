import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
    }
}

let matDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            let action = sendMessageCreator(newMessageBody);
            dispatch(action);
        },
    }
}

export default compose(
    connect(mapStateToProps, matDispatchToProps),
    withAuthRedirect,
)(Dialogs)