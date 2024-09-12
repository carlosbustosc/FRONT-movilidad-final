import { Injectable } from '@angular/core';

//importamos httpClient
import { HttpClient } from "@angular/common/http"

//importamos operador map
import { map } from "rxjs/operators"

//importar interface
import { tarifasInterface } from '../modelos/vehiculos.interface';

@Injectable({
  providedIn: 'root'
})
export class MovilidadService {
  

  secciones:any = [
    {
      imagen:"assets/img/agenda_tu_cita.jpg",
      titulo: "Agenda tu cita",
      descripcion:"¿Quieres agendar tu cita para ser atendido presencialmente en la VUS de tu preferencia? Aquí te mostramos cómo hacerlo.",
      pagina: "/login"
    },
    {
      imagen:"assets/img/tramites.jpg",
      titulo: "Tarifas",
      descripcion:"Infórmate sobre las tarifas del",
      pagina:"/tramites"
    },
    {
      imagen:"assets/img/carro.jpg",
      titulo: "Quiero ver cuanto pago de impuesto",
      descripcion:"Lunes, 9 de septiembre de 2024",
      pagina:"/impuesto"
    },
    {
      imagen:"assets/img/registro.jpg",
      titulo: "Registre su vehiculo",
      descripcion:"Registre su vehiculo en nuestra plataforma",
      pagina:"/registroVehiculo"
    }
  ]


  marcasVehiculos:any[] = [
    
       {
        "id": 1,
        "Nombre": "Abarth",
        "Slug": "abarth"
       },
       {
        "id": 2,
        "Nombre": "Alfa Romeo",
        "Slug": "alfa-romeo"
       },
       {
        "id": 3,
        "Nombre": "Aro",
        "Slug": "aro"
       },
       {
        "id": 4,
        "Nombre": "Asia",
        "Slug": "asia"
       },
       {
        "id": 5,
        "Nombre": "Asia Motors",
        "Slug": "asia-motors"
       },
       {
        "id": 6,
        "Nombre": "Aston Martin",
        "Slug": "aston-martin"
       },
       {
        "id": 7,
        "Nombre": "Audi",
        "Slug": "audi"
       },
       {
        "id": 8,
        "Nombre": "Austin",
        "Slug": "austin"
       },
       {
        "id": 9,
        "Nombre": "Auverland",
        "Slug": "auverland"
       },
       {
        "id": 10,
        "Nombre": "Bentley",
        "Slug": "bentley"
       },
       {
        "id": 11,
        "Nombre": "Bertone",
        "Slug": "bertone"
       },
       {
        "id": 12,
        "Nombre": "Bmw",
        "Slug": "bmw"
       },
       {
        "id": 13,
        "Nombre": "Cadillac",
        "Slug": "cadillac"
       },
       {
        "id": 14,
        "Nombre": "Chevrolet",
        "Slug": "chevrolet"
       },
       {
        "id": 15,
        "Nombre": "Chrysler",
        "Slug": "chrysler"
       },
       {
        "id": 16,
        "Nombre": "Citroen",
        "Slug": "citroen"
       },
       {
        "id": 17,
        "Nombre": "Corvette",
        "Slug": "corvette"
       },
       {
        "id": 18,
        "Nombre": "Dacia",
        "Slug": "dacia"
       },
       {
        "id": 19,
        "Nombre": "Daewoo",
        "Slug": "daewoo"
       },
       {
        "id": 20,
        "Nombre": "Daf",
        "Slug": "daf"
       },
       {
        "id": 21,
        "Nombre": "Daihatsu",
        "Slug": "daihatsu"
       },
       {
        "id": 22,
        "Nombre": "Daimler",
        "Slug": "daimler"
       },
       {
        "id": 23,
        "Nombre": "Dodge",
        "Slug": "dodge"
       },
       {
        "id": 24,
        "Nombre": "Ferrari",
        "Slug": "ferrari"
       },
       {
        "id": 25,
        "Nombre": "Fiat",
        "Slug": "fiat"
       },
       {
        "id": 26,
        "Nombre": "Ford",
        "Slug": "ford"
       },
       {
        "id": 27,
        "Nombre": "Galloper",
        "Slug": "galloper"
       },
       {
        "id": 28,
        "Nombre": "Gmc",
        "Slug": "gmc"
       },
       {
        "id": 29,
        "Nombre": "Honda",
        "Slug": "honda"
       },
       {
        "id": 30,
        "Nombre": "Hummer",
        "Slug": "hummer"
       },
       {
        "id": 31,
        "Nombre": "Hyundai",
        "Slug": "hyundai"
       },
       {
        "id": 32,
        "Nombre": "Infiniti",
        "Slug": "infiniti"
       },
       {
        "id": 33,
        "Nombre": "Innocenti",
        "Slug": "innocenti"
       },
       {
        "id": 34,
        "Nombre": "Isuzu",
        "Slug": "isuzu"
       },
       {
        "id": 35,
        "Nombre": "Iveco",
        "Slug": "iveco"
       },
       {
        "id": 36,
        "Nombre": "Iveco-pegaso",
        "Slug": "iveco-pegaso"
       },
       {
        "id": 37,
        "Nombre": "Jaguar",
        "Slug": "jaguar"
       },
       {
        "id": 38,
        "Nombre": "Jeep",
        "Slug": "jeep"
       },
       {
        "id": 39,
        "Nombre": "Kia",
        "Slug": "kia"
       },
       {
        "id": 40,
        "Nombre": "Lada",
        "Slug": "lada"
       },
       {
        "id": 41,
        "Nombre": "Lamborghini",
        "Slug": "lamborghini"
       },
       {
        "id": 42,
        "Nombre": "Lancia",
        "Slug": "lancia"
       },
       {
        "id": 43,
        "Nombre": "Land-rover",
        "Slug": "land-rover"
       },
       {
        "id": 44,
        "Nombre": "Ldv",
        "Slug": "ldv"
       },
       {
        "id": 45,
        "Nombre": "Lexus",
        "Slug": "lexus"
       },
       {
        "id": 46,
        "Nombre": "Lotus",
        "Slug": "lotus"
       },
       {
        "id": 47,
        "Nombre": "Mahindra",
        "Slug": "mahindra"
       },
       {
        "id": 48,
        "Nombre": "Maserati",
        "Slug": "maserati"
       },
       {
        "id": 49,
        "Nombre": "Maybach",
        "Slug": "maybach"
       },
       {
        "id": 50,
        "Nombre": "Mazda",
        "Slug": "mazda"
       },
       {
        "id": 51,
        "Nombre": "Mercedes-benz",
        "Slug": "mercedes-benz"
       },
       {
        "id": 52,
        "Nombre": "Mg",
        "Slug": "mg"
       },
       {
        "id": 53,
        "Nombre": "Mini",
        "Slug": "mini"
       },
       {
        "id": 54,
        "Nombre": "Mitsubishi",
        "Slug": "mitsubishi"
       },
       {
        "id": 55,
        "Nombre": "Morgan",
        "Slug": "morgan"
       },
       {
        "id": 56,
        "Nombre": "Nissan",
        "Slug": "nissan"
       },
       {
        "id": 57,
        "Nombre": "Opel",
        "Slug": "opel"
       },
       {
        "id": 58,
        "Nombre": "Peugeot",
        "Slug": "peugeot"
       },
       {
        "id": 59,
        "Nombre": "Pontiac",
        "Slug": "pontiac"
       },
       {
        "id": 60,
        "Nombre": "Porsche",
        "Slug": "porsche"
       },
       {
        "id": 61,
        "Nombre": "Renault",
        "Slug": "renault"
       },
       {
        "id": 62,
        "Nombre": "Rolls-royce",
        "Slug": "rolls-royce"
       },
       {
        "id": 63,
        "Nombre": "Rover",
        "Slug": "rover"
       },
       {
        "id": 64,
        "Nombre": "Saab",
        "Slug": "saab"
       },
       {
        "id": 65,
        "Nombre": "Santana",
        "Slug": "santana"
       },
       {
        "id": 66,
        "Nombre": "Seat",
        "Slug": "seat"
       },
       {
        "id": 67,
        "Nombre": "Skoda",
        "Slug": "skoda"
       },
       {
        "id": 68,
        "Nombre": "Smart",
        "Slug": "smart"
       },
       {
        "id": 69,
        "Nombre": "Ssangyong",
        "Slug": "ssangyong"
       },
       {
        "id": 70,
        "Nombre": "Subaru",
        "Slug": "subaru"
       },
       {
        "id": 71,
        "Nombre": "Suzuki",
        "Slug": "suzuki"
       },
       {
        "id": 72,
        "Nombre": "Talbot",
        "Slug": "talbot"
       },
       {
        "id": 73,
        "Nombre": "Tata",
        "Slug": "tata"
       },
       {
        "id": 74,
        "Nombre": "Toyota",
        "Slug": "toyota"
       },
       {
        "id": 75,
        "Nombre": "Umm",
        "Slug": "umm"
       },
       {
        "id": 76,
        "Nombre": "Vaz",
        "Slug": "vaz"
       },
       {
        "id": 77,
        "Nombre": "Volkswagen",
        "Slug": "volkswagen"
       },
       {
        "id": 78,
        "Nombre": "Volvo",
        "Slug": "volvo"
       },
       {
        "id": 79,
        "Nombre": "Wartburg",
        "Slug": "wartburg"
       }
  ]
  
  
  tarifas:tarifasInterface[] = [
    {
      "tramite":"Licencia de conducción",
      "concepto": "Automóvil",
      "distrito":"$ 211.700",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 7.800",
      "total":""
    },
    {
      "tramite":"Cambio de licencia de conducción por mayoría de edad",
      "concepto": "Automóvil",
      "distrito":"$ 169.300	",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 7.800",
      "total":"$ 209.650"
    },
    {
      "tramite":"Cambio de licencia de conducción por mayoría de edad",
      "concepto": "Motocicleta",
      "distrito":"$ 126.900	",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 7.800",
      "total":"$ 167.250"
    },
    {
      "tramite":"Recategorización de la licencia de conducción",
      "concepto": "Automóvil",
      "distrito":"$ 169.300	",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 7.800",
      "total":"$ 203.950"
    },
    {
      "tramite":"Recategorización de la licencia de conducción",
      "concepto": "Motocicleta",
      "distrito":"$ 126.900",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 2.100",
      "total":"$ 161.550"
    },
    {
      "tramite":"Duplicado de la licencia de conducción",
      "concepto": "Automóvil",
      "distrito":"$ 169.300",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 2.100",
      "total":"$ 203.950"
    },
    {
      "tramite":"Duplicado de la licencia de conducción",
      "concepto": "Motocicleta",
      "distrito":"$ 126.900	",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 2.100",
      "total":"$ 161.550"
    },
    {
      "tramite":"Renovación de la licencia de conducción",
      "concepto": "Automóvil",
      "distrito":"$ 84.000",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 2.100",
      "total":"$ 118.650"
    },
    {
      "tramite":"Renovación de la licencia de conducción",
      "concepto": "Motocicleta",
      "distrito":"$ 169.300",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 2.100",
      "total":"$ 203.950"
    },
    {
      "tramite":"Traspaso de propiedad",
      "concepto": "Carro + (1% sobre avalúo como retefuente comercial):",
      "distrito":"$ 162.500",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 2.100",
      "total":"$ 199.950"
    },
    {
      "tramite":"Traspaso de propiedad",
      "concepto": "Moto + Retefuente (1% sobre avalúo como retefuente comercial):",
      "distrito":"$ 77.200",
      "MinTarnsporte": "$ 32.550",
      "runt":"$ 4.900",
      "total":"$ 114.650"
    }
    
  ]
  

  constructor( private usarHttp: HttpClient) { }
  


  getDepartamentos(){

    return this.usarHttp.get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
     
    
  }

  getMarcasVehiculos(){

    return this.marcasVehiculos 

  }

  getSeccioneHome(){

    return this.secciones;

  }

  getTarifas(){

    return this.tarifas;
  }

}



