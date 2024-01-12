console.log("Connected to js")
const form = document.getElementById("pigeon-form")
const pigeonName = document.getElementById("pigeon-name")
const pigeonPicture = document.getElementById("pigeon-photo")
const pigeonPrice = document.getElementById("pigeon-price")
const pigeonDesc = document.getElementById('pigeon-desc')
const pigeonFormSteps = document.querySelectorAll('.form-step')
const progressBar = document.getElementById('progress-bar')

let currentStep = 1

const updateProgressBar = () => {
    const progress = ((currentStep - 1) / pigeonFormSteps.length) * 100
    progressBar.style.width = `${progress}%`
}

const showStep = (step) => {
    pigeonFormSteps.forEach((formStep) => {
        formStep.style.display = 'none'
    });

    pigeonFormSteps[step - 1].style.display = 'block'
    updateProgressBar();
};


const nextStep = () => {
    currentStep++;
    showStep(currentStep)
};


const prevStep = () => {
    currentStep--;
    showStep(currentStep)
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
});

document.querySelectorAll('.next-step').forEach((button) => {
    button.addEventListener('click', nextStep)
});

document.querySelectorAll('.prev-step').forEach((button) => {
    button.addEventListener('click', prevStep)
})

showStep(currentStep)

const addPigeon = (event) => {
    event.preventDefault()
    const myImage = new Image(200, 200)
    myImage.src = pigeonPicture.value
    let newPigeon = {
        name: pigeonName.value,
        picture: pigeonPicture.value,
        price: pigeonPrice.value,
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

