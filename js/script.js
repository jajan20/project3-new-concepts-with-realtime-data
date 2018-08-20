const KWS_PER_SECOND = 0.00125
const UPDATE_IN_SECONDS = 1

const risotto = {
	"name": "risotto",
	"minKws": 20,
	"maxKws": 25,
  "minCooking": 1, // Minimum should be 1, otherwise you can randomly get 0
  "maxCooking": 1
}

let startBtn = document.querySelector('#start')
let kwsText = document.querySelector('#kws')
let timeText = document.querySelector('#time')


let timer;
let currentTime = 0
let currentKws = 0

startBtn.addEventListener('click', setKwsTimer.bind(this))

function setKwsTimer() {
	let kwsTime = Math.floor(Math.random() * (risotto.maxKws - risotto.minKws )) + risotto.minKws
	let cookingTime = Math.floor(Math.random() * ((risotto.maxCooking+1) - risotto.minCooking)) + risotto.minCooking
  
  console.log("Length of cooking: " + cookingTime + "m")
  
  timer = setInterval(() => {
    	let kwsMealCost = kwsTime * 60 * KWS_PER_SECOND
    
      if ((currentTime*60) >= cookingTime*60*60) {
				clearInterval(timer)
				console.log("Meal finished")
      } else {
      	currentTime++
        currentKws+=kwsMealCost
      }
      
      kwsText.innerHTML = currentKws + 'kW'
      timeText.innerHTML = currentTime + 's'
      
  }, UPDATE_IN_SECONDS*1000)
}