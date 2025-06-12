import PropTypes from "prop-types";
import './Student.css';
import { useState } from 'react';


const Student = (props) => {
    const [isPresent, setIsPresent] = useState(false);

    // updates the isPresent state
    const togglePresence = () => {
        setIsPresent(isPresent => !isPresent);
    };
    
    // variable that holds the name of the (CSS) classes
    const nameColor = isPresent ? 'green-present' : 'red-absent';
    
    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={togglePresence}>Toggle if {props.name} is present</button>
        </div>
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