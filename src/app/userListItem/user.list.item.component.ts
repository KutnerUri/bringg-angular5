import { Component } from '@angular/core';

@Component({
	selector: 'user-list-item',
	templateUrl: './user.list.item.component.html',
	styleUrls: ['./user.list.item.component.css']
})
export class  UserListItemComponent {
	user = {
		name: "uri kutner",
		userPicture: "picture.com",
		email: "uri@email.com",
		age: 23,
		isActive: true
	}
}