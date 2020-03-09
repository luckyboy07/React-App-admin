import { createStore,applyMiddleware, compose } from "redux";
import { createBrowserHistory } from 'history';
import rootReducer from "./reducers";
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    routerMiddleware(history)
]
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

export default function configureStore() {
    const store = createStore(
        rootReducer(history), // root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                ...middleware
            ),
            ...enhancers
        ),
    )

    return store
}