export interface TaskApiModel {
    taskId: string,
    task: string,
    startDate: string,
    endDate: string,
    priority: number,
    status: string,
    projectId: number,
    parentId: number,
    userId: string,
    parentTask: string,
    parent: boolean
}