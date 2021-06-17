export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type post = {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  created_at: Date;
  author_id: string;
};

export type postDTO = {
  photo: string;
  description: string;
  type: POST_TYPES;
};
