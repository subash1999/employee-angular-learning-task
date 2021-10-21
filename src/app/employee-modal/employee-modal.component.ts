import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  @Input() public employee: any;
  @Input() public displayStyle:string = "none";
  @Output() modalClosed: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  closePopup(){
    this.modalClosed.emit("Modal is Closed")
  }

}
