//EVENTS
interface info {
  date: string;
  place: string;
}

interface file {
  url: string;
}

interface invited_people {
  id: number;
  name: string;
  confirmed_presence: boolean;
  avatar: string;
  username: string;
}

export interface Data {
  description?: string;
  file?: file;
  id?: number;
  invited_people: invited_people[];
  info: info;
  title?: string;
  type: string;
  handle_open_modal?: Function;
}

//FRAME
interface resume_files {
  file: string;
}

export interface Board {
  title: string;
  resume_files: resume_files[];
}
