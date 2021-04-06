const nilai = 60
let NilaiHuruf =''
if (nilai >= 85) {
    NilaiHuruf = 'A'
}else if (nilai >= 75) {
    NilaiHuruf = 'B'
}else if (nilai >= 65) {
    NilaiHuruf = 'C'
}else if (nilai >= 55) {
    NilaiHuruf = 'D'
}else {
    NilaiHuruf ='E'
}

console.log(NilaiHuruf)