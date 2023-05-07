
product = {
    name: 'Book',
    cost: 100,
    rating: 4.5
}

const transaction = (type, { name, cost }) => {
    console.log('Name is ' + name + ' cost is ' + cost)
}

transaction('type', product)


const greet = (name='P') =>{
    console.log('Hello ' + name)
}

greet()
greet('Pranay')
