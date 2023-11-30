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
        for (let i = 0; i < this.list.length; i++) {
            console.log(`\nExemplo de carro ${i+1}\n\nmodelo: ${this.list[i].modelo}\ncor: ${this.list[i].cor}\nNúmero de rodas: ${this.list[i].numeroRodas}\nNumero de portas: ${this.list[i].numero_Portas}`) 
        }        
    }
}

class addcarro_list {
    modelo: string
    cor: string
    numeroRodas: number
    numero_Portas: number
    constructor(modelo:string, cor: string, numeroRodas:number, numero_Portas: number){
        this.modelo = modelo
        this.cor = cor
        this.numeroRodas = numeroRodas
        this.numero_Portas = numero_Portas
    }
}

export {carro, addcarro_list}
