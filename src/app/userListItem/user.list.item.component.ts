import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../dtos/UserDto';

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

	handleDelete() {
		this.onDeleteMe.emit(this.index);
	}

	constructor() { }

	ngOnInit() {
	}
}