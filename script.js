let id = document.getElementById('id')
let advice = document.getElementById('advice')
let loadData = document.getElementById('loadData')

const fetchData = async() =>{
    id.innerText = "Loading Id.."
    advice.innerText = "Loading Advice.."
    const res = await fetch("https://api.adviceslip.com/advice")
    const data  = await res.json()
    id.innerText = data.slip.id
    advice.innerText = data.slip.advice
}

fetchData()

loadData.addEventListener("click", fetchData)