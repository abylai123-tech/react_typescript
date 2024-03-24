import React, {FC, useState, useEffect} from 'react';
import { ITodo } from '../types/types';
import List from './List';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
      fetchTodo()
    }, [])
  
  
    async function fetchTodo() {
        try {
          const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
          setTodos(response.data)
        } catch(e) {
          alert(e)
        }
      }

    return (
        <List 
            items={todos} 
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;