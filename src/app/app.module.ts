import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './userListItem/user.list.item.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
	declarations: [
		AppComponent,
		UserListItemComponent,
		UserListComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
