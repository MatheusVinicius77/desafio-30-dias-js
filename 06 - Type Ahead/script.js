const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const search = document.querySelector('.search')
const ul = document.querySelector('.suggestions')
const defaultLI = document.querySelectorAll('li[data-visible="true"]')


const cities = []

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));


function filterPlaces(word,cities){

    return cities.filter((e)=>{
        return e.city.toLowerCase().includes(word.toLowerCase()) || e.state.toLowerCase().includes(word.toLowerCase());
    })
}

function showPlaces(){
    if(search.value.length > 0){
        const filteredCities = filterPlaces(this.value,cities);
        const html = filteredCities.reduce((acc,cur)=>{
            const sameWords = `<li><p>${cur.city}, ${cur.state}<p> ${Number(cur.population).toLocaleString()}</li>`.repeat(1).toLocaleLowerCase().replaceAll(this.value.toLowerCase(), `<span>${this.value}</span>`);
            return acc+ sameWords ;
        }, '')
        ul.innerHTML = html;
    }else{
        ul.innerHTML ='';
        defaultLI.forEach((e)=> ul.innerHTML += `<li>${e.innerHTML}</li>`);
    }
}

search.addEventListener('keyup', showPlaces);