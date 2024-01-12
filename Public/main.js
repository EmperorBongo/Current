const list = document.getElementById('pigeon-container')

const deletePigeon = (id) => {
    console.log(id)
    axios.delete(`http://localhost:9822/api/deletePigeon/${id}`)
    .then((res) => {
        list.innerHTML = ""
        res.data.forEach(createPigeon)
    })
    .catch((err) => {
        console.error(err)
    })
}

const createPigeon = (pigeon) => {
    console.log('Creating pigeon:', pigeon);
    let pigeon1 = document.createElement('div')
    pigeon1.classList += 'pigeon-pigeon'

    let pigeonHeader = document.createElement('div')
    pigeonHeader.classList += 'pigeon-header'

    let options = document.createElement('div')
    options.classList += 'pigeon-options'

    let pigeonName = document.createElement('h3')
    pigeonName.textContent = pigeon.name
    const myImage = new Image(250, 250);
    myImage.src = pigeon.picture

    let description = document.createElement('p')
    let pigeonColor = document.createElement('h4')
    pigeonColor.textContent = `Color: ${pigeon.color}`
    pigeon1.appendChild(pigeonHeader)
    pigeonHeader.appendChild(pigeonName)
    pigeon1.appendChild(myImage)
    pigeon1.appendChild(pigeonColor)
    pigeon1.appendChild(description)
    pigeon1.appendChild(options)

    let delete1 = document.createElement('button')
    delete1.addEventListener('click', () => deletePigeon(pigeon.id))
    delete1.textContent = 'Delete'
    let text = document.createElement('div')

    
    
    options.appendChild(delete1) 
    options.appendChild(text)
    description.textContent = pigeon.description
    list.appendChild(pigeon1)
}

const getPigeons = () => {
    axios.get('http://localhost:9822/api/getPigeons')
    .then((res) => {
        console.log(res.data)
        clearPigeons();
        res.data.forEach(createPigeon)
    })
    .catch((err) => {
        console.error(err)
    })
}

const clearPigeons = () => {
    const pigeonContainer = document.getElementById('pigeon-container');
    pigeonContainer.innerHTML = '';
}
       
getPigeons()
           

