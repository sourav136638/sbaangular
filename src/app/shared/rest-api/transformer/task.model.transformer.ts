import { TaskModel } from '../../models/task.model';
import { TaskApiModel } from '../model/task-api.model';


export class TaskModelTransformer {

    public static createTaskModelTransformer(taskModel: TaskModel): TaskApiModel {
        let createTaskModel: TaskApiModel = {
            taskId: "",
            task: taskModel.task,
            startDate: taskModel.startDate,
            endDate: taskModel.endDate,
            priority: taskModel.priority,
            status: "",
            projectId: taskModel.projectId,
            parentId: "",
            userId: taskModel.userId,
            parentTask: taskModel.parentTask,
            parent: taskModel.parent
        }

        return createTaskModel;
    }

    // public userListTransform(response: ProjectApiModel): ProjectModel {
    //     return {
    //         firstName: response.firstName,
    //         lastName: response.lastName,
    //         empId: response.lastName,
    //         userId: response.userId
    //     }
    // }
}