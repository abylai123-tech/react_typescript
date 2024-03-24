import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserPage from './сomponents/UserPage';
import TodosPage from './сomponents/TodosPage';
import UserItemPage from './сomponents/UserItemPage';
import TodosItemPage from './сomponents/TodosItemPage';

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path={'/users'} element={<UserPage />} />
            <Route path={'/todos'} element={<TodosPage />} /> 
            <Route path={'/users/:id'} element={<UserItemPage />} /> 
            <Route path={'/todos/:id'} element={<TodosItemPage />} /> 
          </Routes>
    </BrowserRouter>  
  );
};

export default App;