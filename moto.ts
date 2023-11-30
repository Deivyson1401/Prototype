import { vehicle } from "./vehicle"

class moto extends vehicle {
    list: addmoto_list[] = []
    tipo_motor: number
    constructor (modelo:string, cor: string, numeroRodas:number, tipo_motor: number){
        super(modelo,cor,numeroRodas)
        this.tipo_motor = tipo_motor
    }

    addCar(add:addmoto_list){
        this.list.push(add)
    }
    
    represent(): void {
        console.log(this.list)
    }
}

class addmoto_list {
    constructor(modelo:string, cor: string, numeroRodas:number, tipo_motor: number){}
}

export {moto, addmoto_list}
