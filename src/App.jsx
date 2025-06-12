import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';

const kInitialStudentData = [
  {
    id: 1,
    nameData: 'Ada',
    emailData: 'ada@dev.org',
    isPresentData: false,
  },
  {
    id: 2,
    nameData: 'Soo-ah',
    emailData: 'sooah@dev.org',
    isPresentData: false,
  },
  {
    id: 3,
    nameData: 'Chrissy',
    emailData: 'chrissy@dev.org',
    isPresentData: true,
  }
];

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);

const toggleStudentPresence = (studentId) => {
    setStudentData(students => {
      return students.map(student => {
        if (student.id === studentId) {
          return { ...student, isPresentData: !student.isPresentData };
        } else {
          return student;
        }
      });
    });
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo studentCount= {studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
