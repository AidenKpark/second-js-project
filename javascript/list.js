import { list } from "../data/list.js"

const renderlist = (value) => {
    const cardContainer = document.querySelector('.card-container')
    cardContainer.insertAdjacentHTML("beforeend",
    `<div class="card">
        <img class="mainImg" src="${value.image_url}" alt="">
        <img class="rapidship" src="${value.thumbnail_emblem_badge_list.image_url ? (thumbnail_emblem_badge_list.image_url): null}" alt="">
        <div class="info">
            <div class="first-row">
                <span class="shopName">${value.shop_name}</span>
                <img class="mileage" src="images/mileage.png" alt="">
            </div>
            <div class="title">${value.title}</div>
            <div class="originalPrice">${value.price}원</div>
            <div class="price">
                <span class="discountRate">${value.discount_rate}%</span>
                <span class="finalPrice">${value.final_price}원</span>
            </div>
            <img class="freeship" src="images/freeship.png" alt="">
            <div class="review"><i class="fas fa-star"></i>${value.review_score}(${value.display_review_count})</div>
        </div>
    </div>`)
}



const listData = list.ui_item_list
const newArr = listData.forEach((value) => renderlist(value))