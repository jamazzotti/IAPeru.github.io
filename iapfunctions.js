function getDate(){
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();

    var monthNames = new Array(12);
    monthNames[0] = "Enero";
    monthNames[1] = "Febrero";
    monthNames[2] = "Marzo";
    monthNames[3] = "Abril";
    monthNames[4] = "Mayo";
    monthNames[5] = "Junio";
    monthNames[6] = "Julio";
    monthNames[7] = "Agosto";
    monthNames[8] = "Septiembre";
    monthNames[9] = "Octubre";
    monthNames[10] = "Noviembre";
    monthNames[11] = "Diciembre";

    document.getElementById("thin").innerHTML = "El " + d + " de" + " " + monthNames[m] + " de " + y;
}

function writeToFile(passForm) {
 
    const fs = require('fs')
 
    var email = document.getElementById('email');
    var message  = document.getElementById('message');
 
    fs.writeFile("C:\Users\cgusti01\Box\Web Dev Work\IAP Website\Code\InputData.txt", email, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })

    fs.writeFile("C:\Users\cgusti01\Box\Web Dev Work\IAP Website\Code\InputData.txt", message, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
 
    fs.writeFile("C:\Users\cgusti01\Box\Web Dev Work\IAP Website\Code\InputData.txt", "------------", (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
 }
