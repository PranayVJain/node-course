let name = "abc"
const event = {
    name1: 'Birthday Party',
    guestList: () => {
        console.log('Guests for the ' + name);
    }
}

// const event = {
//     name: 'Birthday Party',
//     guestList: function()  {
//         console.log('Guests for the ' + this.name)
//     }
// }

// const event = {
//     name: 'Birthday Party',
//     guests: ['Pranay', 'Pratik'],
//     guestList()  {
//         console.log('Guests for the ' + this.name)
//     }
// }

// const event = {
//     name: 'Birthday Party',
//     guests: ['Pranay', 'Pratik'],
//     guestList()  {
//         this.guests.forEach((guest)=>{
//             console.log(guest)
//             console.log(this.name)
//         })
//     }
// }

event.guestList();

