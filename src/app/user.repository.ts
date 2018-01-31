import { Injectable } from '@angular/core';
import { User } from './dtos/UserDto';

@Injectable()
export class UserRepository {
	private serverFetcher: ServerFetcher = new ServerFetcher();
	constructor() { }

	fetchPromise: Promise<any>;
	users: User[] = [];
	extraUsers: User[] = [];

	loadUsers(): Promise<any> {
		if (this.fetchPromise) return this.fetchPromise;

		return this.fetchPromise = this.fetchUsersFromServer()
	}

	getUsers(): User[] {
		return this.users;
	}

	deleteUser(userIndex: number) {
		this.users.splice(userIndex, 1);
	}

	canAddNewUser() {
		return 0 < this.extraUsers.length;
	}

	addNewUser() {
		var newUser = this.extraUsers.pop();
		this.users.unshift(newUser);
	}

	private fetchUsersFromServer(): Promise<any> {
		var promise = this.serverFetcher.loadFromServer();

		promise.then(data => {
			this.users = data.slice(0, 100);
			this.extraUsers = data.slice(99);
		});

		return promise;
	}
}

const serverAddr = 'http://www.json-generator.com/api/json/get/cpPgaDyJqq?indent=2';
class ServerFetcher {
	loadFromServer(): Promise<User[]> {
		return fetch(serverAddr)
			.then(x => x.json())
			.then(x => x as User[])
	}

}