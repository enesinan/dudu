import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import "./style.scss";

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5 card-shadow'>
			<h1 className='d-flex justify-content-center header-text'>🔥Dudu List🔥</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
