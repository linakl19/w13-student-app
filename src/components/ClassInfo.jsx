import PropTypes from 'prop-types';


const ClassInfo = ({studentCount, onClickedDeleteAll}) => {
    return (
        <section>
            <h1>Class Information</h1>
            <ul>
                <li>Name: Team Semicolons</li>
                <li>Number of members: {studentCount}</li>
            </ul>
            <button onClick={onClickedDeleteAll}>Delete All Students!</button>
        </section>
    );
};

ClassInfo.propTypes = {
    studentCount: PropTypes.number.isRequired,
    onClickedDeleteAll: PropTypes.func.isRequired,
};

export default ClassInfo;