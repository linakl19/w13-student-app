const Student = (props) => {
    return (
        <ul>
            {console.log(props)}
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
    );
};

export default Student;