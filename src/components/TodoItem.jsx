import React from 'react';
import "../style.scss";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
 
	const handleCompleteClick = () => {
		dispatch(toggleComplete({ id: id, completed: !completed }));
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success text-line'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onChange={handleCompleteClick} checked={completed}></input>
					<span className='total-text'>{title}</span>
				    
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger total-text'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
