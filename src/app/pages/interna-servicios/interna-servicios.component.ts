import { Component, OnInit} from '@angular/core';

/*---conectar servicios---*/
import { MovilidadService } from '../../servicios/movilidad.service';

//-----importar FormGroup-----//
import { FormGroup, FormBuilder, Validators } from "@angular/forms"



@Component({

  selector: 'app-interna-servicios',
  templateUrl: './interna-servicios.component.html',
  styleUrls: ['./interna-servicios.component.css']

})

export class InternaServiciosComponent implements OnInit{
  
  //pantallas
  pantallaBienvenida = true;
  pantallaPerfil = false;
  pantallaCita = false;
  pantallaMiVehiculo = false;

  departamentos:any = []
  ciudades:any= [];
  

  datosDeUsuarioLogueado:any = []

  nombreBienvenida:any =""

  txtVehiculo ="Por defecto"
  vehiculosEncontrados:any[] = []

  //-----formulario-----//
  agendamientoCita:FormGroup
  formPerfil:FormGroup

  constructor( private conectarServicios:MovilidadService, private fb:FormBuilder ){
    
  
 
   //----formulario de agendamiento-----//
   this.agendamientoCita = this.fb.group({

    numCedula    : [ localStorage.getItem('cedula'), Validators.required ],
    nombre       : [ localStorage.getItem('nombre'), Validators.required ],
    email        : [ localStorage.getItem('correo'), Validators.required ],
    fecha        : ["", Validators.required ],
    departamento : ["", Validators.required ],
    ciudad       : ["", Validators.required ],
    mensaje      : ["", Validators.required ]

   })
   
   //---inicializar formulario peril----/
   this.formPerfil = this.fb.group({

   })

}


  //---------validaciones visuales---------//
  get numCedula(){

    return this.agendamientoCita.controls['numCedula'].invalid && this.agendamientoCita.controls['numCedula'].touched;
  }

  get nombre(){

    return this.agendamientoCita.controls['nombre'].invalid && this.agendamientoCita.controls['nombre'].touched;

  }

  get email(){

    return this.agendamientoCita.controls['email'].invalid && this.agendamientoCita.controls['email'].touched;
  }
  get fecha(){

    return this.agendamientoCita.controls['fecha'].invalid && this.agendamientoCita.controls['fecha'].touched;

  }

  get departamento(){

    return this.agendamientoCita.controls['departamento'].invalid && this.agendamientoCita.controls['departamento'].touched;

  }
  
  get ciudad(){

    return this.agendamientoCita.controls['ciudad'].invalid && this.agendamientoCita.controls['ciudad'].touched;

  }
  
  get mensaje(){
     
    return this.agendamientoCita.controls['mensaje'].invalid && this.agendamientoCita.controls['mensaje'].touched;
    
  }


  ngOnInit(): void {
      
    this.nombreBienvenida = localStorage.getItem('nombre');
    const cedula = localStorage.getItem('cedula');
    
    //--cargar datos del perfil---//
    this.conectarServicios.cargarPerfil(cedula)    
      .subscribe( (resp:any) => {

         // console.log(resp);
          this.datosDeUsuarioLogueado = resp;
          //---formulario cargue perfil----//
          this.formPerfil = this.fb.group({
      
            tipoDocumento: [ resp.respUsuario.tipoDocumento, Validators.required ],
            numeroCedula: [ resp.respUsuario.numeroCedula, Validators.required ],
            fecha: [ resp.respUsuario.fecha, Validators.required ],
            nombre: [ resp.respUsuario.nombre, Validators.required ],
            genero: [ resp.respUsuario.genero, Validators.required ],
            correo: [ resp.respUsuario.correo, Validators.required ],
            pass: [ resp.respUsuario.pass, Validators.required ],
            fechaExpedicion: [ resp.respUsuario.fechaExpedicion, Validators.required ],
            apellido: [ resp.respUsuario.apellido, Validators.required ],
            RH: [ resp.respUsuario.RH, Validators.required ],
            grupoSanguineo: [ resp.respUsuario.grupoSanguineo, Validators.required ],
            departamento: [ resp.respUsuario.departamento, Validators.required ],
            ciudad: [ resp.respUsuario.ciudad, Validators.required ]
      
          })
        
         this.ciudades = this.departamentos[resp.respUsuario.departamento].ciudades;
         
         //console.log(this.ciudades)
     

        }, (error => {

        console.log(error);

      }))
      

    //----cargar datos del vahiculo----//
    this.conectarServicios.cargarDatosVehiculo( cedula )
         .subscribe( (resp:any) => {
        
          this.txtVehiculo = resp.mensaje

              console.log(resp.respVehiculo)

              if( typeof resp.respVehiculo === 'object' && resp.respVehiculo !== null 
                && !Array.isArray(resp.respVehiculo) ){
             
                  const vehiculos = []
                  vehiculos.push(resp.respVehiculo)
                  
                  this.vehiculosEncontrados = vehiculos;
                  console.log(this.vehiculosEncontrados)
            
            }else{
    
              this.vehiculosEncontrados = resp.respVehiculo
            }
         
        }, (error => {

          console.log(error);
         }))



    //-----cargar departamentos para el combo---//
     this.conectarServicios.getDepartamentos()
       .subscribe( resp => {
          
        this.departamentos = resp;
       
       })
      

  }
  
  miPerfil(){
  
  //pantallas
  this.pantallaBienvenida = false;
  this.pantallaPerfil = true;
  this.pantallaCita = false;
  this.pantallaMiVehiculo = false;
  
  

  }

  agendarCita(){
  
    //pantallas
  this.pantallaBienvenida = false;
  this.pantallaPerfil = false;
  this.pantallaCita = true;
  this.pantallaMiVehiculo = false;

  }

  miVehiculo(){
  
     //pantallas
  this.pantallaBienvenida = false;
  this.pantallaPerfil = false;
  this.pantallaCita = false;
  this.pantallaMiVehiculo = true;

  }


  //perfil
  valorDepartamentoPerfil(evento:any){
  
    let valueOption = evento.target as HTMLSelectElement;
    let valorFinal  = valueOption.value; //es el value del departamento

    console.log(valorFinal);
    
     this.departamentos[valorFinal].ciudades //obtenemos las ciudades
     this.ciudades = this.departamentos[valorFinal].ciudades; //ciudades listas para el *ngFor

  }


  //Agendar cita
  valorDepartamento(evento:any){
  
    let valueOption = evento.target as HTMLSelectElement;
    let valorFinal  = valueOption.value; //es el value del departamento

    console.log(valorFinal);
    
     this.departamentos[valorFinal].ciudades //obtenemos las ciudades
     this.ciudades = this.departamentos[valorFinal].ciudades; //ciudades listas para el *ngFor

  }




  //--------Agendar Cita---------//
  agendarCitaPersona(){
   
    console.log(this.agendamientoCita)
      if( this.agendamientoCita.invalid ){

        Object.values( this.agendamientoCita.controls ).forEach( campos => {
          
          campos.markAsTouched();

        })

      }else{
        

        this.conectarServicios.AgendarCita( this.agendamientoCita.value )
            .subscribe( resp => {
              console.log( resp );

              alert("La cita se ha registrado correctamente");

             //----Resetiar campos formulario de agendamiento-----//
             this.agendamientoCita = this.fb.group({
          
              numCedula    : [ localStorage.getItem('cedula'), Validators.required ],
              nombre       : [ localStorage.getItem('nombre'), Validators.required ],
              email        : [ localStorage.getItem('correo'), Validators.required ],
              fecha        : ["", Validators.required ],
              departamento : ["", Validators.required ],
              ciudad       : ["", Validators.required ],
              mensaje      : ["", Validators.required ]
          
             })
             

            }, (error => {

            
              alert(error.error.mensaje)
            
            }))
    
      }
  }



  actualizarUsuario(){
  
    if(this.formPerfil.invalid){

      alert("el formulario debe estar lleno para actualizar la informacion");
    }else{

      console.log( this.formPerfil.value );

      this.conectarServicios.actualizarUsuario( this.formPerfil.value )
          .subscribe( resp => {
            console.log(resp);

            alert("Su perfil se ha actualizado correctamente");


          }, (error => {

            alert(error.error.mensaje)   
            console.log(error)
          }))
    }

  }

}
