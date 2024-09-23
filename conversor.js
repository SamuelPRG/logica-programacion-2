function conversorDeUnidad() {
    const gradosCelsius = parseFloat(document.getElementById("gradosCelsius").value);
    const gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    const gradosKelvin = gradosCelsius + 273.15;

    const resultado = `<br>Grados Fahrenheit: ${gradosFahrenheit.toFixed(2)}°F<br>Grados Kelvin: ${gradosKelvin.toFixed(2)}K`;


    
    document.getElementById('resultado').innerHTML = resultado
}
