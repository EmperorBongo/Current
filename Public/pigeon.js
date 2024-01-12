console.log("Connected to js")
const form = document.getElementById("pigeon-form")
const pigeonName = document.getElementById("pigeon-name")
const pigeonPicture = document.getElementById("pigeon-photo")
const pigeonColor = document.getElementById("pigeon-color")
const pigeonDesc = document.getElementById('pigeon-desc')

const addPigeon = (event) => {
    event.preventDefault()
    const myImage = new Image(200, 200)
    myImage.src = pigeonPicture.value
    let newPigeon = {
        name: pigeonName.value,
        picture: pigeonPicture.value,
        color: pigeonColor.value,
        description: pigeonDesc.value
    }
    console.log(newPigeon)
    axios.post('http://localhost:9822/api/addPigeon', newPigeon)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

form.addEventListener('submit', addPigeon)


