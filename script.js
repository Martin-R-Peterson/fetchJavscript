const lista = document.querySelector("ul.karak");
const knapp = document.querySelector("ul.karak > li");
const contentlist = document.querySelector("section.resultat");
const attrilist = document.querySelector(".info");
const jediKnight = document.querySelector(".hero");

const urlpeople = 'https://swapi.dev/api/people/';
fetch(urlpeople)
.then(response => response.json())
.then(data =>{
    _user = data.results;
    console.log(_user);
    StartPage(_user);
    
})
.catch(error => console.log(error));



function StartPage(data)
{
    
    displayName(data);

}

lista.addEventListener('click',ulOnClick);


function ulOnClick(evt){

    const jedi = evt.target.getAttribute('name');
    for (let i = 0; i < _user.length; i++) {
        const element = _user[i];
        
        if(element.name == jedi)
        {
            informationRender(element);
            break;
        }
    }



}

function getData (url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(callback)
        .catch(error => console.log(error));
}

function displayName (user){
    for (let i = 0; i < user.length; i++) {
        const element = user[i];
        renderName(element);
       
    }
}

function renderName(user) {
        let name1 = document.createElement('li');
        name1.setAttribute('name', user.name);
        name1.textContent = user.name;
        lista.appendChild(name1);
       
}


function informationRender(element) {

            removeAllChildNodes(attrilist);
            jediKnight.textContent = "";
    
            const jedHeight = jediHeight(element);
            const jedWeight = jediWeight(element);
            const jedBirth = jediBirth(element);
            const jedEye = jediEye(element);
            const jedGender = jediGender(element);
            const jedHair = jediHairC(element);
            const jedSkin = jediSkin(element);


            jediKnight.textContent = element.name;
            

            const contentBirth = document.createElement('li');
            const contentEye = document.createElement('li');
            const contentGender = document.createElement('li');
            const contentHairC = document.createElement('li');
            const contentHeight = document.createElement('li');
            const contentWeight = document.createElement('li');
            const contentSkin = document.createElement('li');

            contentBirth.textContent = jedBirth;
            contentEye.textContent = jedEye;
            contentGender.textContent = jedGender;
            contentHairC.textContent = jedHair;
            contentHeight.textContent = jedHeight;
            contentWeight.textContent = jedWeight;
            contentSkin.textContent = jedSkin;


            attrilist.appendChild(contentBirth);
            attrilist.appendChild(contentEye);
            attrilist.appendChild(contentGender);
            attrilist.appendChild(contentHairC);
            attrilist.appendChild(contentHeight);
            attrilist.appendChild(contentWeight);
            attrilist.appendChild(contentSkin);



            

}

function jediHeight (input) {
    
    const height = "Height: " + input.height + " cm";
    return height;
}

function jediWeight (input) {
    const weight = "Weight: " + input.mass + " kg";
    return weight;
}

function jediBirth (input) {
    const birth = "Birth year: " + input.birth_year;
    return birth;
}

function jediEye (input) {
    const eye = "Eye Color: " + input.eye_color;
    return eye;
}

function jediGender (input) {
    const gend = "Gender: " + input.gender;
    return gend;
}

function jediHairC (input) {
    const hair = "Hair Color" + input.hair_color;
    return hair;
}

function jediSkin (input) {
    const skin = "Skin Color: " + input.skin_color;
    return skin;
}

function removeAllChildNodes(parent)
{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}