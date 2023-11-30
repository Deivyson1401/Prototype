class vehicle {
    modelo: string
    cor: string
    numeroRodas: number
    constructor (private modelo: string, cor: string, numeroRodas: number){
        this.modelo = modelo
        this.cor = cor
        this.numeroRodas = numeroRodas
    }

    private clone(): void {}
    
    private represent(): void {}

}


class Car1 extends vehicle {
    constructor (modelo:string, cor: string, numeroRodas:number, numeroPortas: number){
        super(modelo,cor,numeroRodas)
    }
}

class car2 extends vehicle {

}

const name = 'ola'
name = 'oi'

console.log(name);
