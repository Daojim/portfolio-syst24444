import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-thankyou',
  imports: [MaterialModule],
  templateUrl: './popup-thankyou.component.html',
  styleUrl: './popup-thankyou.component.css',
})
export class PopupThankyouComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupThankyouComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onOK() {
    this.dialogRef.close();
  }
}
