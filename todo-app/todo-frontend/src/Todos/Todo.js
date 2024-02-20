const Todo = ({ todo, doneInfo, notDoneInfo }) => (
	<div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
		<span>
			{todo.text} 
		</span>
		{todo.done ? doneInfo : notDoneInfo}
	</div>
	)

export default Todo