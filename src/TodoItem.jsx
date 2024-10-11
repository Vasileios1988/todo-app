
import PropTypes from 'prop-types';

function TodoItem({ todo }) {
    return <li>{todo.text}</li>;
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired
};

export default TodoItem;
