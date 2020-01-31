import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import Login from './components/Login'
import * as serviceWorker from './serviceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Header from './routes/Header';
import Footer from './routes/Footer';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';
import Navbar from './components/Navbar/Navbar';


// create redux store -> reducers -> actions
// 1. Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/login" component={Login} exact={true} />
                        <Redirect from="/logout" to="/"/>
                        <AuthenticatedComponent>
                            
                            <Route path="/" component={App} exact={true} />
                            <Route path="/:id" component={NoteDetail} exact={true} />
                            <Route path="/:id/edit" component={NoteEdit} exact={true} />
                        </AuthenticatedComponent>
                    </Switch>
                    <Footer />
                </div>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
