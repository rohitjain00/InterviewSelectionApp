import React from 'react';
import {
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { server_url } from '../config';
import './index.css';
import { StudentInterface } from '../student/index';

export interface InterviewInterface {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  students: StudentInterface[];
}

const Student = () => {
  const [name, setName] = React.useState<string>('');
  const [interviews, setStudents] = React.useState<InterviewInterface[] | null>(
    [
      {
        id: 1,
        name: 'Test 1',
        startTime: '14-11-11T14:11',
        endTime: '15-11-11T14:11',
        students: [
          { id: 1, name: 'Student 1' },
          { id: 2, name: 'Student 2' },
        ],
      },
    ]
  );

  // React.useEffect(() => {
  //   // fetch(server_url + '/student/')
  //   //   .then((response) => response.json())
  //   //   .then((response: { data: Student[] }) => {
  //   //     setStudents(response.data);
  //   //   });

  // }, [name]);

  const onChangeName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const addNewStudent = () => {
    console.log('add new ');
  };

  return (
    <div className="parent">
      <Paper elevation={3} variant="outlined" square className="add-student">
        <TextField label="Name" onChange={onChangeName} value={name} />
        <Button variant="contained" color="primary" onClick={addNewStudent}>
          Add New Student
        </Button>
      </Paper>
      <Paper elevation={3} variant="outlined" square>
        <List dense={true}>
          {students !== null
            ? students.map((item: StudentInterface) => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.id + ' ' + item.name} />
                  </ListItem>
                );
              })
            : null}
        </List>
      </Paper>
    </div>
  );
};

export default Student;
