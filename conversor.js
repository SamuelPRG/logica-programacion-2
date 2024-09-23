function conversorDeUnidad() {
    let gradosCelsius = parseInt(document.getElementById("gradosCelsius").value);
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    let gradosKelvin = gradosCelsius + 273.15;

    let resultado = `<br>Grados Fahrenheit: ${gradosFahrenheit}°F<br>Grados Kelvin: ${gradosKelvin}K`;


    
    document.getElementById('resultado').innerHTML = resultado
}
