import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './Helloworld';
import HelloWorldSampleProbs from './HelloWorldSampleProbs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloWorld/>,document.getElementById('root'));
ReactDOM.render(<HelloWorldSampleProbs message="First React App"/>,document.getElementById('div1'));
registerServiceWorker();
 