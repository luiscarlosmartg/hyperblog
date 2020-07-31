function agregarEstudiante()
{
	//debugger; 
	var tabla = document.getElementById("tablaEstudiantes");
	var fila = tabla.insertRow(1);
	
	var nombre = fila.insertCell(0);
	var calificacion1 = fila.insertCell(1);
	var calificacion2 = fila.insertCell(2);
	var calificacion3 = fila.insertCell(3);
	var calificacionPromedio = fila.insertCell(4);
	var estado = fila.insertCell(5);	
	
	var nombreEstudiante = document.getElementById("nombre").value;
	var calificacionUno = parseFloat(document.getElementById("calificacionUno").value);
	var calificacionDos = parseFloat(document.getElementById("calificacionDos").value);
	var calificacionTres = parseFloat(document.getElementById("calificacionTres").value);
	var promedio = (calificacionUno+calificacionDos+calificacionTres)/3;
	
	if(nombre == "" || isNaN(calificacionUno) == true || isNaN(calificacionDos) == true || isNaN(calificacionTres) == true){
		alert("los datos estan incompletos");
		fila.remove();
	}else if(calificacionUno>5 || calificacionUno<0 || calificacionDos>5 || calificacionDos<0 || calificacionTres>5 || calificacionTres<0){
		alert("los datos son invalidos");
		fila.remove();
	}else{
		nombre.innerHTML = nombreEstudiante;
		calificacion1.innerHTML = calificacionUno;
		calificacion2.innerHTML = calificacionDos;
		calificacion3.innerHTML = calificacionTres;
		calificacionPromedio.innerHTML = promedio;
		if(promedio < 3){
			estado.style.color = "red";
			estado.innerHTML = "Reprobo";}
		else{
			estado.style.color = "green";
			estado.innerHTML = "Aprobo";}				
	}
document.getElementById("nombre").value = "";
document.getElementById("calificacionUno").value = "";
document.getElementById("calificacionDos").value = "";
document.getElementById("calificacionTres").value = "";		
}