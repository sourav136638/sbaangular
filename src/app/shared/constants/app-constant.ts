export const REST_API_PATHS: any = {
    ADD_USER: { rest: '{0}/api/user', isMockRequired: false },
    GET_USER_LIST: {  rest: '{0}/api/user', isMockRequired: false },
    UPDATE_USER: {  rest: '{0}/api/user', isMockRequired: false },
    DELETE_USER: {  rest: '{0}/api/user/{1}', isMockRequired: false },
    PROJECT_LIST: {  rest: '{0}/api/project', isMockRequired: false },
    PROJECT_CREATE: {  rest: '{0}/api/project', isMockRequired: false },
    UPDATE_PROJECT: {  rest: '{0}/api/project', isMockRequired: false },
    TASK_LIST: {  rest: '{0}/api/task', isMockRequired: false },
    TASK_CREATE: {  rest: '{0}/api/task', isMockRequired: false },
    TASK_UPDATE: { rest: '{0}/api/task' , isMockRequired: false},
    END_TASK: { rest:'{0}/api/task/{1}' , isMockRequired: false},
    GET_PARENT_TASK: { rest:'{0}/api/parenttask', isMockRequired: false}
}

export enum URLS {
    ADD_USER = "ADD_USER",
    GET_USER_LIST = "GET_USER_LIST",
    UPDATE_USER = "UPDATE_USER",
    DELETE_USER = "DELETE_USER",
    PROJECT_LIST = "PROJECT_LIST",
    PROJECT_CREATE = "PROJECT_CREATE",
    UPDATE_PROJECT = "UPDATE_PROJECT",
    TASK_LIST = "TASK_LIST",
    TASK_CREATE = "TASK_CREATE",
    TASK_UPDATE = "TASK_UPDATE",
    END_TASK = "END_TASK",
    GET_PARENT_TASK = "GET_PARENT_TASK"
}

export enum DIALOG_MODE {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING"
}

