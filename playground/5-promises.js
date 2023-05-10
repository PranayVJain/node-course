const doWorkPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Resolved')
    }, 1000)

})

doWorkPromise.then((result) =>{
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log('Done')
})