const searchName = (kata, limit, callback) =>{
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']
     let input = kata;
     let re = new RegExp(input + '.+$', 'i');
     search = name.filter(function(item) {
         return item.search(re) != -1;
     })
    callback(search, limit)
    // console.log(search)
}

const limitName = (data, limit) =>{
    let result = data.slice(0,limit)
    console.log(result)
}

searchName('an', 3, limitName);