import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id = '' as any;
  isUpdate = false;
  name = "" as any;
  email = "" as any;
  phone = "" as any;
  address = "" as any;
  DOB = "" as any;
  gender = "" as any;
  doj = "" as any;
  martialStatus = "" as any;
  mailformat = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$";
  constructor(private activatedroute: ActivatedRoute, private rest: RestApiService, private router: Router, private common: CommonService) {
    this.activatedroute.params.subscribe(data => {
      this.id = data['id'];
    })
  }

  ngOnInit(): void {
    console.log(this.id)
    if (this.id == 0) {
      this.isUpdate = true
    } else {
      this.isUpdate = false
      this.getEmployeeDetails()
    }
  }
  getEmployeeDetails(): any {
    const data = {
      empId: this.id,

    };
    this.rest.getEmployeeDetails(data).subscribe((res: any) => {
      console.log(res);
      if (res.response.success) {
        const details = res.response.details.result[0];
        console.log(details)
        this.name = details.name
        this.email = details.email
        this.phone = details.phone
        this.address = details.address
        this.DOB = details.DOB
        this.gender = details.gender
        this.doj = details.doj
        this.martialStatus = details.martialStatus
      }
    });

  }
  updateEmployee(): any {
    if (this.name == '') {
      this.common.openSnackBar('Please enter name');
      return false;
    }  else if (this.address == '') {
      this.common.openSnackBar('Please enter address');
      return false;
    } else if (this.email == '') {
      this.common.openSnackBar('Please enter email');
      return false;
    }else if (!this.email.match(this.mailformat)) {
      this.common.openSnackBar('Please enter valid email');
        return false
    } else if (this.DOB == '') {
      this.common.openSnackBar('Please select date of birth');
      return false;
    } else if (this.gender == '') {
      this.common.openSnackBar('Please select gender');
      return false;
    } else if (this.doj == '') {
      this.common.openSnackBar('Please select date of joining');
      return false;
    } else if (this.martialStatus == '') {
      this.common.openSnackBar('Please select martial status');
      return false;
    }else if (this.phone == '') {
      this.common.openSnackBar('Please enter contact no');
      return false;
    }
    const insertData = {
      empId: this.id,
      name: this.name,
      address: this.address,
      email: this.email,
      DOB: this.DOB,
      gender: this.gender,
      doj: this.doj,
      martialStatus: this.martialStatus,
      phone: this.phone
    };
    console.log(insertData)
    this.rest.updateEmployee(insertData).subscribe((res: any) => {
      console.log(res);
      if (res.response.success === true) {
        this.common.openSnackBar('Employee updated successfully');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      } else {
        this.common.openSnackBar(res.response.message);
      }
    });
  }
  addEmployee(): any {
    if (this.name == '') {
      this.common.openSnackBar('Please enter name');
      return false;
    }  else if (this.address == '') {
      this.common.openSnackBar('Please enter address');
      return false;
    } else if (this.email == '') {
      this.common.openSnackBar('Please enter email');
      return false;
    }else if (!this.email.match(this.mailformat)) {
      this.common.openSnackBar('Please enter valid email');
        return false
    } else if (this.DOB == '') {
      this.common.openSnackBar('Please select date of birth');
      return false;
    } else if (this.gender == '') {
      this.common.openSnackBar('Please select gender');
      return false;
    } else if (this.doj == '') {
      this.common.openSnackBar('Please select date of joining');
      return false;
    } else if (this.martialStatus == '') {
      this.common.openSnackBar('Please select martial status');
      return false;
    }else if (this.phone == '') {
      this.common.openSnackBar('Please enter contact no');
      return false;
    }
    const insertData = {
      empId: this.id,
      name: this.name,
      address: this.address,
      email: this.email,
      DOB: this.DOB,
      gender: this.gender,
      doj: this.doj,
      martialStatus: this.martialStatus,
      phone: this.phone
    };
    console.log(insertData)
    this.rest.addEmployee(insertData).subscribe((res: any) => {
      console.log(res);
      if (res.response.success === true) {
        this.common.openSnackBar('Employee Added successfully');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      } else {
        this.common.openSnackBar(res.response.message);
      }
    });
  }

}
