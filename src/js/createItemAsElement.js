export default function createItemAsElement(title,
    image,
    description,
    category,
    seria,
    name,
    country,
    city){
    const li = document.createElement('li');
    li.classList.add('gallery-item', 'gallery-item');
    const h3 = document.createElement('h3');
    h3.textContent=title
    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', description);
    // img.setAttribute('data-index', index); // записываем индекс итерируемого объекта из массива для карусели
    img.classList.add('gallery-img');
    const pDesc = document.createElement('p');
pDesc.textContent=description;
const pCat = document.createElement('p');
const spanCat= document.createElement('span');
pDesc.classList.add('text');
spanCat.textContent=category;
const spanSer = document.createElement('span');
spanSer.textContent=seria;
const div= document.createElement('div');
const h4 = document.createElement('h4');
h4.textContent = 'author:';
const pName = document.createElement('p');
pName.textContent=name;
const pCountry=document.createElement('p');
const spanCountry = document.createElement('span');
spanCountry.textContent=country;
const spanCity = document.createElement('span');
spanCity.textContent=city
div.append(h4,pName,pCountry);
pCountry.append(spanCountry,spanCity);
pCat.append(spanCat,spanSer);
li.append(h3,img,pDesc,pCat,div);
return li;
}