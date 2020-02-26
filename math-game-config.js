/**
 * Ini titipan aja ya.. Buat ngetes keterhubungan
 */

var randNum = Math.floor(Math.random() * 10) + 1;
    
function myFunction() {
      var choiNum = document.getElementById("number").value;
    var resultNum = choiNum*randNum;
    
    document.getElementById("tebak").innerHTML = choiNum+" x ... = "+choiNum*randNum;
}
function myFunction2() {
    var tebakNum = document.getElementById("tebakan").value;
    
    if (tebakNum == randNum) {
        document.getElementById("score").innerHTML = "Berhasil";
    } else {
        document.getElementById("score").innerHTML = "Gagal";
    }
}