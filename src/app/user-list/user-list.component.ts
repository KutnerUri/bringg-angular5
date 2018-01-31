import { Component, Input, OnInit } from '@angular/core';
import { User } from '../dtos/UserDto';
import { UserRepository } from '../user.repository';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	@Input() users: User[] = [];

	sortingOptions: SortingOption[] = [
		{
			text: "age",
			compareFunc: (a: User, b: User) => (a.age - b.age)
		},
		{
			text: "name",
			compareFunc: (a: User, b: User) => a.name < b.name ? -1 : a.name == b.name ? 0 : 1
		}
	]
	sortBy: SortingOption;
	canAddNewUser: boolean = false;

	constructor(private userRepository: UserRepository) { }
	ngOnInit() {
		this.userRepository.loadUsers()
			.then(function () {
				this.users = this.userRepository.users;
				this.canAddNewUser = this.userRepository.canAddNewUser();
			}.bind(this));

	}

	sortUsers(compareFunc) {
		this.users.sort(compareFunc);
	}

	handleSortingChange(selectedOption) {
		this.sortUsers(selectedOption.compareFunc);
	}

	handleAddNewUser() {
		this.userRepository.addNewUser();
		this.canAddNewUser = this.userRepository.canAddNewUser();
	}
}

class SortingOption {
	text: string;
	compareFunc: (a: User, b: User) => number;
};