import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListItemComponent } from './userListItem/user.list.item.component';


@NgModule({
	declarations: [
		AppComponent,
		UserListItemComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
