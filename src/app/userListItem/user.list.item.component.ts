import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../dtos/UserDto';
import { UserRepository } from '../user.repository';

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

	handleUserHover(user: User) {
		user.isHighlighted = true;
	}

	handleStopUserHover(user: User) {
		user.isHighlighted = false;
	}

	ngOnInit() {}
}