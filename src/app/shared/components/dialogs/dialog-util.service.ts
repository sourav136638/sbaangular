import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';

@Injectable({
  providedIn: 'root'
})
export class DialogUtilService {

  constructor(private dialog: MatDialog) { }

  openModal(mode: string,title:string, message:string, yes:Function = null, no:Function = null) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        mode: mode,
        title: title,
        message:message
    };
    dialogConfig.minWidth = 400;

    const dialogRef = this.dialog.open(DialogTemplateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(yes){
          yes();
        }
      }else{
        if(no){
          no();
        }
      }        
    });
  }
}
