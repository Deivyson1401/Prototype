
import { prototype } from "./interface"


abstract class vehicle implements prototype {
    // modelo: string
    // cor: string
    // numeroRodas: number
    constructor (private modelo: string,private cor: string,private numeroRodas: number){
        this.modelo = modelo
        this.cor = cor
        this.numeroRodas = numeroRodas
    }

    clone(): this {
        const newObj = Object.create(this)
        return newObj
    }

    represent(): void {}
}

export {vehicle}
