import { Component, OnInit } from '@angular/core';
import { User } from './dtos/UserDto';
import { UserRepository } from './user.repository';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private userRepository: UserRepository) { }
	ngOnInit(): void {}
}
