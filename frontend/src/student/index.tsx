import React from 'react';
import {
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import './index.css';
import { getStudents, StudentInterface, Students } from './service';
import { server_url } from '../config';

const Student = () => {
  const [name, setName] = React.useState<string>('');
  const [students, setStudents] = React.useState<StudentInterface[]>([]);

  React.useEffect(() => {
    populateStudents();
  }, []);

  const populateStudents = async () => {
    getStudents().then((response: Students) => {
      setStudents(response.data);
    });
  };
  const onChangeName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const addNewStudent = async () => {
    if (name === '') {
      return;
    }
    await fetch(server_url + '/student/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: -1,
        name: name,
      }),
    }).then((res) => console.log(res));
    await populateStudents();
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
          {students.map((item: StudentInterface) => {
            return (
              <ListItem key={item.id}>
                <ListItemText primary={item.id + ' ' + item.name} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </div>
  );
};

export default Student;
