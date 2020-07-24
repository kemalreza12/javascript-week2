// const checkID = (username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const nameID = ['niko', 'annie', 'jacobs', 'kaylan', 'joel']
//             let matching = nameID.find((item) => {
//                 return item === username
//             })
//             if(matching) {
//                 resolve(matching)
//             } else {
//                 reject(new Error('username not registered'))
//             }
//         },3000)
//     })
// }
// checkID('jacobs')
// .then((res) => {
//     console.log(res)
//     console.log('username registered')
// })
// .catch((err) => {
//     console.log(err.message)
// })

const findCountries = (country) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const asean = ['indonesia', 'thailand', 'malaysia', 'singapura', 'philipina', 'vietnam', 'kamboja', 'laos']
            let check = asean.find((item) => {
                return item === country
            })
            if(check) {
                resolve(check)
            } else {
                reject(new Error('Tidak termasuk kedalam anggota ASEAN'))
            }
        },3000)
    })
}
const getData = async() =>{
    
    console.log('Negara ASEAN')
    let result = null
    try {
        result =  await findCountries('indonesia')
      
    } catch (reject) {
        console.log(reject.message)
    }
    console.log(result)
}
getData()

