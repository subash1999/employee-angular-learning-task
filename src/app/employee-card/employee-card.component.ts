import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  public employees:any;
  public modalDisplayStyle:string = "none";
  public employeeDetailToDispaly: any;
  public displayDeleteConfirmation: boolean = false;
  public deleteConfirmationTitle: any;
  public deleteConfirmationMessage: any;
  public employeeIdToDelete: any;

  private COLOR_NAMES: String[] = ['PURPLE',
    'PINK','GREY','WHITE','ORANGE','LIGHTBLUE','MAROON','GREEN','OLIVE'];
  // public errorMsg;
  constructor(private _employeeservice: EmployeeService) { }
  public jobColors:any;
  private _jobTitles: any;
  ngOnInit(): void {
    this._employeeservice.getEmployees()
      .subscribe((data) =>{
        this.employees = data
        this.employees = this.employees.Employees
        let jobTitles = new Set()
        this.employees.map((item: any)=>{
          jobTitles.add(item.jobTitleName)
        })
        this._jobTitles = jobTitles;
        let jobColors: any = {}
        let unique_colors = this.uniqueColorList(this._jobTitles.size)
        let i = 0;
        Array.from(jobTitles).forEach((value: any)=>{
          jobColors[value] = unique_colors[i];
          i++;

        })
        this.jobColors = jobColors;
      });

  }

  public findColor(job_name: string){
    return this.jobColors[job_name]
  }

  uniqueColorList(n: number){
    let unique_colors = new Set();
    let i = 0
    while (unique_colors.size<n){
      const random = Math.floor(Math.random() * this.COLOR_NAMES.length);
      unique_colors.add(this.COLOR_NAMES[random])
    }
    return Array.from(unique_colors);
  }

  generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  openPopup(employee: any) {
    this.employeeDetailToDispaly = employee;
    this.modalDisplayStyle = "block";
  }
  closePopup() {
    this.employeeDetailToDispaly = null;
    this.modalDisplayStyle = "none";
  }

  showDeleteConfirmation(employee: any){
    this.deleteConfirmationTitle = "Confirm Deletion";
    this.deleteConfirmationMessage = "Are you sure you want to delete employee '"+employee.preferredFullName+"' ?";
    this.displayDeleteConfirmation = true;
    this.employeeIdToDelete = employee.userId;
    console.log("here");

  }

  closeDeleteConfirmation(){
    this.displayDeleteConfirmation = false;

  }

  confirmDeleteConfirmation($event: any){
    this.displayDeleteConfirmation = false;
    const id = $event;
    this.employees = this.employees.filter((item: any)=>{
      if(item.userId == id){
        return false;
      }
      return true;
    })
    console.log(this.employees);


  }




}
