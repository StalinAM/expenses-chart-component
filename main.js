const jsonData = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];
const date = new Date().toString();
const today = date.substring(0, 3).toLowerCase();
const days = document.querySelectorAll(".days");
const dayText = document.querySelectorAll(".day-text");
const daysPrice = document.querySelectorAll(".day-price");
const toogleHeight = document.querySelectorAll(".barra")
for (let i = 0; i < toogleHeight.length; i++) {

    dayText[i].innerHTML = `${jsonData[i].day}`;
    daysPrice[i].innerHTML = `$${jsonData[i].amount}`;
    daysPrice[i].style.bottom= `${jsonData[i].amount*3 + 30}px`
    toogleHeight[i].style.height = `${jsonData[i].amount * 3}px`;

    if (dayText[i].textContent == today) {
        toogleHeight[i].style.background = "hsl(186, 34%, 60%)"
    }

    toogleHeight[i].addEventListener("mouseenter", () => {
        daysPrice[i].classList.remove('display')
    })

    toogleHeight[i].addEventListener("mouseleave", () => {
        daysPrice[i].classList.add('display')
    })
}


