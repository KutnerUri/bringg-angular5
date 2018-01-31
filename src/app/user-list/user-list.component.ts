import { Component, Input, OnInit } from '@angular/core';
import { User } from '../dtos/UserDto';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	@Input() users: User[];
	constructor() { }
	ngOnInit() { }

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


	sortUsers(compareFunc) {
		this.users.sort(compareFunc);
	}

	handleSortingChange(selectedOption) {
		this.sortUsers(selectedOption.compareFunc);
	}

	handleUserDeletion(userIndex) {
		this.users.splice(userIndex, 1);
	}
}

class SortingOption {
	text: string;
	compareFunc: (a: User, b: User) => number;
};