import { ProjectModel } from '../../models/project.model';
import { ProjectApiModel } from '../model/project-api.model';

export class ProjectModelTransformer {

    public static createProjectModelTransformer(projectModel: ProjectModel): ProjectApiModel {
        let userManagementApiModel: ProjectApiModel = {
            projectId: projectModel.projectId,
            project: projectModel.project,
            startDate: projectModel.startDate,
            endDate: projectModel.endDate,
            priority: projectModel.priority,
            managerId: projectModel.managerId,
            completed: projectModel.completed
        }

        return userManagementApiModel;
    }

    public static updateProjectModelTransformer(projectModel: ProjectModel): ProjectApiModel {
        let projectApiModel: ProjectApiModel = {
            projectId: projectModel.projectId,
            project: projectModel.project,
            startDate: projectModel.startDate,
            endDate: projectModel.endDate,
            priority: projectModel.priority,
            managerId: projectModel.managerId,
            completed: projectModel.completed
        }

        return projectApiModel;
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