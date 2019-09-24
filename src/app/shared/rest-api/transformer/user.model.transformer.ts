import { UserModel } from '../../models/user.model';
import { UserApiModel } from '../model/user-api.model';

export class UserModelTransformer {

    public static createUserModelTransformer(_userModel: UserModel): UserApiModel {
        let userApiModel: UserApiModel = {
            firstname: _userModel.firstname,
            lastname: _userModel.lastname,
            employeeId: _userModel.employeeId,
            userId: "",
            taskId: "",
            projectId: ""
        }

        return userApiModel;
    }

    public static updateUserModelTransformer(_userModel: UserModel): UserApiModel {
        let userApiModel: UserApiModel = {
            firstname: _userModel.firstname,
            lastname: _userModel.lastname,
            employeeId: _userModel.employeeId,
            userId: _userModel.userId,
            taskId: "",
            projectId: ""
        }

        return userApiModel;
    }



    // public userListTransform(response: UserApiModel): UserModel {
    //     return {
    //         firstName: response.firstName,
    //         lastName: response.lastName,
    //         empId: response.lastName,
    //         userId: response.userId
    //     }
    // }
}