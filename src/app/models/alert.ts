export interface CustomAlert{
	title?:string;
	body:string;
	cancelButton?: boolean;//propiedad para indicar si existe el boton de cancelar 
	cancelButtonText?: string; //definir el texto que tendrà el boton cancelar
	acceptButtonText?: string;//definir el boton de aceptar 
	type?: 'success'|'error';
}