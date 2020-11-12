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

export interface StudentInterface {
  id: number;
  name: string;
}

const Student = () => {
  const [name, setName] = React.useState<string>('');
  const [students, setStudents] = React.useState<StudentInterface[] | null>([
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
  ]);

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
