import PropTypes from 'prop-types';

function Todo({headers, data}) {

  return (
    <tr className={data.isDone ? "positive" : ""} key={data.id}>
		{
			headers.map((header, index) => {
				return header === 'isDone' ? 
					<td key={index}>{data.isDone ? 'Done' : 'Not Done'}</td> 
					: <td key={index}>{data[header]}</td>
				}
			)
		}
	</tr>
  );
}

Todo.propTypes = {
	headers: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
}

export default Todo;
