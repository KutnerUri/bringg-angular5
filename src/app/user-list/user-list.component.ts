import { Component, OnInit } from '@angular/core';
import { User } from '../dtos/UserDto';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
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

	users: User[] = [
		{
			name: 'aaa',//uri kutner
			userPicture: 'picture.com',
			email: 'uri@email.com',
			age: 23,
			isActive: true
		},
		{
			name: 'b', //ner irukut
			userPicture: 'picturesss.com',
			email: 'irkut@email.com',
			age: 22,
			isActive: true
		}
	];

	constructor() {
	}

	ngOnInit() {
	}

	handleSortingChange(selectedOption) {
		this.sortUsers(selectedOption.compareFunc);
	}

	sortUsers(compareFunc) {
		this.users.sort(compareFunc);
	}
}

class SortingOption {
	text: string;
	compareFunc: (a: User, b: User) => number;
};