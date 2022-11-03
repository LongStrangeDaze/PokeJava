// Using what we learned in class, create a mockup of a Pokedex.. when you enter a Pokemon name, 
// it should make an API call and get all the data.. then display some of that information to your html page
// (couple of pokemon names to try: "ditto", "pikachu", "charizard")

// Features should include:
// -name
// -image(hint: the path to the image is 'sprites' -> 'front_default')

// Extra credit: List out all the pokemon's abilities

// preventDefault() should be used if submit is present

const getPoke = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
    const data = await res.json() 
    const pokeName = data.forms[0].name
    const pokeImg = data.sprites.front_default
    const pokeList = [pokeName, pokeImg]

    
    addToPage(pokeList)
    return pokeList
};


const pokemans = document.querySelector('#poke_data')
pokemans.addEventListener('submit', (e)=>{
    e.preventDefault();
    const pokemonName = e.path[0][0].value
    const pokemonInfo = getPoke(pokemonName)
    return
});


const addToPage = (list) => {
    const p = document.createElement('p')
    p.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${list[1]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${list[0]}</h5>
            </div>
        </div>
    ` 
    document.querySelector('#showPoke').append(p)
};


const clearBtn = document.getElementById('clear');
const clearData = () => {
    document.querySelector('section').innerHTML=''
};
clearBtn.addEventListener('click', clearData)
