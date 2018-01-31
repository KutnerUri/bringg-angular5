import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../dtos/UserDto';
import { UserRepository } from '../user.repository';

var a1 = 1;

@Component({
	selector: 'user-list-item',
	templateUrl: './user.list.item.component.html',
	styleUrls: ['./user.list.item.component.css']
})
export class UserListItemComponent implements OnInit {
	@Input() user: User;
	@Input() index: number;
	@Output() onDeleteMe: EventEmitter<number> = new EventEmitter<number>();

	constructor(private userRepository: UserRepository){}

	handleDelete() {
		this.userRepository.deleteUser(this.index);
	}

	ngOnInit() {
	}
}