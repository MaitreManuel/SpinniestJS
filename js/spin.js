/* when you want to call your spinner, just write spin(true)
   and when you just want to remove it, write spin(false) */
function spin(spin) {
    if(spin == true) {
        document.getElementById("overlay").style.width = "100%";
        document.getElementById("loader").style.display = 'block';
    } else {
        document.getElementById("overlay").style.width = "0%";
        document.getElementById("loader").style.display = 'none';
    }
}
