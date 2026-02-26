const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p')
const fruitImage = document.querySelector('#fruitImage img')
const fruitImageList = document.querySelector('#fruitImage ul')

let cal = 0

fruitForm.addEventListener('submit', extractFruits)
function extractFruits(e){
    e.preventDefault();
    fetchFruit(e.target.fruitInput.value);
    getImage(e.target.fruitInput.value)
    e.target.fruitInput.value = ''
}

function addFruit (fruit){
    const li = document.createElement('li')
    li.textContent =fruit.name
    li.addEventListener('click', (e) => {
        removeFruit(e);
        minusCalories(fruit.nutritions.calories);})
    fruitList.appendChild(li)

    cal += fruit.nutritions.calories
    fruitNutrition.textContent = cal
}

function addImage (image){
    const newimg = document.createElement('li')
    newimg.innerHTML= `<img src =${image} alt =${image}> `
    fruitImageList.append(newimg)
    //fruitImage.src = image
}



async function fetchFruit(fruit){
    try{
        const resp = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        if(resp.ok){
            const data = await resp.json();
            addFruit(data)
        }else {
            throw `Error: http status code = ${resp.status}`
        }
    } catch (e) {
          console.log(e)}
}

async function getImage(fruit){
    try{
        const resp = await fetch (`https://pixabay.com/api/?key=54809903-762512060280a6638b2c73100&q=${fruit}&image_type=photo&category=food&pretty=true`)
        if(resp.ok){
            //console.log(await resp.json());
            const data = await resp.json();;
            addImage(data.hits[0].previewURL)
        }else{
            throw `Error: https status code = ${resp.status}`
        }
    }catch (e) {
        console.log(e)

    }
  /*       .then(processResponse)
        .then(data => addFruit(data))
        .catch((e)=> console.log(e)); */
}

/* function processResponse(resp){
    if(resp.ok){
        return resp.json()
    }else {
        throw `Error http satus code = ${resp.status}`
    }
} */
function removeFruit(e){
    console.log(e);
    e.target.remove();
}
function minusCalories (calSubtract){
    cal -= calSubtract
    fruitNutrition.textContent = cal
}