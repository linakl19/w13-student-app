import PropTypes from "prop-types";

const Student = (props) => {
    return (
        <ul>
            {console.log(props)}
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string
};

// Using default props, we can make PropTypes optional instead of isRequired:
Student.defaultProps = {
    email: "unknown@example.com"
};

export default Student;