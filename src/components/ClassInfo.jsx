const ClassInfo = (props) => {
    return (
        <section>
            <h1>Class Information</h1>
            <ul>
                <li>Name: Team Semicolons</li>
                <li>Number of members: {props.studentCount}</li>
            </ul>
        </section>
    );
};

export default ClassInfo;