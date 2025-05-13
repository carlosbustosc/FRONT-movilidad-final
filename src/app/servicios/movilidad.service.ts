import { Injectable } from '@angular/core';

//importamos httpClient
import { HttpClient } from "@angular/common/http"

//importamos operador map
import { map } from "rxjs/operators";

//importar interface
import { tarifasInterface, interfaceVehiculos, registroUsuario, Login, registroVehiculo, agendarCita } from '../modelos/vehiculos.interface';
import { seccionesInterface } from '../modelos/secciones.interface';




@Injectable({
  providedIn: 'root'
})


export class MovilidadService {
  
  guardarToken:any = ""

  secciones:seccionesInterface[] = [
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
      pagina:"/tarifas"
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
    },
    {
      imagen:"assets/img/paso_paso.jpg",
      titulo: "Paso a paso",
      descripcion:"Mire la información que tenemos para usted",
      pagina:"/pasoApaso"
    },
  ]


  marcasVehiculos:interfaceVehiculos[] = [
    
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
  

  pasoApaso:any[] = [
    
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_DSC_4299_min_a44da55136.JPG",
      titulo : "Así solicitas la regrabación de chasis o serial de tu vehículo", 
      descripcion:"Si estos sistemas de identificación de tu vehículo, ya sea carro o moto, presentan deterioro, alteración, se dificulta su lectura o la plaqueta de identificación se perdió, ten en cuenta estos pasos para radicar de forma parcialmente virtual el trámite:",
      detalleFoto:"Carro con capó abierto mostrando el motor - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2024",
      texto:[
        {
          punto:"Ingresa a www.ventanillamovilidad.com.co"
        },
        {
          punto:"Da clic en el botón ’Agenda tu cita’ ubicado en el inicio de la página."
        },
        {
          punto:"Digita tu usuario y contraseña. En caso de no tenerla puedes aprender cómo registrarte en este enlace."
        },
        {
          punto:"Selecciona las opciones ‘Trámite’ > ‘Vehículos’ > ‘Regrabación de motor, VIN, serial o chasis’."
        },
        {
          punto:"Revisa que los datos estén correctos, digita el número de la placa y selecciona el tipo de regrabación."
        },
        {
          punto:"Responde ‘Si’ a que deseas realizar el trámite de forma virtual.."
        },
        {
          punto:"Es momento de cargar en archivo PDF y de forma individual los documentos requeridos, entre ellos el Formulario de Solicitud del Trámite, documento de identidad, improntas y los Certificados de la revisión técnica previa y posterior de la DIJIN."
        },
        {
          punto:"Revisa constantemente la bandeja de entrada o correo no deseado / SPAM ya que serás notificado sobre la preaprobación o devolución del trámite."
        },
        {
          punto:"Procede con el pago del valor del trámite a través de PSE, o solicita pagar en efectivo en las cajas del banco ubicadas en las sedes."
        },
        {
          punto:"Agenda una cita gratuita en la sede de la Ventanilla más cercana y con disponibilidad para que asistas a terminar el trámite."
        },
        {
          punto:"Por último, asiste a la cita con los documentos originales en físico y sigue las indicaciones del analista."
        },
        {
          punto:"Recibirás la nueva licencia de tránsito, en donde se indica que el chasis o serial es regrabado. De esta manera evitas comparendos por no tener la información legalizada ante el RUNT y en la licencia de tránsito."
        },
        {
          punto:"En caso de inquietudes, comunícate a través del correo electrónico correspondencia@ventanillamovilidad.com.co o a la Línea de atención al ciudadano (601) 291-6999."
        },
      ]
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_DSC_4403_Mejorado_NR_min_a035ced6fa.JPG",
      titulo : "En detalle, así solicitas el reembolso de un trámite desde la web",
      descripcion:"Si realizaste un trámite después del 8 de diciembre de 2023, y presentaste alguna novedad con el pago, por una consignación no utilizada o por el rechazo del trámite, puedes solicitar un reembolso en www.ventanillamovilidad.com.co.",
      detalleFoto:"Página de la Ventanilla Única de Servicios para solicitar un reembolso - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2024",
      texto:[
        {
          punto:"Escanea y ten a la mano el recibo de pago, el documento de identidad y la certificación bancaria (si aplica) en formato PDF."
        },
        {
          punto:"Ingresa a www.ventanillamovilidad.com.co"
        },
        {
          punto:"Haz clic en el botón “Agenda tu cita” ubicado en el banner principal."
        },
        {
          punto:"Selecciona “Solicitud reembolso”."
        },
        {
          punto:"Diligencia el campo “Número de recibo de pago a reembolsar” con el número completo que aparece en la esquina superior derecha del recibo, sin dejar espacios."
        },
        {
          punto:"En la casilla “Identificador” si el trámite realizado corresponde a Registro Distrital de Conductores, escribe el tipo de documento y el número de identificación, teniendo en cuenta las siguientes siglas:"
        },
        {
          punto:"Haz clic en el botón “Solicitud de registrador” para enviar."
        },
        {
          punto:"Revisa tu correo porque te llegará el mensaje de aprobación del reembolso."
        },
        {
          punto:"Si elegiste pago en efectivo, el correo te indicará cuando ir a recibirlo presencialmente en el Centro de Gestión Documental Automotor ubicado en la Calle 64g #92 – 20, el horario de atención es de lunes a viernes: 8:00 a.m. – 12:00 m. y 1:00 p.m. – 4:00 p.m."
        },
        {
          punto:"En caso de inquietudes, comunícate a través del correo electrónico correspondencia@ventanillamovilidad.com.co"
        },
        {
          punto:"¡Importante! Si realizaste el trámite antes del 8 de diciembre del 2023 solicita el reembolso en efectivo acercándote a la Calle 64g #92-20, presenta el recibo de pago original, copia del documento de identidad y en caso de ser apoderado, el contrato de mandato y copia del documento de identidad del mandatario."
        } 
      ]
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_DSC_3453_min_a843e5eac4.JPG",
      titulo : "Solicita el cambio de color de tu vehículo de forma parcialmente virtual",
      descripcion:"Si piensas cambiar el color de tu vehículo, primero debes realizar el trámite en la Ventanilla Única de Servicios para actualizar la licencia de tránsito con el nuevo color, y luego ir a tu lugar de latonería y pintura de confianza.",
      detalleFoto:"Vehículo particular - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2024",
      texto:[
        {
          punto:"Da clic en el botón agenda tu cita del banner principal de la página www.ventanillamovilidad.com.co ."
        },
        {
          punto:"Ingresa con usuario y contraseña."
        },
        {
          punto:"Haz clic en “Trámites - Vehículos” ."
        },
        {
          punto:"Elige el trámite “Cambio de características”."
        },
        {
          punto:"Selecciona “Cambio de color”."
        },
        {
          punto:"Diligencia el formulario y escribe la placa del vehículo."
        },
        {
          punto:"Elije del listado el nuevo color, si no aparece el que quieres deja en blanco el espacio."
        },
        {
          punto:"Verifica la dirección de residencia."
        },
        {
          punto:"Elige hacer el trámite de forma virtual."
        },
        {
          punto:"Adjunta los documentos solicitados en formato PDF y da clic en “Siguiente”."
        },
        {
          punto:"A tu correo electrónico llegará el número de solicitud para que hagas seguimiento al trámite."
        },
        {
          punto:"Revisa constantemente tu correo porque te llegará el mensaje, indicando la pre-aprobación o rechazo del trámite."
        },
        {
          punto:"Al elegir PSE, se te generará automáticamente el valor a pagar."
        },
        {
          punto:"Completa el formulario y da clic en “Pagar”."
        },
        {
          punto:"Paga a través de la plataforma PSE."
        },
        {
          punto:"Si el pago fue exitoso, aparecerá en tu pantalla el comprobante de pago y al correo electrónico te llegará el mensaje para que agendes tu cita."
        },
        {
          punto:"Agenda tu cita en www.ventanillamovilidad.com.co y asiste a la Ventanilla más cercana, según la disponibilidad, para continuar el trámite y recibir el documento final."
        },
        {
          punto:"Para más información, comunícate a la Línea de atención al ciudadano (601) 291-6999 o envía un correo electrónico a contactenos@ventanillamovilidad.com.co"
        }
      ]
     
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_DSC_3227_min_2740df4158.JPG",
      titulo : "Regístrate de manera correcta en la Ventanilla y accede a nuestros servicios",
      descripcion:"Ten en cuenta que tu apodo, sobrenombre o abreviaturas no son válidos cuando te registres en www.ventanillamovilidad.com.co para agendar una cita. La información registrada tiene que ser real y completa, tal como aparece en tu documento de identidad, para evitar inconvenientes y reprocesos en el momento de gestionar trámites de tránsito y transporte. Si deseas verificar que toda tu información esté correcta, puedes hacerlo desde tu celular y actualizarla si es necesario.:",
      detalleFoto:"Ciudadana ingresando a la página web de la Ventanilla desde el celular - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2024",
      texto:[
        {
          punto:"Ingresa al agendamiento a través de www.ventanillamovilidad.com.co."
        },
        {
          punto:"Inicia sesión con tu usuario y contraseña."
        },
        {
          punto:"Haz clic en el menú ubicado en la esquina superior izquierda."
        },
        {
          punto:"Selecciona la opción 'Mi perfil.' "
        },
        {
          punto:"Actualiza tu(s) nombre(s) y apellidos en los campos, tal cual como aparece en tu documento de identificación."
        },
        {
          punto:"Da clic en el botón 'Actualizar'."
        },
        {
          punto:"¡Perfecto! has actualizado tu nombre."
        },
        {
          punto:"Ahora di #YoTambiénPuedo y enseña a tus familiares y amigos cómo hacerlo."
        },
        {
          punto:"Si necesitas asesoría o más información, comunícate a la Línea de atención al ciudadano (601) 291-6999."
        }
      ]
     
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_formulario_pqrs_virtual_ventanilla_d800db237a.png",
      titulo : "Me registré con datos incorrectos y no puedo sacar cita, ¿qué debo hacer?",
      descripcion:"Si al crear tu cuenta en la página de agendamiento de la Ventanilla Única de Servicios el correo electrónico, tipo de documento o número de identificación te quedaron mal escritos, debes solicitar mediante PQRS la corrección de los datos para poder ingresar y sacar una cita.",
      detalleFoto:"Mujer navegando en la página web de PQRS de la Ventanilla Única de Servicios Foto: Felipe Rocha © Consorcio Circulemos Digital, 2023",
      texto:[
        {
          punto:"Ingresa a www.ventanillamovilidad.com.co."
        },
        {
          punto:"Da clic en la opción Más del menú principal y selecciona Contáctenos."
        },
        {
          punto:"Diligencia el formulario con los datos solicitados."
        },
        {
          punto:"En el menú ‘Tipo de solicitud’ elige Petición."
        },
        {
          punto:"Como ‘Motivo de PQRS’ elige la única opción: Registro ciudadano en el aplicativo de agendamiento."
        },
        {
          punto:"Escribe dentro de la casilla cuál es el dato que se debe corregir y su respectivo reemplazo. Da clic en enviar."
        }
      ]
     
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_Montaje_Placa_2_min_6105095dd9.jpg",
      titulo : "Lo que debes hacer para radicar la matrícula de tu vehículo en Bogotá",
      descripcion:"Este trámite consiste en trasladar la matrícula del vehículo de un organismo de tránsito a otro, en este caso, el traslado se realiza a la Secretaría Distrital de Movilidad de Bogotá.",
      detalleFoto:"Placa de carro matriculado en Bogotá - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2022",
      texto:[
        {
          punto:"Acércate al organismo de tránsito en donde actualmente tienes matriculado el vehículo."
        },
        {
          punto:"Una vez allí, solicita trasladar la matrícula de tu vehículo al organismo de tránsito de Bogotá, es decir, a la Secretaría Distrital de Movilidad (SDM)."
        },
        {
          punto:"El organismo de tránsito se encargará del proceso y del envío de la documentación a la Ventanilla Única de Servicios."
        },
        {
          punto:"Ten en cuenta que los organismos de tránsito tienen 60 días calendario para realizar el proceso."
        },
        {
          punto:"Te recomendamos hacer seguimiento a la solicitud, acercándote a un punto de atención de la Ventanilla o a través de los canales de atención."
        },
        {
          punto:"Una vez realizada la validación de la documentación, por parte de la Ventanilla Única de Servicios, un colaborador se comunicará contigo para informarte sobre la preaprobación del trámite."
        },
        {
          punto:"En ese momento también podrás elegir en cuál de las 19 sedes de atención presencial deseas continuar con el trámite."
        },
        {
          punto:"Asiste al punto definido, en la fecha y hora acordada, con tu documento de identidad original."
        },
        {
          punto:"Paga en la caja del banco, ubicada en la Ventanilla, el valor del trámite y espera el llamado del analista."
        },
        {
          punto:"Una vez seas atendido por el analista integral, terminarás el trámite y solamente deberás esperar la indicación para recibir los nuevos elementos que certifican la matrícula de tu vehículo en Bogotá."
        },
        {
          punto:"Si se trata de una motocicleta, el mismo día te será entregada la nueva licencia de tránsito."
        },
        {
          punto:" En el caso de un automóvil, remolque o semirremolque, en aproximadamente 2 días hábiles estará lista la nueva licencia de tránsito y las nuevas placas del vehículo."
        },
        {
          punto:"No necesitas agendar cita para reclamar las placas y la licencia."
        },
        {
          punto:"Para recibir las nuevas placas y licencia, debes entregar las antiguas, las cuales serán destruidas."
        },
        {
          punto:"¡Listo! Has radicado la matrícula de tu vehículo con éxito y ahora está registrado en el parque automotor de Bogotá."
        }
      ]
     
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_L3_d86a0b2146.jpg",
      titulo : "Si eres una persona transgénero, así puedes modificar los datos de tu Licencia de Conducción",
      descripcion:"En la Ventanilla todas las personas son bienvenidas y pueden realizar sus trámites con la seguridad de que serán tratadas de manera justa y sin prejuicios. Así que, si eres una persona trans y quieres modificar los datos de tu Licencia de Conducción esto es lo que debes hacer.",
      detalleFoto:"Entrega de nueva licencia de conducción por cambio de documento o datos – Foto: Felipe Rocha © Consorcio Circulemos Digital, 2023.",
      texto:[
        {
          punto:"Consulta y asegúrate de cumplir con los requisitos del trámite, adicionalmente, presenta la antigua y nueva cédula de ciudadanía y la certificación de la Registraduría Nacional Del Estado Civil."
        },
        {
          punto:"Solicita tu cita en www.ventanillamovilidad.com.co, dando clic en Agenda tu cita."
        },
        {
          punto:"Ingresa con tu usuario y contraseña, si no los tienes aprende a registrarte aquí."
        },
        {
          punto:"Sigue la ruta Actores viales – Licencia de Conducción - Expedición de Licencia de Conducción y elige sede, fecha y hora."
        },
        {
          punto:"Al llegar al punto y ser atendido por el analista indica que vas a realizar el trámite de Cambio de Licencia de Conducción por cambio de documento o datos."
        },
        {
          punto:"El analista actualizará en el sistema los datos del nuevo documento de identidad y te indicará cuanto tiempo* debes esperar para que te entreguen la nueva Licencia de Conducción."
        },
        {
          punto:"Nota: *El tiempo aproximado es de 3 a 5 días hábiles para la mayoría de los casos, sin embargo, puede variar."
        },
        {
          punto:"Y listo, podrás asistir sin cita a la Ventanilla donde realizaste el trámite y reclamar tu Licencia de Conducción con el nombre y fotografía actualizados."
        },
        {
          punto:"Si tienes dudas recuerda que los colaboradores están capacitados y son sensibles a las necesidades de la comunidad LGBTIQ+, ellos están disponibles para brindar asistencia y orientación en cada paso del proceso."
        }
      ]
    
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_bus_transporte_masivo_6dc106e212.png",
      titulo : "¿Tienes empresa con parque automotor de Bogotá?, Ahorra tiempo haciendo tus trámites de forma virtual",
      descripcion:"Si tienes una empresa con parque automotor en Bogotá de servicio individual (taxi) o masivo (Transmilenio, SITP, alimentador, etc.), y quieres radicar los trámites correspondientes a tarjetas de operación de forma virtual, esta información es para ti.",
      detalleFoto:"Bus de empresa de transporte masivo - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2023",
      texto:[
        {
          punto:"Solicita tu usuario y contraseña como ‘Empresa afiliadora’ en la Ventanilla Única de Servicios y podrás gestionar tus trámites desde internet, tener atención personalizada, acompañamiento constante y tiempos de respuesta más rápidos a tus solicitudes."
        },
        {
          punto:"Sigue estos pasos y regístrate:"
        },
        {
          punto:"Envía un correo electrónico a tramitesvirtuales@circulemosdigital.com.co en el que solicites la creación de un usuario y contraseña para gestionar tus tarjetas de operación de forma virtual."
        },
        {
          punto:"Tu solicitud será validada y a vuelta de correo se te indicará la información y el formato en el que la debes aportar."
        },
        {
          punto:"Esta es:"
        },
        {
          punto:"Nombre de la empresa"
        },
        {
          punto:"NIT Empresa"
        },
        {
          punto:"Nombre del representante o la persona a quien se le asigna el usuario"
        },
        {
          punto:"Número de identificación"
        },
        {
          punto:"Correo electrónico"
        },
        {
          punto:"Número contacto"
        },
        {
          punto:"Da respuesta por correo electrónico y queda atento (a) a las indicaciones."
        },
        {
          punto:"Al correo electrónico te llegarán el usuario y contraseña asignados para iniciar de una vez la gestión."
        },
        {
          punto:"No te preocupes si no sabes cómo iniciar, un analista se comunicará con la persona a la que se le asignó el usuario para guiar y dar acompañamiento en el primer trámite virtual que realice y garantizar el éxito del proceso."
        },
        {
          punto:"¡Y listo! A partir de este momento podrás expedir, solicitar el duplicado o renovar las tarjetas de operación de los vehículos de tu empresa."
        },
        {
          punto:"Para más información o asesoría comunícate a la Línea de atención al ciudadano (601) 291-6999 o realiza una Solicitud de información a través del formulario 'Contáctenos' del siguiente enlace www.ventanillamovilidad.com.co/contactenos."
        }
      ]
     
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_mujer_escribiendo_computador_cd1e90a883.jpg",
      titulo : "Traspaso de propiedad: un trámite que puedes realizar de manera parcialmente virtual",
      descripcion:"Este trámite es uno de los más solicitados, representando el 26,16% del total de trámites que se realizan. Por este motivo, la Ventanilla te habilitó la opción de adelantarlo fácil y rápido desde tu hogar o trabajo, solo necesitas un computador o celular y conexión a Internet.",
      detalleFoto:"Mujer escribiendo en el computador - Imagen tomada de internet",
      texto:[
        {
          punto:"Comienza a gestionar tu traspaso de manera parcialmente virtual, siguiendo estos pasos:"
        },
        {
          punto:"Antes de realizar el trámite asegúrate de conocer y cumplir con los requisitos."
        },
        {
          punto:"Digita en tu buscador www.ventanillamovilidad.com.co"
        },
        {
          punto:"Da clic en el botón Agenda tu cita, ubicado en el banner principal."
        },
        {
          punto:"Ingresa al agendamiento con tu usuario y contraseña. Si no estás registrado consulta cómo hacerlo."
        },
        {
          punto:"Selecciona Trámites - Inicia aquí."
        },
        {
          punto:"Elige la opción Vehículos."
        },
        {
          punto:"elecciona el trámite Traspaso de propiedad, dando clic en Iniciar."
        },
        {
          punto:"Elige el tipo de vehículo sobre el cual vas a realizar el trámite y presiona iniciar."
        },
        {
          punto:"Selecciona Realizar trámite virtual."
        },
        {
          punto:"Lee las condiciones y si las cumples, da clic en Continuar."
        },
        {
          punto:"Diligencia el formulario, registra la placa del vehículo y da clic en Siguiente."
        },
        {
          punto:"Adjunta en un solo archivo, formato PDF, todos los documentos requeridos para realizar el trámite."
        },
        {
          punto:"Formulario de solicitud de trámite."
        },
        {
          punto:"Contrato de compraventa e improntas."
        },
        {
          punto:"Contrato de mandato si lo radica un tercero."
        },
        {
          punto:"Acepta el tratamiento de datos personales para iniciar con la validación de tu identidad, a través del análisis biométrico facial. Es indispensable tener cámara web en tu computador."
        },
        {
          punto:"Sigue las instrucciones y da clic en Aceptar imagen."
        },
        {
          punto:"A tu correo electrónico llegará el número de solicitud, para que hagas seguimiento."
        },
        {
          punto:"Revisa constantemente tu cuenta de correo electrónico, porque te llegará el mensaje indicando la pre-aprobación o rechazo del trámite. Sigue las instrucciones."
        },
        {
          punto:"En caso de ser aprobado, paga el valor del trámite a través de PSE evitando filas o si lo prefieres puedes pagar en el módulo de pago de la Ventanilla."
        },
        {
          punto:"Nota: Ten en cuenta que, si fue rechazado, se te indicarán los motivos para que puedas ajustarlos y volver a realizar el proceso."
        },
        {
          punto:"Al elegir pago por PSE, se te generará automáticamente el valor a pagar."
        },
        {
          punto:"Completa el formulario y da clic en Pagar."
        },
        {
          punto:"aga a través de la plataforma PSE."
        },
        {
          punto:"Si el pago fue exitoso, aparecerá en tu pantalla el comprobante de pago y al correo electrónico te llegará la indicación para que agendes tu cita."
        },
        {
          punto:"Agenda tu cita en www.ventanillamovilidad.com.co y asiste a la Ventanilla más cercana, según la disponibilidad, para continuar el trámite y recibir el documento final."
        }

      ]
    
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_Toma_de_Improntas_2_e4e4467281.JPG",
      titulo : "Toma de improntas gratis en la Ventanilla Única de Servicios",
      descripcion:"La presentación de las improntas es un requisito para trámites de automotores, aquí te contamos cómo acceder a este servicio de forma gratuita:",
      detalleFoto:"Servicio gratuito de toma de improntas en la Ventanilla Única de Servicios - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2022",
      texto:[
        {
          punto:"Llega con antelación al parqueadero de la Ventanilla donde tienes agendada tu cita."
        },
        {
          punto:"Acércate al Auxiliar de improntas debidamente uniformado e identificado como colaborador de la Ventanilla Única de Servicios."
        },
        {
          punto:"Solicita su apoyo y presenta los documentos necesarios para el trámite (Formulario de Solicitud del Trámite, Contrato de compraventa, etc.)."
        },
        {
          punto:"El auxiliar de improntas hará el debido procedimiento y adherirá las improntas al respaldo de tus documentos."
        },
        {
          punto:"Ten cuenta que si las improntas son de difícil acceso deberán ser tomadas por la DIJIN."
        },
        {
          punto:" ¡Y listo! Dirígete a la Ventanilla para cumplir con tu cita."
        },
        {
          punto:"Para más información o asesoría comunícate a la Línea de atención al ciudadano (601) 291-6999 o realiza una Solicitud de información a través del formulario 'Contáctenos' del siguiente enlace www.ventanillamovilidad.com.co/contactenos."
        }
      ]
      
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_traspaso_vehiculo_vus_6d2f580e1b.JPG",
      titulo : "Pasos para realizar el Traspaso de Propiedad de un Vehículo",
      descripcion:"Sigue estos pasos para formalizar ante los organismos de tránsito que ya no eres el propietario de un carro o una moto, si no lo haces, seguirás siendo el responsable de todo lo que suceda con el vehículo en el futuro.",
      detalleFoto:"Radicación de traspaso de vehículo en punto de atención Tintal - Foto: Felipe Rocha © Consorcio Circulemos Digital, 2022",
      texto:[
        {
          punto:"Consulta y asegúrate de cumplir con los requisitos."
        },
        {
          punto:"Solicita tu cita en www.ventanillamovilidad.com.co, dando clic en Agenda tu cita."
        },
        {
          punto:"Asiste al punto de atención presencial de la Ventanilla Única de Servicios, en la fecha y hora seleccionada."
        },
        {
          punto:"Ten en cuenta que si realizas el trámite a través de un tercero o del nuevo dueño del vehículo, la persona debe presentar el contrato de mandato."
        },
        {
          punto:"Entrega los documentos y efectúa el pago en la caja de la Ventanilla."
        },
        {
          punto:"Consulta desde tu celular, computador o tablet el estado del trámite, para saber cuándo debes regresar a la Ventanilla a reclamar la Licencia de tránsito que certifica el nuevo propietario."
        },
        {
          punto:"Para este paso asistes sin cita previa."
        },
        {
          punto:"Reclama la Licencia de tránsito en el módulo “Entrega de documentos”, presentando el desprendible del radicado."
        },
        {
          punto:"La Licencia de tránsito puede ser reclamada por quien realizó el trámite o por el nuevo propietario del vehículo."
        },
        {
          punto:"¡Y listo! Has realizado con éxito el traspaso del vehículo"
        },
        {
          punto:"Consulta más información acerca de casos especiales y si necesitas asesoría o más información, comunícate a la Línea de atención al ciudadano (601) 291-6999 o envía un correo electrónico a contactenos@ventanillamovilidad.com.co."
        }
      ]
   
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_hombre_utiliza_tablet_casa_c5e4e90679.jpg",
      titulo : "Así puedes radicar una PQRS desde la página web",
      descripcion:"Como ciudadano que accede a trámites o servicios en la Ventanilla Única de Servicios tienes derecho a presentar una petición, queja, reclamo, sugerencia, felicitación o solicitar información, si lo consideras pertinente.",
      detalleFoto:"Hombre en casa usando su tablet – Imagen tomada de internet",
      texto:[
        {
          punto:"Siguiendo estos pasos puedes radicar tu PQRS:"
        },
        {
          punto:"Digita en tu buscador www.ventanillamovilidad.com.co"
        },
        {
          punto:"Da clic en la pestaña Más, ubicada en el costado derecho del menú principal."
        },
        {
          punto:"Selecciona la opción Contáctenos."
        },
        {
          punto:"Diligencia el formulario con los datos solicitados."
        },
        {
          punto:"Elige dentro del menú el tipo de solicitud (Felicitación, Petición, Petición por competencia, Queja, Reclamo, Solicitud de Información o Sugerencia)."
        },
        {
          punto:"De acuerdo con lo seleccionado, elige un Motivo de PQRS y describe brevemente la situación."
        },
        {
          punto:"Da clic en enviar y aparecerá el siguiente mensaje en pantalla."
        },
        {
          punto:"“Se ha registrado un ticket con el ID ####### para atender su PQRS. Ahora recibirá un mensaje de confirmación de recepción al correo xxxxx@xxxx.com. Más adelante, también recibirá una respuesta a su PQRS por el mismo medio.”"
        },
        {
          punto:"Y listo, ya creaste tu PQRS."
        },
        {
          punto:"Al correo electrónico registrado te llegará la respuesta en el término de 10 días hábiles si es “Solicitud de información” y 15 días hábiles si se trata de una “Petición, Queja, Reclamo o Sugerencia”."
        },
        {
          punto:"Para más información o asesoría comunícate a la Línea de atención al ciudadano (601) 291-6999 o realiza una Solicitud de información a través del formulario 'Contáctenos' del siguiente enlace www.ventanillamovilidad.com.co/contactenos."
        },
        {
          punto:"en en cuenta que solo se te indicará si ya fue enviada la respuesta por correo electrónico o cuántos días hábiles debes esperar."
        }
      ]
    
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_capacitador_cursos_pedagogicos_ventanilla_a0f81ead68.JPG",
      titulo : "Agenda a través de la Ventanilla la cita para realizar el Curso pedagógico",
      descripcion:"Recuerda que con la realización del curso pedagógico dentro de los tiempos estipulados obtienes hasta un 50% de descuento en el valor de la sanción.",
      detalleFoto:"Capacitador de cursos pedagógicos dictando la clase a los asistentes. Foto: Felipe Rocha © Consorcio Circulemos Digital, 2022",
      texto:[
        {
          punto:"Conoce el tipo de comparendo y consulta los tiempos en los que debes realizar el curso para acceder a la rebaja en el valor a pagar:"
        },
        {
          punto:"Comparendos notificados en vía: 50% de descuento, si realizas el curso y pagas dentro de los cinco (5) días hábiles siguientes a la imposición del comparendo o, el 25% de descuento, si realizas el pago y el curso entre el sexto (6) y veinte (20) día hábil siguiente a la imposición del comparendo."
        },
        {
          punto:"Comparendos electrónicos: 50% de descuento, si realizas el curso y pago entre el primero (1) y onceavo (11) día hábil siguiente a la fecha de la notificación del comparendo o, el 25% de descuento, si realizas el curso y el pago entre el día doce (12) al veintiséis (26) hábil siguiente a la fecha de notificación."
        },
        {
          punto:"Ahora es momento de agendar tu cita siguiendo estos pasos:"
        },
        {
          punto:"Ingresa desde www.ventanillamovilidad.com.co o www.movilidadbogota.com.co"
        },
        {
          punto:"Haz clic en el botón Agenda tu cita, ubicado en el banner principal."
        },
        {
          punto:"Elige la opción Actores viales."
        },
        {
          punto:"Haz clic en el trámite Cursos pedagógicos."
        },
        {
          punto:"Lee atentamente y da clic en Continuar."
        },
        {
          punto:"Diligencia el formulario. Recuerda que la información suministrada deberá ser veraz, completa, exacta, actualizada, correcta y comprobable, a fin de asegurar tu atención. Ley 1581 de 2012 Art. 4"
        },
        {
          punto:"El sistema realizará validaciones automáticas, si cumples con las condiciones se activará el botón verde Siguiente."
        },
        {
          punto:"De lo contrario revisa la columna detalle y corrige las observaciones."
        },
        {
          punto:"Elige uno de los seis puntos disponibles para realizar el curso pedagógico."
        },
        {
          punto:"Selecciona el día para asistir a la cita."
        },
        {
          punto:"Elige una hora."
        },
        {
          punto:"Verifica los datos personales y da clic en Confirmar."
        },
        {
          punto:"¡Listo! Verifica la confirmación de la cita ingresando a tu correo electrónico. Revisa la bandeja de entrada o de correo no deseado o Spam."
        },
        {
          punto:"Ten en cuenta que para realizar el Curso pedagógico debes:"
        },
        {
          punto:"Estar inscrito en el RUNT. Realiza el trámite a través de la Ventanilla Única de Servicios."
        },
        {
          punto:"Llegar 30 minutos antes de la hora agendada."
        },
        {
          punto:"Presentar el documento de identidad original."
        }
      ]
   
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_Imposicion_comparendo_bogota_7c78efdc6e.jpeg",
      titulo : "Pasos para agendar tu cita de Impugnación de comparendos",
      descripcion:"Si te impusieron un comparendo en vía pública o a través de foto detección, tienes el derecho de argumentar y sustentar los motivos por los cuales sientas inconformidad ante la sanción.",
      detalleFoto:"Policía de tránsito y transporte de Bogotá impone comparendo a conductor.",
      texto:[
        {
          punto:"Como presunto infractor o a través de un apoderado (abogado en ejercicio) podrás solicitar la impugnación del comparendo, ten presente que se debe realizar dentro de estos tiempos:"
        },
        {
          punto:"Impuestos en vía pública: 5 días hábiles siguientes, contados a partir de la imposición."
        },
        {
          punto:"Impuestos por medios electrónicos: 11 días hábiles siguientes, contados a partir de la notificación."
        },
        {
          punto:"Ingresa desde www.ventanillamovilidad.com.co o www.movilidadbogota.com.co"
        },
        {
          punto:"Haz clic en el botón Agenda tu cita ubicado en el banner principal."
        },
        {
          punto:"Da clic en Trámites - Inicia aquí."
        },
        {
          punto:"Elige la opción Actores viales."
        },
        {
          punto:"Selecciona el trámite Impugnación de comparendos y da clic en Iniciar."
        },
        {
          punto:"Lee atentamente y da clic en Continuar."
        },
        {
          punto:"Diligencia el formulario. Recuerda que la información suministrada deberá ser veraz, completa, exacta, actualizada, correcta y comprobable, a fin de asegurar tu atención. Ley 1581 de 2012 Art. 4"
        },
        {
          punto:"El sistema realizará validaciones automáticas, si cumples con las condiciones se activará el botón verde Siguiente. De lo contrario revisa la columna detalle y corrige las observaciones."
        },
        {
          punto:"Selecciona el punto de atención dispuesto por la Secretaría Distrital de Movilidad."
        },
        {
          punto:"Elige la fecha."
        },
        {
          punto:"Selecciona la hora de tu preferencia."
        },
        {
          punto:"Verifica los datos personales y da clic en Confirmar."
        },
        {
          punto:"¡Listo! Verifica la confirmación de la cita ingresando a tu correo electrónico. Revisa la bandeja de entrada o de correo no deseado / Spam."
        }
      ]
   
    },
    {
      imagen : "https://vusstaticweb.blob.core.windows.net/strapiimagenesdev/medium_actualizacion_datos_runt_ventanilla_744044cccd.JPG",
      titulo : "Modifica o actualiza tus datos en el RUNT",
      descripcion:"Si estás inscrito ante el Registro Único Nacional de Tránsito (RUNT) y cambiaste de residencia, teléfono o correo electrónico. Actualiza ya tus datos para realizar tus trámites de tránsito y transporte y accede a los cursos pedagógicos sin contratiempos.",
      detalleFoto:"Persona mayor actualizando datos en el Runt. Foto: Felipe Rocha © Consorcio Circulemos Digital, 2022",
      texto:[
        {
          punto:"Solicita tu cita en www.ventanillamovilidad.com.co, dando clic en el botón Agendar cita, ubicado en el banner principal."
        },
        {
          punto:"Asiste al punto de atención presencial de la Ventanilla Única de Servicios, en la fecha y hora seleccionadas."
        },
        {
          punto:"Presenta tu documento de identidad original y efectúa el pago en la caja de la Ventanilla. El valor del trámite en el 2024 es de $5.300."
        },
        {
          punto:"Toma un turno y espera el llamado del analista integral para actualizar tus datos personales."
        },
        {
          punto:"¡Listo! La información será cargada automáticamente al Registro Único Nacional de Tránsito, RUNT."
        },
        {
          punto:"Valida tus nuevos datos, ingresando a la página del RUNT, a través de este enlace"
        },
        {
          punto:"Para más información o asesoría comunícate a la Línea de atención al ciudadano (601) 291-6999 o realiza una Solicitud de información a través del formulario 'Contáctenos' del siguiente enlace www.ventanillamovilidad.com.co/contactenos."
        },
        {
          punto:"También puedes descargar en PDF este paso a paso."
        },
        {
          punto:"Recuerda, en la Ventanilla Única de Servicios de Movilidad de Bogotá encuentras en un solo lugar todos los servicios y trámites de Tránsito y Transporte."
        }
      ]
   
    }
  ]

  constructor( private usarHttp: HttpClient) { 

    this.leerTokenAlCargar();
    
  }
  


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

  getPasoApaso(){

    return this.pasoApaso;
  }

  
  //------------registrar usuario------------//
  registrarUsuario( formularioRegistro:registroUsuario ){
    
    //console.log(formularioRegistro.tipoDocumento)

    const datosRegistro = {

      tipoDocumento :  formularioRegistro.tipoDocumento,
      numeroCedula  :  formularioRegistro.numeroCedula,
      fecha         :  formularioRegistro.fecha,      
      nombre        :  formularioRegistro.nombre,    
      genero        :  formularioRegistro.genero,      
      correo        :  formularioRegistro.correo,    
      pass          :  formularioRegistro.pass,         
      fechaExpedicion: formularioRegistro.fechaExpedicion,
      apellido      :  formularioRegistro.apellido,       
      RH            :  formularioRegistro.RH,          
      grupoSanguineo:  formularioRegistro.grupoSanguineo,
      departamento  :  formularioRegistro.departamento, 
      ciudad        :  formularioRegistro.ciudad  
    }
      
    return this.usarHttp.post('http://localhost:3000/registarUsuario', datosRegistro)

  }
  


  actualizarUsuario( formularioActualzar:registroUsuario  ){
        
    
    
    const datosActualizar = {

      tipoDocumento :  formularioActualzar.tipoDocumento,
      numeroCedula  :  formularioActualzar.numeroCedula,
      fecha         :  formularioActualzar.fecha,      
      nombre        :  formularioActualzar.nombre,    
      genero        :  formularioActualzar.genero,      
      correo        :  formularioActualzar.correo,    
      pass          :  formularioActualzar.pass,         
      fechaExpedicion: formularioActualzar.fechaExpedicion,
      apellido      :  formularioActualzar.apellido,       
      RH            :  formularioActualzar.RH,          
      grupoSanguineo:  formularioActualzar.grupoSanguineo,
      departamento  :  formularioActualzar.departamento, 
      ciudad        :  formularioActualzar.ciudad  
    }


    console.log(datosActualizar)

    return this.usarHttp.put('http://localhost:3000/actualizarUsuario', datosActualizar );
    
    
  }

  

  //--------------LOGIN USUARIO------------//
  loginUsuario( login:Login){
    
    const datosLogin = {
      
      numDocumento: login.numDocumento,
      pass: login.pass

    }
  
  console.log(datosLogin)
    return this.usarHttp.post('http://localhost:3000/loginUsuarios', datosLogin)
            .pipe(
              map( (resp:any) => {
      
                  this.guardarTokenStorage( resp.generarToken )
                  return resp;
              })
       
          )

  }

  
  guardarTokenStorage(TokenCodigo:any) {
      
    localStorage.setItem('Token', TokenCodigo);

  }
  
  
  leerTokenAlCargar(){
    
    if( localStorage.getItem('Token') ){
        
      this.guardarToken = localStorage.getItem('Token');
      
    }else{

      this.guardarToken = ""
    }
    
  }



  validarIngreso(){

   return this.guardarToken.length > 0

  }

  cerrarSesion(){

    localStorage.removeItem('Token');

  }
 //-----------------FIN LOGIN USUARIO---------------//
  





  //-----registrar vehiculo------//
  registrarVehiculo( FormREVehiculo:registroVehiculo ){
  

    const datosREvehiculo = {

      numeroCedula    : FormREVehiculo.numeroCedula,
      nombrePersona   : FormREVehiculo.nombrePersona,
      marcaVehiculo   : FormREVehiculo.marcaVehiculo,
      modeloVechiculo : FormREVehiculo.modeloVechiculo,
      placa           : FormREVehiculo.placa,
      precio          : String(FormREVehiculo.precio) //convertirmos el precio en un string

    }

    return this.usarHttp.post('http://localhost:3000/registrarVehiculos', datosREvehiculo)

  }

  
  //-----cargar datos de perfil------//
  cargarPerfil(cedula:any){
  
    const documento = {
       
      NumCedula: cedula
    
    }
   

    return this.usarHttp.post('http://localhost:3000/unUsuario', documento);

  }


  //-------Agendar cita--------//
  AgendarCita( datosAgendamiento:agendarCita ){
  
    
      const datosAgendarCita = {

        numCedula    : datosAgendamiento.numCedula,
        nombre       : datosAgendamiento.nombre,
        email        : datosAgendamiento.email,
        fecha        : datosAgendamiento.fecha,
        departamento : datosAgendamiento.departamento,
        ciudad       : datosAgendamiento.ciudad,
        mensaje      : datosAgendamiento.mensaje

      }

      return this.usarHttp.post('http://localhost:3000/agendarCita', datosAgendarCita);
  
    }
  

  //------cargar datos de vehiculo--------//
  cargarDatosVehiculo(cedula:any){
    
    console.log(cedula);

    const documento = {
      documento:cedula
    }
    

    return this.usarHttp.post('http://localhost:3000/traerUnVehiculo', documento);


  }


  //-----consultar por placa------//
  consultarPlaca(placa:any){
    
    const placaAuto = {

      matricula : placa
    }
  
    console.log(placaAuto.matricula);
    return this.usarHttp.post('http://localhost:3000/mostrarUnVehiculo', placaAuto)
            
  }
  
}



