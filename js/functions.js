function recomienda(){
    var pais=prompt("¿A dónde quieres ir? (Francia, China...)");

    if (pais == "Francia") {
        alert("Te recomendamos ver la Torre Eiffel");
        location.href ="francia.html";
    } else if (pais == "China") {
        alert("Te recomendamos ver la Gran Muralla China");
        location.href ="china.html";
    } else {
        alert("Aún no tenemos ese lugar pero tenemos algunos mejores,visitalos!");
    }
}