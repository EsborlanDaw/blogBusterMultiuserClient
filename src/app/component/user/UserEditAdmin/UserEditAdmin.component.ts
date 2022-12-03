import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUser2Form } from 'src/app/model/generic';
import { UserService } from 'src/app/service/user.service';
declare let bootstrap: any;

@Component({
  selector: 'app-UserEditAdmin',
  templateUrl: './UserEditAdmin.component.html',
  styleUrls: ['./UserEditAdmin.component.css']
})
export class UserEditAdminComponent implements OnInit {


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
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
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
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Form = {
      id: new FormControl(this.oForm.value.id),
      name: new FormControl(this.oForm.value.name),
      surname: new FormControl(this.oForm.value.surname),
      lastname: new FormControl(this.oUser.lastname),
      email: new FormControl(this.oForm.value.email),
      username: new FormControl(this.oUser.username),
      post: new FormControl(this.oForm.value.post)
    }
    if (this.oForm.valid) {
      this.oUserService.updateOne(this.oUser2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "BlogBuster";
          this.modalContent = "User " + this.id + " updated";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/user/view', this.id])
    })
    this.myModal.show()
  }

}
