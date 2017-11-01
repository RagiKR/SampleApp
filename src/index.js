import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Helloworld from './Helloworld'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Helloworld/>,document.getElementById('root'));
registerServiceWorker();
