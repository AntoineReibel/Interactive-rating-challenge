const submit = document.querySelector(".submit")
const card = document.querySelector (".card")
const rates = document.querySelectorAll(".rate");
let selectedRate = null

rates.forEach(rate => {
    rate.addEventListener('click', () => {
      selectedRate = rate.textContent;
      console.log(`Selected button: ${selectedRate}`);
    });
  });

function regenerateHtml() {

    card.innerHTML = ""
    card.classList.add("flexCenter")
    const image = document.createElement("img")
    image.src = "images/illustration-thank-you.svg"
    card.appendChild(image)
    const outOf5 = document.createElement("p")
    outOf5.classList.add("outOf5")
    outOf5.innerText = `You selected ${selectedRate} out of 5`
    card.appendChild(outOf5)
    const h2 = document.createElement("h2")
    h2.innerText = "Thank you!"
    card.appendChild(h2)
    const text = document.createElement("p")
    text.innerText= `We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!`
    card.appendChild(text)
}

submit.addEventListener('click', () => {
if ( selectedRate === null) {
console.log("Choose a rate")
} else {
    regenerateHtml()
}
})
