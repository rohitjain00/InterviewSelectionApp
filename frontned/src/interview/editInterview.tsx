import { InterviewInterface } from './index';
import React from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { server_url } from '../config';
import { StudentInterface } from '../student/service';
import './editInterview.css';
import { Response } from '../types';
import { toast } from 'react-toastify';

interface Props {
  interview: InterviewInterface | null;
  students: StudentInterface[];
}
export const EditInterview = (props: Props) => {
  const [name, setName] = React.useState<string>('');
  const [startTime, setStartTime] = React.useState<string>('');
  const [endTime, setEndTime] = React.useState<string>('');
  const [students, setStudents] = React.useState<StudentInterface[]>([]);

  React.useEffect(() => {
    if (props.interview !== null) {
      setName(props.interview.name);
      setStartTime(strpSeconds(props.interview.start_time));
      setEndTime(strpSeconds(props.interview.end_time));
      setStudents(props.interview.students);
    }
  }, [props]);

  const handleNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value);
  };
  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setStartTime(event.target.value);
  };
  const handleEndTimeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEndTime(event.target.value);
  };
  const handleStudentChange = (
    event: any,
    value: StudentInterface[],
    reason: string
  ) => {
    setStudents(value);
    console.log(value);
  };

  const strpSeconds = (date: string) => {
    return date.substr(0, date.length - 3);
  };

  const scheduleNewInterview = () => {
    fetch(server_url + '/interview/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        start_time: startTime,
        end_time: endTime,
        students: students.map((student) => student.id),
      }),
    })
      .then((res) => res.json())
      .then((res: Response) => {
        toast.success(res.message);
        console.log(res.message);
      })
      .catch((res: Response) => {
        toast.error(res.message);
        console.warn(res.message);
      });
  };

  const updateInterview = () => {
    if (!props.interview) {
      return;
    }
    fetch(server_url + '/interview/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: props.interview.id,
        name: name,
        start_time: startTime,
        end_time: endTime,
        students: students.map((student) => student.id),
      }),
    })
      .then((res) => res.json())
      .then((res: Response) => {
        toast.success(res.message);
        console.log(res.message);
      })
      .catch((res: Response) => {
        toast.error(res.message);
        console.warn(res.message);
      });
  };
  return (
    <Paper elevation={3} variant="outlined" square className="interview">
      <form>
        <TextField label="Name" onChange={handleNameChange} value={name} />
        <TextField
          label="Start Time"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          value={startTime}
          onChange={handleStartTimeChange}
        />
        <TextField
          label="End Time"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          value={endTime}
          onChange={handleEndTimeChange}
        />
        <Autocomplete
          multiple
          options={props.students}
          getOptionLabel={(student) => student.name}
          onChange={handleStudentChange}
          defaultValue={props.interview ? [...props.interview.students] : []}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Students"
              placeholder="Students"
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={props.interview ? updateInterview : scheduleNewInterview}
        >
          {props.interview ? 'Update' : 'Schedule'}
        </Button>
      </form>
    </Paper>
  );
};
