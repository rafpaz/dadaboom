import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import './styles/styles.scss';
import '../../config/axios';
import './fontAwsome';

render((
  <App />
), document.getElementById('app'));
