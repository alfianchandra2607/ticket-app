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
        }else{
            alert(`input yang anda masukan tidak sesuai studio \n tolong ulangi lagi`)
        }
}else if(umur <= 0){
    alert("Umur yang anda masukan tidak valid")
}else{
    alert("tidak boleh masuk studio")
}