console.log('Client side loaded')

fetch('/weather?address=Pune').then((response) => {
    console.log(response.json().then((data)=>{
        console.log(data)
    }))
})