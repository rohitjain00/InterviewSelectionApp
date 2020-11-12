import { server_url } from '../config';

export interface Students {
  data: StudentInterface[];
}

export interface StudentInterface {
  id: number;
  name: string;
}

export const getStudents = async (): Promise<Students> => {
  const students: Students = await fetch(
    server_url + '/student/'
  ).then((response) => response.json());
  return students;
};
