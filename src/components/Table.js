import Todo from './Todo';
import PropTypes from 'prop-types';

function Table({headers, data, objectName}) {
  return (
    <table className="ui selectable inverted table">
      <thead>
        <tr>
        {
          headers.map((header, index) => 
            <th key={index}>{header}</th>
          )
        }
        </tr>
      </thead>
      <tbody>
        {
          data.map(x => 
            <Todo headers={headers} data={x} />
          )
        }
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>{data.filter(x => x.isDone).length} Done {objectName}</th>
          <th>{data.length} {objectName}</th>
        </tr>
      </tfoot>
    </table>
  );
}

Table.propTypes = {
	headers: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	objectName: PropTypes.string.isRequired,
}

export default Table;
