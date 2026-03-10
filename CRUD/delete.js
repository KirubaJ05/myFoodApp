export async function deleteFruitFromAPI(name) {
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