import {Component, Inject, Input, OnInit} from '@angular/core';
import {Creature} from '../../data-model/creature';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TooltipDialogComponent} from '../../shared/tooltip-dialog/tooltip-dialog.component';

@Component({
  selector: 'app-creature-edit',
  templateUrl: './creature-edit.component.html',
  styleUrls: ['./creature-edit.component.scss']
})
export class CreatureEditComponent implements OnInit {

  creature: Creature;
  usesMagic: boolean;

  constructor(public dialogRef: MatDialogRef<CreatureEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.creature = JSON.parse(JSON.stringify(data));
    if (this.creature.magic) {
      this.usesMagic = true;
    }
  }

  ngOnInit(): void {
  }

  openPreview() {
    const previewDialog = this.dialog.open(TooltipDialogComponent, {
      data: {
        type: 'creature',
        staying: true,
        entry: this.creature,
      }
    });
  }

  changeMagic() {
    if (this.usesMagic) {
      this.creature.magic = {};
    } else {
      delete this.creature.magic;
    }
  }

  save() {
    this.dialogRef.close(this.creature);
  }

  applyId() {
    this.creature.id = this.creature.name.replace(/\s/g, '');
  }
}
