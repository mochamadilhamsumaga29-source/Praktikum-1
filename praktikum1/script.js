// 1. Deklarasi Variabel
const nama = "Ilham";
const nim="05301425105";
let semester="3";
const aktif=true;
const hobi=["Main game online"];

// 2.Output ke console
console.log("Nama : ",nama);
console.log("tipe data semester: ",typeof semester);
console.log("tipe data aktif: ",typeof aktif);
console.log("Hobi pertama: ",hobi[0]);

// 3. Output ke halaman
document.getElementById("nama").textContent = nama;
document.getElementById("detail").innerHTML = `
NIM: ${nim}<br>
Semester: ${semester}<br>
Status: ${aktif ? "Aktif" :"cuti"}<br>
Hobi: ${hobi.join(", ")}`;