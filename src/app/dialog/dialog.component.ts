import { Component, Inject, Output, Input, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  template: '',
  styleUrls: ['dialog.component.scss']
})
export class DialogComponent {
  @Output() dialogClose = new EventEmitter();

  @Input() set openDialog(open: boolean) {
    if (open) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-modalbox';
      this.dialogRef = this.dialog.open(DialogTemplateComponent, dialogConfig);

      this.dialogRef.afterClosed().subscribe(response => {
        this.dialogClose.emit(response)
      });
    }
  }

  dialogRef;
  constructor(public dialog: MatDialog) { }
}


@Component({
  selector: 'app-dialog-template',
  templateUrl: 'app-dialog-template.html',
  styleUrls: ['app-dialog-template.scss']
})
export class DialogTemplateComponent {

  data: any;
  public createTaskForm: FormGroup;
  public labelOptions = [
    { label: 'CP', pallet: 'blue' },
    { label: 'Fault', pallet: 'red' }
  ];
  public statusOptions = [
    { status: 'toDo', name: 'To Do' },
    { status: 'development', name: 'Development' },
    { status: 'testing', name: 'Testing' },
    { status: 'done', name: 'Done' }
  ];
  public newTask = {
    name: '',
    comments: [],
    checklistItems: [],
    votes: [],
    labels: [],
    status: ''
  };
  constructor(public dialogRef: MatDialogRef<DialogTemplateComponent>
    , @Inject(MAT_DIALOG_DATA) data, private formBuilder: FormBuilder) {
    this.data = data;
    this.createTaskForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      labels: ['', [Validators.required]]
    })
  }

  onStatusSelection(status) {
    this.newTask.status = status;
    this.createTaskForm.get('status').setValue(status);
  }

  onLabelSelection(label) {
    this.newTask.labels = [label];
    this.createTaskForm.get('labels').setValue(label.label);
  }

  onSubmit() {
    if (this.createTaskForm.valid) {
      this.newTask.name = this.createTaskForm.value.name;
      this.dialogRef.close(this.newTask);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
