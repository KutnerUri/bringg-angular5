import { Component, OnInit, Input } from '@angular/core';
import { User } from '../dtos/UserDto';

const START_SCALE = 0.01; //98% of the map
const SCALE = 0.99 * 100;
const LONGTITUDE_MIN_VAL = -180;
const LONGTITUDE_RANGE = 360;
const LATITUDE_MIN_VAL = -90;
const LATITUDE_RANGE = 180;

@Component({
	selector: 'user-map-pin',
	templateUrl: './user-map-pin.component.html',
	styleUrls: ['./user-map-pin.component.css']
})
export class UserMapPinComponent implements OnInit {
	@Input() user: User;

	left: number = 0;
	top: number = 0;

	constructor() { }
	ngOnInit() {
		this.left = this.getUserLeft(this.user);
		this.top = this.getUserTop(this.user);
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
