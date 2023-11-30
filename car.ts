import { vehicle } from "./vehicle"

class carro extends vehicle {
    list: addcarro_list[] = []
    numero_Portas: number
    constructor (modelo:string, cor: string, numeroRodas:number, numero_Portas: number){
        super(modelo,cor,numeroRodas)
        this.numero_Portas = numero_Portas
    }

    addCar(add:addcarro_list){
        this.list.push(add)
    }

    represent(): void {
        console.log(this.list)
    }
}

class addcarro_list {
    constructor(modelo:string, cor: string, numeroRodas:number, numero_Portas: number){}
}

export {carro, addcarro_list}
