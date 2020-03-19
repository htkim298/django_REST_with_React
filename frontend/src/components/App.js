// App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
// require("./App.css");

class App extends Component {
	render() {
    	return (
        <div className='gray-background'>
          연습입니다
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
