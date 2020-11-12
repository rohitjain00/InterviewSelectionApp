import React from 'react';
import { server_url } from '../config';
import { StudentInterface, getStudents, Students } from '../student/service';
import { EditInterview } from './editInterview';

export interface InterviewInterface {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
  students: StudentInterface[];
}

const Student = () => {
  const [allStudents, setAllStudents] = React.useState<StudentInterface[]>([]);
  const [interviews, setInterviews] = React.useState<InterviewInterface[]>([]);
  React.useEffect(() => {
    populateStudents();
    fetch(server_url + '/interview/')
      .then((response) => response.json())
      .then((response: { data: InterviewInterface[] }) => {
        setInterviews(response.data);
      });
  }, []);

  const populateStudents = async () => {
    getStudents().then((response: Students) => {
      setAllStudents(response.data);
    });
  };

  return (
    <div>
      <EditInterview students={allStudents} interview={null} key={1} />

      {interviews.map((interview) => {
        return (
          <EditInterview
            students={allStudents}
            interview={interview}
            key={interview.id}
          />
        );
      })}
    </div>
  );
};

export default Student;
