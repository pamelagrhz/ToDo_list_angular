import { StringMapWithRename } from '@angular/core/src/render3/jit/compiler_facade_interface';

//definimos el modelo del usuario 
export interface User{
	firstName?: string,
	lastName?: string,
	secondLastName?: string,
	username?:string,
	email?:string,
	password?:string
}
export interface AuthToken{
	token: string;
	expires:string;
}