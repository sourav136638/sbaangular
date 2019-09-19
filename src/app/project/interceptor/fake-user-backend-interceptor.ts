// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { mergeMap, dematerialize, delay, materialize } from 'rxjs/operators';
// import { String } from 'typescript-string-operations';

// import * as _ from 'lodash';
// import { REST_API_PATHS } from 'src/app/shared/constants/app-constant';
// import { CommonUtilsService } from 'src/app/shared/util/common-utils.service';
// @Injectable()
// export class FakeDocumentTypeBackendInterceptor implements HttpInterceptor {

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // console.log("Fake backend called with request",request);

//         return of(null).pipe(mergeMap(() => {

//             //Mock get user list
//             if (REST_API_PATHS.GET_USER_LIST.isMockRequired
//                 && request.method === 'GET') {
//                 let documentTypeListResponse = CommonUtilsService.copyJSON(userList);
//                 console.log('documentTypeListRequest', request);
//                 console.log('documentTypeListResponse', documentTypeListResponse);
//                 return ok(documentTypeListResponse);
//             }


//             // Create mock user
//             if (request.url.endsWith(String.Format(REST_API_PATHS.ADD_USER.rest, ""))
//                 && REST_API_PATHS.ADD_USER.isMockRequired
//                 && request.method === 'POST') {
//                 return ok(addUser)
//             }

//             // // Update mock user
//             // if (request.url.endsWith(String.Format(REST_API_PATHS.UPDATE_DOCUMENTS_TYPE.rest,"","2"))
//             // && REST_API_PATHS.CREATE_DOCUMENTS_TYPE.isMockRequired 
//             // && request.method === 'POST'){
//             //     return ok(createDocumentTypeResponse);
//             // }

//             // //Mock user delete
//             // if (request.url.endsWith(String.Format(REST_API_PATHS.DELETE_DOCUMENT_TYPE.rest,"","2"))
//             // && REST_API_PATHS.DELETE_DOCUMENT_TYPE.isMockRequired 
//             // && request.method === 'DELETE'){
//             //     return ok("Document deleted")
//             // }

//             // pass through any requests not handled above
//             return next.handle(request);
//         }))
//             .pipe(materialize())
//             .pipe(delay(10))
//             .pipe(dematerialize());

//         // private helper functions
//         function ok(body) {
//             return of(new HttpResponse({ status: 200, body }));
//         }

//         function unauthorised() {
//             return throwError({ status: 401, error: { message: 'Unauthorised' } });
//         }

//         function error(message) {
//             return throwError({ status: 403, error: { message } });
//         }
//     }
// }
