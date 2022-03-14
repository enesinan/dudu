import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, clearTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
    
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({
			title: value,
		}))
		setValue('')
	};
	
	const handleClearClick = () => {
		dispatch(clearTodo())
	}
	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 d-flex justify-content-center'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2 w-25 total-text'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2 total-text'>
				Submit
			</button>
			<button onClick={handleClearClick} className='btn btn-primary mb-2 ml-2 total-text'>Clear</button>
		</form>
	);
};

export default AddTodoForm;
