alert("Aplikasi Tiket")

const nama = prompt(`masukan nama anda :`);
const umur = prompt(`masukan umur anda :`);

if(umur >= 13){
    alert("boleh masuk studio");
    const pilihan = prompt(`pilih studio A/B/C : `);
        if(pilihan == "A"){
        alert(`Tiket ${nama} Studio ${pilihan} Umur ${umur}`);
        }else if(pilihan == "B"){
        alert(`Tiket ${nama} Studio ${pilihan} Umur ${umur}`);
        }else if(pilihan == "C"){
        alert(`Tiket ${nama} Studio ${pilihan} Umur ${umur}`);
        }
}else{
    alert("tidak boleh masuk")
}