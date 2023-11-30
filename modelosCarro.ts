import { carro } from "./car";

let listaCarrosClones = new carro('Renault Kwid Zen', 'branco', 4, 4)
listaCarrosClones.addCar(listaCarrosClones)
let carro2 = new carro('Fiat Strada Volcano', 'preto', 4,4)
listaCarrosClones.addCar(carro2)
let carro3 = new carro('HYUNDAI HB20', 'Prata', 4,4)
listaCarrosClones.addCar(carro3)

listaCarrosClones.represent()
