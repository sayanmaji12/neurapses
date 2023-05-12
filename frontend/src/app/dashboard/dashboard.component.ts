import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allEmployee = [] as any;
  selectedId = '';
  selectedPosition = 0;
  constructor(private rest: RestApiService,private common: CommonService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee(): any {
    const data = {
  };
  
    this.rest.getAllEmployee(data).subscribe((res: any) => {
       
      console.log(res);
      if (res.response.success === true) {
    
        this.allEmployee = res.response.details.result;
      }
    });
  }
  openDeleteModal(id: string, modal: any, position: number): void {
    this.selectedId = id;
    this.selectedPosition = position;
    this.modalService.open(modal, {centered: true});
  }
  
  deleteRow(): any {
    const data = {
      empId: this.selectedId
    };
    console.log(data);
    
    this.rest.deleteEmployee(data).subscribe((res: any) => {
      
      console.log(res)
      if (res.response.success) {
        this.common.openSnackBar("Deleted successfully");
          //this.succMsg="Deleted successfully";
          //this.notifier.notify('success', 'Deleted successfully');
          this.allEmployee.splice(this.selectedPosition, 1);
          this.closeModal();
          
        }else{
          this.closeModal();
          //this.notifier.notify('error', "Product cannot be deleted");
        }
    }, (err: any) => {
      //this.notifier.notify('error', err.error.message);
    });
  }
  closeModal(): void {
    this.modalService.dismissAll();
  }
}
