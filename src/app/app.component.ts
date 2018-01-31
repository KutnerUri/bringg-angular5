import { Component } from '@angular/core';
import { User } from './dtos/UserDto';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	users: User[] = [
		{
			name: 'uri kutner',
			userPicture: 'picture.com',
			email: 'uri@email.com',
			age: 23,
			isActive: true
		},
		{
			name: 'ner irukut',
			userPicture: 'picturesss.com',
			email: 'irkut@email.com',
			age: 22,
			isActive: true
		}
	];
}
