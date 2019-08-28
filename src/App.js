import React from 'react';
import logo from './logo.svg';
import './App.css';
import Xiaojiejie from "./Xiaojiejie";

function App() {
    return (
        <div>
            Hello World!
            <li>{false ? 'react' : 'vue'}</li>
            <li>I love React</li>
            <Xiaojiejie/>
        </div>
    );
}

export default App;
