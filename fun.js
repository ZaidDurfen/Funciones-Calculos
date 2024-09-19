// Función para calcular la superficie de un triángulo
function calcularSuperficie() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const resultadoSuperficie = document.getElementById('resultadoSuperficie');

    if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
        const superficie = (base * altura) / 2;
        resultadoSuperficie.textContent = `La superficie es: ${superficie}`;
    } else {
        resultadoSuperficie.textContent = 'Por favor, ingrese valores válidos.';
    }
}

// Función para mostrar los datos personales
function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    const resultadoDatos = document.getElementById('resultadoDatos');

    if (nombre && edad && direccion && telefono && correo) {
        resultadoDatos.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Correo:</strong> ${correo}</p>`;
    } else {
        resultadoDatos.textContent = 'Por favor, ingrese todos los datos.';
    }
}

// Función para calcular la nómina
function calcularNomina() {
    const sueldos = Array.from({ length: 5 }, (_, i) =>
        parseFloat(document.getElementById(`trabajador${i + 1}`).value)
    );

    const resultadoNomina = document.getElementById('resultadoNomina');

    if (sueldos.every(sueldo => !isNaN(sueldo) && sueldo > 0)) {
        const totalNomina = sueldos.reduce((acc, sueldo) => acc + sueldo, 0);
        resultadoNomina.textContent = `Total de Nómina: $${totalNomina}`;
    } else {
        resultadoNomina.textContent = 'Por favor, ingrese todos los sueldos válidos.';
    }
}

// Función para calcular el promedio de un alumno
function calcularPromedio() {
    const calificaciones = [
        parseFloat(document.getElementById('materia1').value),
        parseFloat(document.getElementById('materia2').value),
        parseFloat(document.getElementById('materia3').value)
    ];

    const resultadoPromedio = document.getElementById('resultadoPromedio');

    if (calificaciones.every(nota => !isNaN(nota) && nota >= 0 && nota <= 10)) {
        const promedio = calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length;
        resultadoPromedio.textContent = `El promedio es: ${promedio.toFixed(2)}`;
    } else {
        resultadoPromedio.textContent = 'Por favor, ingrese calificaciones válidas.';
    }
}
