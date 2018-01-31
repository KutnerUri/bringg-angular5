import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../user.repository';
import { User } from '../dtos/UserDto';

@Component({
	selector: 'user-map',
	templateUrl: './user-map.component.html',
	styleUrls: ['./user-map.component.css']
})
export class UserMapComponent implements OnInit {

	constructor(private userRepository: UserRepository) { }

	ngOnInit() {
		this.userRepository.loadUsers()
			.then(function () {
				this.users = this.userRepository.getUsers();
			}.bind(this));
	}
}
