import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../user.repository';
import { User } from '../dtos/UserDto';

const START_SCALE = 0.01; //98% of the map
const SCALE = 97; //97% of the map
const LONGTITUDE_MIN_VAL = -180;
const LONGTITUDE_RANGE = 360;
const LATITUDE_MIN_VAL = -90;
const LATITUDE_RANGE = 180;

@Component({
	selector: 'user-map',
	templateUrl: './user-map.component.html',
	styleUrls: ['./user-map.component.css']
})
export class UserMapComponent implements OnInit {

	constructor(private userRepository: UserRepository) { }

	ngOnInit() {
		this.userRepository.loadUsers()
			.then(function () {
				this.users = this.userRepository.getUsers();
			}.bind(this));
	}

	handleUserHover(user: User) {
		user.isHighlighted = true;
	}

	handleStopUserHover(user: User) {
		user.isHighlighted = false;
	}

	getUserLeft(user: User) {
		var normalized = (user.longitude - LONGTITUDE_MIN_VAL) / LONGTITUDE_RANGE;
		return Math.floor((normalized + START_SCALE) * SCALE);
	}

	getUserTop(user: User) {
		var normalized = (user.latitude - LATITUDE_MIN_VAL) / LATITUDE_RANGE;
		return Math.floor((normalized + START_SCALE) * SCALE);
	}

}
