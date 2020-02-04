import React, { Component } from 'react';
import { render } from 'react-dom';
import {Canvas} from './components';
import './style.css';

const App = () => (<Canvas />);

render(<App />, document.getElementById('root'));
