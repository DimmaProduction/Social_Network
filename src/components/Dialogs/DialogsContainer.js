// import React from 'react';
import Dialogs from './Dialogs';
import { addNewMessageAC } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessageAC}),
    withAuthRedirect
)(Dialogs);