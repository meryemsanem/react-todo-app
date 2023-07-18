import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

import TodoApp from '@/components/TodoApp';
import './styles/app.css';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <>
    <TodoApp />
  </>
);
