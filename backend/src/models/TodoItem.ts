export interface TodoItem {
  userId: string
  todoId: string
  createdAt: string
  dueDate: string
  done: boolean
  attachmentUrl?: string
}
