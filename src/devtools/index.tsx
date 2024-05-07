import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { DevTools } from './DevTools';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(<DevTools />);

chrome.devtools.panels.create('ReactCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create');
});
