import {Component, Input, OnInit} from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../User';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UserListComponent) { }

  ngOnInit() {
  }

  updateStatus(UserStatus: number) {
    this.userService.updateUser(this.user.id,
      { name: this.user.name, email: this.user.email, status: UserStatus })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));
  }

  deleteCustomer() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
