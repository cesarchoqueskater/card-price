selectedCardPlan()

export function selectedCardPlan() {
    const $selected = document.querySelectorAll('.card-content')
    $selected.forEach((item) => {

        item.addEventListener('click', (e) => {
            removeAttribute()
            cardSelected(item)
        })

    })
}

export function cardSelected(item) {
    item.setAttribute('aria-selected', true)
}

export function removeAttribute() {
    const $selected = document.querySelectorAll('.card-content')
    $selected.forEach((item) => {
        item.removeAttribute('aria-selected')
    })
}