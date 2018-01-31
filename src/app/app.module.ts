import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './userListItem/user.list.item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRepository } from './user.repository';
import { UserMapComponent } from './user-map/user-map.component';


@NgModule({
	declarations: [
		AppComponent,
		UserListItemComponent,
		UserListComponent,
		UserMapComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [UserRepository],
	bootstrap: [AppComponent]
})
export class AppModule { }
