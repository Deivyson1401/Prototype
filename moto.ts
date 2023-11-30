import { vehicle } from "./vehicle"

class moto extends vehicle {
    list: addmoto_list[] = []
    tipo_motor: string
    constructor (modelo:string, cor: string, numeroRodas:number, tipo_motor: string){
        super(modelo,cor,numeroRodas)
        this.tipo_motor = tipo_motor
    }

    addMoto(add:addmoto_list){
        this.list.push(add)
    }

    represent(): void {
        for (let i = 0; i < this.list.length; i++) {
            console.log(`\nExemplo de moto ${i+1}\n\nmodelo: ${this.list[i].modelo}\ncor: ${this.list[i].cor}\nNúmero de rodas: ${this.list[i].numeroRodas}\nTipo do motor: ${this.list[i].numero_Portas}`) 
        }        
    }
}

class addmoto_list {
    modelo: string
    cor: string
    numeroRodas: number
    tipo_motor: string
    constructor(modelo:string, cor: string, numeroRodas:number, tipo_motor: string){
        this.modelo = modelo
        this.cor = cor
        this.nu
    }
}

export {moto, addmoto_list}
