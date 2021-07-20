import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header state={props.state.header}/>
                <Navbar state={props.state.navbarPage}/>
                <div className='app-wrapper-content'>
                    <switch>
                        <Route path="/profile"
                               render={() => <Profile store={props.state}
                                   /*profilePage={props.state.profilePage}
                                                      dispatch={props.dispatch}*//>}/>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer store={props}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Redirect from='/' to='/profile'/>
                    </switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;