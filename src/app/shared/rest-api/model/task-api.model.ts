export interface TaskApiModel {
    taskId: string,
    task: string,
    startDate: string,
    endDate: string,
    priority: string,
    status: string,
    projectId: string,
    parentId: string,
    userId: string,
    parentTask: string,
    parent: boolean
}
