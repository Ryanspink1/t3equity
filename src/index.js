import './semantic/dist/semantic.min.css';
import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import store from "./js/store/index";
import App from './js/components/App';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/text_to_speech_fe/:filter?" component={App} />
    </Router>
  </Provider>, document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log(`Started`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
