const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'junat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}
// cekHariKerja('sabtu')
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err.message)
// })
// mengembalikan Promise dan hanya setuju jika kasusnya gagal.

const takeData = async() => {
    
    console.log('Cek Hari Kerja')
    let cek = null

    try {
        cek = await cekHariKerja()
      
    } catch (reject) {
        console.log(reject.message)
    }
    
}
takeData()
// Blok Try, biasanya kita sisipkan code javascript yang mungkin terjadi error
// Blok Catch, pada blok inilah yang akan menangkap error yang terjadi pada blok Try apabila pada blok Try si error muncul. Secara default, kita bisa ambil semua jenis error tanpa harus menuliskan jenis error.