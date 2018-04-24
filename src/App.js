import React, { Component } from 'react';

import AvatarPicker from './components/AvatarPicker';

import logo from './logo.svg';
import './App.css';

const avatars = [
  { "src": "/avatars/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "/avatars/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "/avatars/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "/avatars/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "/avatars/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "/avatars/avatar6.png", "label": "Avatar 6", "id": 6 }
];

class App extends Component {
  render() {
    return (<div className="App">
      <AvatarPicker
        avatars={avatars}
      />
    </div>);
  }
}

export default App;
