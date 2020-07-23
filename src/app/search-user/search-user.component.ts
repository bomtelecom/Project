import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  name: string;
  users: User[];

  constructor(private dataService: UserService) { }

  ngOnInit() {
    this.name='';
  }
  private searchUsers() {
    this.users = [];
    this.dataService.getUsersByName(this.name)
      .subscribe(users => this.users = users);
  }

  onSubmit() {
    this.searchUsers();
  }

}
