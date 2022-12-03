import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, IUser2Form } from 'src/app/model/generic';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
declare let bootstrap: any;

@Component({
  selector: 'app-UserNewAdmin',
  templateUrl: './UserNewAdmin.component.html',
  styleUrls: ['./UserNewAdmin.component.css']
})
export class UserNewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;
  oUser2Form: IUser2Form = null;
  oForm: FormGroup<IUser2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      post: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]]
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Form = {
      id: new FormControl(this.oForm.value.id),
      name: new FormControl(this.oForm.value.name),
      surname: new FormControl(this.oForm.value.surname),
      lastname: new FormControl(this.oForm.value.surname),
      email: new FormControl(this.oForm.value.email),
      username: new FormControl(this.oForm.value.username),
      post: new FormControl(this.oForm.value.post)
    }
    if (this.oForm.valid) {
      this.oUserService.newOne(this.oUser2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "BlogBuster";
          this.modalContent = "User " + data + " created";
          this.showModal(data);
        }
      })
    }

  }



  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/user/view', data])
    })
    this.myModal.show()
  }


}
