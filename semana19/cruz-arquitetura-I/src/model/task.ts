export type taskData = {
  title: string;
  description: string;
  deadline: string;
  authorId: string;
};

export type task = taskData & { id: string };

export type taskOutput = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  authorId: string;
  authorNickname: string;
};
