export class Cliente{
    ID_Cliente: number;
    Nombre : string;
    Apellido:string;
    Email: string;
    password1: string;
    Telefono: string;
    tipo:string;

    constructor() {
        this. ID_Cliente = 0;
        this.Nombre = 'Jorge';
        this.Apellido = 'Padilla';
        this.Email = 'jorgepad002@gmail.com';
        this.password1 = 'hola';
        this.Telefono = '123456789';
        this.tipo = 'administrador';
    }
}