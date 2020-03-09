import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './views/Login/Login'
import Main from './views/Main'
import {
    BrowserRouter as Router,
    Redirect,
    Route
} from "react-router-dom";
import './assets/css/main.css'
import {Provider} from "react-redux";
import configureStore, {history} from './store'
import {ConnectedRouter} from 'connected-react-router';

const store = configureStore()

function App(props) {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="App">
                    <Router>
                        <Route path="/" exact component={SignIn}/>
                        <Route path="/main" component={Main}/>
                        {/*<Redirect from="/" to="/"/>*/}
                    </Router>

                </div>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
