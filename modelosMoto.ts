import { moto, addmoto_list } from "./moto"

let listamotosClones = new moto('Honda Biz', 'branco', 2, 'motor 1')
listamotosClones.addMoto(listamotosClones)
let moto2 = new moto('Honda XRE', 'preto', 2,'motor 2')
listamotosClones.addMoto(moto2)
let moto3 = new moto('Honda NXR 160', 'Prata', 2, 'motor 3')
listamotosClones.addMoto(moto3)

listamotosClones.represent()