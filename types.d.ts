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
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  completedAt: DateTime;

  boardId: string;
  board: Board;
};

enum TaskStatus {
  TODO = TODO,
  IN_PROGRESS = IN_PROGRESS,
  COMPLETED = COMPLETED,
  CANCELED = CANCELED,
}

enum TaskPriority {
  LOW = LOW,
  MEDIUM = MEDIUM,
  HIGH = HIGH,
}
