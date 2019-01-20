import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-delete-modal-box',
  templateUrl: './delete-modal-box.component.html',
  styleUrls: ['./delete-modal-box.component.scss']
})
export class DeleteModalBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DeleteModalBoxComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close(false);
  }

}
