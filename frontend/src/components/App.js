// App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
    	return (
        <div>
          <button>버튼</button>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
