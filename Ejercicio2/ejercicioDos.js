function probarEjercicio(){
	var continente;
	var pais;
	var habitantes;
	var nivelPobreza;
	var temperaturaMinima;

	var contadorTemperaturasPares=0;
	var contadorTemperaturasImparesEuropa=0;

	var flag=0;
	var minHabitantes;
	var paisMenosHabiantes;

	var contadorSuperanCuarenta=0;

	var contadorPaisesAmericaTempCero=0;

	var contadorPaises=0;
	var acumuladorHabitantes=0;
	var promedioHabitantes;

	var promedioHabitantesCuaGrados;
	var acumuladorHabitantesCuaGrados=0;

	var menorTemperaturaMin;
	var flagDos=0;
	var paisTemperaturaMin;

	for(var i = 1; i <= 3 ; i++ ){

		do{
			continente=prompt("Ingrese el continente (america , asia , europa ,africa y oceania)");
		}while(continente!="america" && continente!="asia" && continente!="europa" && continente!="africa" && continente!="oceania")

		do{
			pais=prompt("Ingrese el nombre del pais");
			if(isNaN(pais)){
				contadorPaises++;
			}
			
		}while(!(isNaN(pais)))

		do{
			habitantes=parseInt(prompt("Ingrese la cantidad de habitantes (1-7000)"));
			if(!(isNaN(habitantes))){
				acumuladorHabitantes=acumuladorHabitantes+habitantes;
			}

			if(flag==0){
				minHabitantes=habitantes;
				paisMenosHabiantes=pais;
				flag=1;
			}if (flag==1 && habitantes<minHabitantes){
				minHabitantes=habitantes;
				paisMenosHabiantes=pais;
			}
		}while(isNaN(habitantes) || habitantes>7000 || habitantes<1)

		do{
			nivelPobreza=prompt("Ingrese el nivel de pobreza (pobre,rico,muy rico");
			do{ 
				if(continente=="europa" && nivelPobreza=="pobre"){
					alert("Europa no tiene paises pobres");
					nivelPobreza=prompt("Ingrese el nivel de pobreza (pobre,rico,muy rico");
				}

			}while(continente=="europa" && nivelPobreza=="pobre")
			
		}while(nivelPobreza!="pobre" && nivelPobreza!="rico" && nivelPobreza!="muy rico")

		do{
			temperaturaMinima=parseInt(prompt("Temperatura minima que se registra en el pais (-50/+50)"));
			if(temperaturaMinima % 2 ==0){
				contadorTemperaturasPares++;
			}
			if(continente=="europa" && (!(temperaturaMinima%2==0))){
				contadorTemperaturasImparesEuropa++;
			}
			if(temperaturaMinima>40){
				contadorSuperanCuarenta++;
				acumuladorHabitantesCuaGrados=acumuladorHabitantesCuaGrados+habitantes;
				promedioHabitantesCuaGrados=acumuladorHabitantesCuaGrados/contadorSuperanCuarenta;
			}
			if(continente=="america" && temperaturaMinima<0){
				contadorPaisesAmericaTempCero++;
			}
			if(flagDos==0){
				menorTemperaturaMin=temperaturaMinima;
				paisTemperaturaMin=pais;
				flagDos=1;
			}else if(flagDos==1 && temperaturaMinima<menorTemperaturaMin){
				menorTemperaturaMin=temperaturaMinima;
				paisTemperaturaMin=pais;
			}
		}while(isNaN(temperaturaMinima) || temperaturaMinima>50 || temperaturaMinima<-50)


		promedioHabitantes=acumuladorHabitantes/contadorPaises;
	}

	if(contadorTemperaturasPares>=1){
		console.log("la cantidad de temperaturas pares ingresadas es " + contadorTemperaturasPares);//A
	}else{
		console.log("No se ingresaron temperaturas pares");
	}
	
	if(contadorTemperaturasImparesEuropa>=1){
		console.log("la cantidad de temperaturas impares en Europa es " + contadorTemperaturasImparesEuropa);//B
	}else{
		console.log("no se ingresaron temperaturas impares en europa");
	}

	console.log("El pais con menos habiantes es " + paisMenosHabiantes);//C

	if(contadorSuperanCuarenta>=1){
		console.log("La cantidad de paises que superan los 40 grados son " + contadorSuperanCuarenta);//D 
		console.log("El promedio de habitantes entre los paises con temperaturas superiores a 40 grados es " + promedioHabitantesCuaGrados);//G x
	}
	if(contadorPaisesAmericaTempCero>=1){
		console.log("La cantidad de paises de america que tienen menos de 0 grados es " + contadorPaisesAmericaTempCero);//E
	}else{
		console.log("No se ingreso ningun pais de america que tenga temperaturas minimas menores a 0 grados");
	}
	console.log("El promedio de habitantes entre los paises ingresados es " + promedioHabitantes); //F
	console.log("El pais con menor temperatura ingresada es " + paisTemperaturaMin + " con " + menorTemperaturaMin); //H
}


//falta hacer H e I