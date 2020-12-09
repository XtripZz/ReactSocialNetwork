import React from 'react';
import Navbar from './Navbar/Navbar';
// import Friends from './Friends/Friends';
// import Profile from './Profile/Profile';
// import DialogsContainer from './Dialogs/DialogsContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import s from './MainContainer.module.css';
import {Route, withRouter} from "react-router-dom";
// import LoginPage from "./Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "./Friends/SearchUsers/Users/Preloader/Preloader";
import {withSuspense} from "../../hoc/withSuspense";
const Friends = React.lazy(() => import('./Friends/Friends'))
const Profile = React.lazy(() => import('./Profile/Profile'))
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'))
const LoginPage = React.lazy(() => import('./Login/Login'))

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />

        }

        return (
            <div className={s.mainContainer}>
                <Navbar/>
                <div className={s.mainContainerContent}>

                    <Route path='/profile/:userId?'
                           render={withSuspense(Profile)}/>

                    <Route path='/friends'
                           render={withSuspense(Friends)}/>

                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route
                        path='/news'
                        render={() => <News/>}/>

                    <Route
                        path='/music'
                        render={() => <Music/>}/>

                    <Route
                        path='/settings'
                        render={() => <Settings/>}/>

                    <Route
                        path='/login'
                        render={withSuspense(LoginPage)}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(MainContainer);
