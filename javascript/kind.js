import { kind } from "../data/kind.js";
const newArr = kind.menu_items


const rendercategory = (value) => {
    const kind = document.querySelector('.kind')
    kind.insertAdjacentHTML("beforeend",
    `<li class="option">
        <img src="${value.image_url.url.normal}" alt="">
        <span>${value.name.text}</span>
    </li>`)
}



const newkind = newArr.forEach((value) => rendercategory(value))