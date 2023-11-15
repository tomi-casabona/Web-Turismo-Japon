function buttonLeerMas(boton) {
    var contenedor = boton.previousElementSibling; // Obtén el contenedor anterior al botón

    if (contenedor.style.height === "150px" || contenedor.style.height === "") {
        contenedor.style.height = "auto"; // Expande el contenedor
    } else {
        contenedor.style.height = "150px"; // Restaura la altura original
    }
}