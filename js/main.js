
const elCards= document.querySelector(`.cards`)
const elInput= document.querySelector(`.js-input`)
const elSelect = document.querySelector('#js-select')
const elTemplate = document.querySelector(`template`).content
let docFragment = document.createDocumentFragment()

let region;
// region ="Asia"
async function countries(){
    const response =await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json()
    renderPosts(data,elCards) 
   
    const newRegion = new Set(data.map((el)=>el.region))
    
    for( i of newRegion){
const elOption =document.createElement('option')
elOption.textContent =i
elSelect.appendChild(elOption)

}
elSelect.addEventListener('change', (evt)=>{
region = elSelect.value
console.log(region);
async function FilterRegion(){
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    console.log(res);
    const data = await res.json()
    console.log(data);
    renderPosts(data,elCards)
}
FilterRegion()
})

}
countries()

function renderPosts(array,node){
    node.innerHTML = ""
    array.forEach(el => {
        let elCard =elTemplate.cloneNode(true)
        let elImg = elCard.querySelector(`.card-img-top`)
        let elTitle =elCard.querySelector(".card-title")
        let elPopular =elCard.querySelector(`.popular`)
        let elCapital =elCard.querySelector(".capital")
        let elRegion =elCard.querySelector(`.region`)

        elImg.src = el.flags.svg
        elTitle.textContent = el.name.common
        elPopular.textContent ='Population:' + el.population
        elCapital.textContent ='Capital:' + el.capital
        elRegion.textContent ='region:' + el.region 

        docFragment.appendChild(elCard)
});
node.appendChild(docFragment)
}

let nameCountry ;

elInput.addEventListener('input',()=>{
 if (elInput.value !== "") {
    nameCountry = elInput.value
    SearchFunc()
 }
})

const SearchFunc = async () =>{
    const res =await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
    // console.log(res);
    const data = await res.json()
    console.log(data);
    renderPosts(data,elCards)

}

const elMode =document.querySelector('.js-mode')
let theme =false
elMode.addEventListener('click', ()=>{
    theme =!theme
    console.log(theme);
    const bg =theme ? 'dark':'light';
    window.localStorage.setItem('theme',bg)
    ChangeTheme()
})
function ChangeTheme() {
    if (window.localStorage.getItem("theme" ) == "dark") {
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }
}
ChangeTheme()




