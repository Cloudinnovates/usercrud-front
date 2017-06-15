import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(user){
    let confirmed = confirm("Are you sure you want to delete " + user.firstName + " " + user.lastName + "?");
    if (confirmed) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1)

      this.usersService.deleteUser(user.id)
        .subscribe(
          val => console.log(`NEXT: ${val}`),
          val => console.log(`ERROR: ${val}`)
        );
    }
  }
}
