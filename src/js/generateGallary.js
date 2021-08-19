// console.log('Файл подключен');
// ВСЕ ИМПОРТЫ
import photoArray from '../db/photo.js';
console.log(photoArray);
// import createItemByString from './createItemByString.js';
import createItemAsElement from './createItemAsElement.js';

import refs from './refs.js';
import modalList from './modal.js';
import *as myModule from './closeModal.js'
// import {carousel} from './carusel.js';
const {list,modal,overlay,modalContent,modalImg,closeModalBtn} =refs;
const result = photoArray.map((photoObj)=>{
console.log(photoObj.author.country);
const{title,
    image,
    description,
    category,
    seria,
    author:{name,
        country,
        city}
    }=photoObj;
   

// const item =createItemByString(title,
//     image,
//     description,
//     category,
//     seria,
//     name,
//     country,
//     city);

const item = createItemAsElement(title,
    image,
    description,
    category,
    seria,
    name,
    country,
    city);
    console.log(item);
    return item;
});
// console.log(result.join(''));
// const addResult = result.join('')
// list.insertAdjacentHTML('beforeend',addResult);


list.append(...result);





