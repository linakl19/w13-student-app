import PropTypes from "prop-types";
import './Student.css';


const Student = (props) => {   
    
    const attendanceButtonClicked = () => {
        // Invoke the function passed in through the prop named "onPresenceToggle"
        // This function refers to the toggleStudentPresence function in App
        return props.onPresenceToggle(props.id);
    };
    
    // variable that holds the name of the (CSS) classes
    const nameColor = props.isPresent ? 'green-present' : 'red-absent';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            {/* Passing a named function */}
            <button onClick={ attendanceButtonClicked }>Toggle if {props.name} is present</button>
            {/* Passing an Anonymous function */}
            {/* <button onClick={() => {props.onPresenceToggle(props.id)}}>Toggle if {props.name} is present</button> */}
        </div>
    );
};

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    isPresent: PropTypes.bool.isRequired,
    onPresenceToggle: PropTypes.func.isRequired,
};

// Using default props, we can make PropTypes optional instead of isRequired:
Student.defaultProps = {
    email: "unknown@example.com"
};

export default Student;