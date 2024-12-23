export type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export type Board = {
  boardId: string;
  title: string;
  shortName: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  tasks?: Task[];
};

export type Task = {
  taskId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date | null;
  boardId: string;
};

export type TaskColumn = Omit<Task, "status" | "priority"> & {
  status: keyof typeof TaskStatus;
  priority: keyof typeof TaskPriority;
};

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

type PartialTask = {
  taskId: string;
  status: keyof typeof TaskStatus;
};

export type BoardWithPartialTasks = Omit<Board, "tasks"> & {
  tasks: PartialTask[];
};

export type KanbanColumn = {
  tasks: Task[];
  status: string;
};

export type BoardsData = ({
  tasks: {
    status: keyof typeof TaskStatus;
  }[];
} & {
  boardId: string;
  title: string;
  shortName: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
})[];
