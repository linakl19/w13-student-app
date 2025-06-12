import './StudentList.css';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {
    const studentComponents = props.students.map((student, index) => {
        return (
            <li key={index}>
                <Student name={student.nameData} email={student.emailData}></Student>
            </li>
        );
    });

    return (
        <section>
            <h2 className='student-list__heading'>Student List</h2>
            <ul className='student-list'>
                {studentComponents}
            </ul>
        </section>
    );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
            nameData: PropTypes.string.isRequired,
            emailData: PropTypes.string.isRequired,
        })
    ),
};

export default StudentList;