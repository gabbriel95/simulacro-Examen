function probarEjercicio(){
	
	var respuesta;
	var especie;
	var pelaje;
	var edad;
	var raza;
	var peso;
	var estadoClinico;
	var temperaturaCorporal;

	var pesoPerroMasPesado=0;

	var contadorEnfermos=0;
	var contadorMascotas=0;
	var porcenajeMascotasEnfermas;

	var animalSinpelo;
	var menorTemperaturaCorporal=0;
	var bandera=0;

	var acumuladorCorporalGato=0;
	var acumuladorCorporalPerro=0;
	var acumuladorCorporalOtro=0;
	var contadorPerro=0;
	var contadorGato=0;
	var contadorOtro=0;
	var promedioCorporalPerro;
	var promedioCorporalGato;
	var promedioCorporalOtro;
	var mascotaMayorPromedioCorporal;

	var porcentajeGatosPerros;

	var contadorInternado;
	var contadorAdopcion;
	var estadoClinicoMenorMascotas;

	var acumuladorPeso=0;
	var promedioPeso;

	var nombreDelGato;
	//Hacer ejercicio i;C


	do{

		do{
			especie=prompt("Ingrese la especie de mascota (gato-perro-otro)");
			if(especie!="gato" || especie!="perro" ||especie!="otro"){
				contadorMascotas++;
			}
		}while(especie!="gato" && especie!="perro" && especie!="otro")
	
		do{
			pelaje=prompt("Ingrese el tipo de pelaje (corto-largo-sin pelo)");
		}while(pelaje!="corto" && pelaje!="largo" && pelaje!="sin pelo")

		do{
			edad=parseInt(prompt("Ingrese la edad de la mascota (solo numeros)"));
		}while((isNaN(edad)))

		do{
			raza=prompt("Ingrese la raza de su mascota (una palabra)")
		}while(!(isNaN(raza))) 

		do{
			peso=parseInt(prompt("Ingrese el peso(kg) de la mascota"));
			acumuladorPeso=acumuladorPeso+peso;
			promedioPeso=acumuladorPeso/contadorMascotas;

			if(especie=="perro" && peso>=pesoPerroMasPesado){
				pesoPerroMasPesado=peso;
			}
		}while((isNaN(peso)))

		do{
			estadoClinico=prompt("Ingrese el estado clinico de la mascota (enfermo-internado-adopcion");
			if(estadoClinico=="enfermo"){
				contadorEnfermos++;
				porcenajeMascotasEnfermas=(contadorEnfermos*100)/contadorMascotas;
			}else if(estadoClinico=="internado"){
				contadorInternado++;
			}else{
				contadorAdopcion++;
			}
			
		
		}while(estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")

		do{
			temperaturaCorporal=parseInt(prompt("Ingrese la temperatura corporal de la mascota"));
			if(especie=="gato"){
				contadorGato++;
				acumuladorCorporalGato=acumuladorCorporalGato+temperaturaCorporal;
				promedioCorporalGato=acumuladorCorporalGato/contadorGato;
			} else if(especie=="perro"){
				contadorPerro++;
				acumuladorCorporalPerro=acumuladorCorporalPerro+temperaturaCorporal;
				promedioCorporalPerro=acumuladorCorporalPerro/contadorPerro;
			}else{
				contadorOtro++;
				acumuladorCorporalOtro=acumuladorCorporalOtro+temperaturaCorporal;
				promedioCorporalOtro=acumuladorCorporalOtro/contadorOtro;
			}
		}while(isNaN(temperaturaCorporal))
		
		if(pelaje=="sin pelo" && temperaturaCorporal>=menorTemperaturaCorporal && bandera==0){
			menorTemperaturaCorporal=temperaturaCorporal;
			animalSinpelo=especie;
			bandera=1;
		}else if(pelaje=="sin pelo" && temperaturaCorporal<=menorTemperaturaCorporal && bandera==1){
			menorTemperaturaCorporal=temperaturaCorporal;
			animalSinpelo=especie;
		}
		
		if(especie=="gato" && promedioCorporalGato>promedioCorporalPerro && promedioCorporalGato>promedioCorporalOtro){
			mascotaMayorPromedioCorporal=especie;
		}else if(especie=="perro" && promedioCorporalPerro>promedioCorporalGato && promedioCorporalPerro>promedioCorporalOtro){
			mascotaMayorPromedioCorporal=especie;
		}else if(especie=="otro" && promedioCorporalOtro>promedioCorporalPerro && promedioCorporalOtro>promedioCorporalGato){
			mascotaMayorPromedioCorporal=especia;
		}

		if(estadoClinico=="enfermo" && contadorEnfermos<contadorAdopcion && contadorEnfermos<contadorInternado){
			estadoClinicoMenorMascotas=estadoClinico;
		}else if (estadoClinico=="adopcion" && contadorAdopcion<contadorEnfermos && contadorAdopcion<contadorInternado){
			estadoClinicoMenorMascotas=estadoClinico;
		}else if (estadoClinico=="internado" && contadorInternado<contadorAdopcion && contadorInternado<contadorEnfermos){
			estadoClinicoMenorMascotas=estadoClinico;
		} //probar sacando el estado clinico afuera
		
		
		respuesta=confirm("Desea agregar otra mascota?");
		

	}while(respuesta)

	porcentajeGatosPerros=((contadorPerro+contadorGato)*100)/contadorMascotas;

	console.log("El peso del perro mas pesado es " + pesoPerroMasPesado + "kg");
	console.log("El porcenaje de mascotas enfermas es " + porcenajeMascotasEnfermas);
	console.log("El animal sin pelo con menor temperatura corporal es " + animalSinpelo + " con " + menorTemperaturaCorporal + "°C")
	console.log("El tipo de mascota con mayor promedio de temperatura corporal son los " + mascotaMayorPromedioCorporal);
	console.log("El porcentaje de perros y gatos sobre el total de mascotas es " + porcentajeGatosPerros + "%");
	console.log("El estado clinico que tiene menor cantidad de mascotas es " + estadoClinicoMenorMascotas);
	console.log("El peso promedio de todas las mascotas es " + promedioPeso);
}



