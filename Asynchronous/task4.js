fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
     data.map((item) => {
    console.log(item.name)
    })
})
.catch(err => console.log(err))