import React from 'react';
import ProfileInfo from './ProfileInfo';
import {connect} from "react-redux";
import {contactsAreShown, getStatus, getUserProfile, updateStatus,} from "../../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <ProfileInfo status={this.props.status}
                            updateStatus={this.props.updateStatus} profile={this.props.profile}
                            profileFriends={this.props.profileFriends} isShowed={this.props.isShowed}
                            contactsAreShown={this.props.contactsAreShown}/>
    }
}

let mapStateToProps = (state) => ({
    profileFriends: state.profilePage.profileFriends,
    profile: state.profilePage.profile,
    isShowed: state.profilePage.isShowed,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, contactsAreShown, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileInfoContainer)