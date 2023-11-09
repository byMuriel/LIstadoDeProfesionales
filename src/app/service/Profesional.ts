//este sera un modelo que me permita comunicarme con los datos que existen en el
//formulario y los datos que existen en la api

//esto representa los datos que estan en la api
export class Profesional {
    id!: string;
    nombre!: string;
    correo!: string;
}
//El símbolo ! que ves en la declaración de propiedades en TypeScript se llama "postfix exclamation mark" o "non-null assertion operator"
//Estás diciendo que estas propiedades no serán nulas ni indefinidas