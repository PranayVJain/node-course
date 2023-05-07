console.log('Client side loaded')

fetch('http://localhost:3000/weather?address=Pune').then((response) => {
    console.log(response.json().then((data)=>{
        console.log(data)
    }))
})