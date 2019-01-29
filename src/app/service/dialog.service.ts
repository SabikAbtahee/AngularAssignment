import { DeleteModalBoxComponent } from './../delete-modal-box/delete-modal-box.component';

import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material'
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  // openConfirmDialogForDeletePerson(){
    
  //   this.matDialog.open(DeleteModalBoxComponent,{
  //     width:'500px',
  //     disableClose:true,
  //   });
    
  // }

  openConfirmDialog(msg){
    return this.matDialog.open(DeleteModalBoxComponent,{
       width: '400px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "20%" },
       data :{
         message : msg
       }
     });
   }
}
