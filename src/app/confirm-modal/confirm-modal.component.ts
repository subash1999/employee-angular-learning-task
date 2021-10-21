import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Output() closeEvent: EventEmitter<String> = new EventEmitter<String>();
  @Output() confirmEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() public display:boolean = false;
  @Input() public title = false;
  @Input() public message = false;
  @Input() public id:any;
  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.display = false;
    this.confirmEvent.emit(this.id);
  }

  close(){
    this.display = false;
    this.closeEvent.emit("Modal is Closed");
  }

}
