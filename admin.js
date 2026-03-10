const fruittoDelete = document.querySelector('#deleteFruitName')
const updateSubmitBtn = document.querySelector('#deleteFruit form')

updateSubmitBtn.addEventListener('submit', deleteFruit)
    

async function deleteFruit(e){
    e.preventDefault()
    console.log(fruittoDelete);
    alert(await deleteFruitFromAPI(fruittoDelete.value))

}
async function deleteFruitFromAPI(name) {
    try{
        const resp = await fetch(`https://fruit-api-z2ff.onrender.com/fruits/${name}`, {
            method: "DELETE"
        });
        if (resp.ok) {
            return "Fruit was deleted"
        }
        else {
            throw `Error: http status code = ${resp.status}`
        }
    } catch(err) {
        return err
    }
}
