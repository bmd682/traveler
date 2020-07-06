const container = document.getElementById("container")

const travelerDOM = (array) => {
    array.forEach(element => {
        const travelerHTML = `<div>
        <h2>Name of Place: ${element.name}</h2>
        <p>Description of Place: ${element.description}</p>
        <p>Cost of Place: ${element.price}</p>
    </div>`
    container.innerHTML += travelerHTML
    })
    
}

export default travelerDOM