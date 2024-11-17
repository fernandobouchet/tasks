type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

type Board = {
  boardId: string;
  title: string;
  description: string?;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  tasks?: Task[];
};

type Task = {
  taskId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: keyof typeof TaskStatus;
  priority: keyof typeof TaskPriority;
  dueDate: Date;
  completedAt: Date;

  boardId: string;
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
