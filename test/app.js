'use strict';

/**
 * Modul Requestment And Define
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

/**
 * Application Test
 * 
 */
it('Web Render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});