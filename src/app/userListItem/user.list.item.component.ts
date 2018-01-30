import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../dtos/UserDto';

@Component({
	selector: 'user-list-item',
	templateUrl: './user.list.item.component.html',
	styleUrls: ['./user.list.item.component.css']
})
export class  UserListItemComponent {
	@Input() user: User;
}