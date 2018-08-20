## project-3-ceuvel
[Live Preview](https://jajan20.github.io/project3-new-concepts-with-realtime-data/)

![](https://github.com/jajan20/project3-new-concepts-with-realtime-data/blob/master/images/Schermafdruk%202018-08-20%2020.53.30.png)

![](https://github.com/jajan20/project3-new-concepts-with-realtime-data/blob/master/images/Schermafdruk%202018-08-20%2020.53.36.png)

![](https://github.com/jajan20/project3-new-concepts-with-realtime-data/blob/master/images/Schermafdruk%202018-08-20%2020.53.58.png)

## Tabe of contents
- [Herkansing](#herkansing)
- [Redesign](#redesign)
- [Realtime Data](#realtime-data)
- [About de Ceuvel](#about-de-ceuvel)
- [Stakeholders](#stakeholders)
- [Design Challenge](#design-challenge)
- [Concept](#concept)
    - [How?](#how?)
    - [Idea](#idea)
    - [Gas](#gas)
    - [Electricity](#electricity)
    - [Herbs and Vegetables](#herbs-and-vegetables)
- [Realtime](#realtime)
- [High fidelity design](#high-fidelity-design)
- [Features](#features)

## Herkansing
Sadly I was sick for the last 2 days of the project, so I'll continue my work from then. After a meeting with one of the teachers, I've decided that my concept was too big for such a small amount of time.

## Redesign
In the redesign, I've decided I would only use the gas consumption. Customers can see how much gas is consumed while preparing their dishes.

## Realtime Data
Because the data isn't available in a good format for me to use. I've created some fake data in order to simulate the use of the concept.

Variables set to get data that looks like real gas consumption.

```js
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
```

Here I've added an event listener so that once the user clicks the button the timer starts. 

Randomly a min and max value of gas is determined and then within 1 minute (for example purpose) the dish is finished.
Every time the button is clicked a different output can be expected.

```js
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
```

## Features

- [x] Using NFC to find your dishes.
- [x] Checking if the dish is being prepared.
- [x] Real-time GAS consumption.

## About de Ceuvel
> De Ceuvel is a city playground for innovation and creativity. An experiment in which we try to make sustainability tangible, understandable and fun. We love to share our knowledge and hope that it will grow, spread and multiply. Something is always going on and everybody is welcome. **- deCeuvel website**

[Direct link to de Ceuvel](http://deceuvel.nl/en/)

## Stakeholders
This project had different stakeholders, for this project we could specify the stakeholder(s) we wanted to target. In my case the customers of the café "de Ceuvel".

## Design Challenge
How can we teach customers of café "de Ceuvel" about sustainability in a fun and interesting way?

## Concept
Before I could tackle the challenge I needed to figure out what was out there, with what information I could work with and how I could make this interesting for my stakeholder.

#### How?
The specifics are that de Ceuvel uses a lot of sustainable systems, one of them is their aquaponics system. In short, loads of fish in a tank create the water filled with ammonia which is filtered by bacteria group A (NITROSOMAS) and they create NITRITE. NITRITE is filtered by bacteria group B (nitrospira) who create NITRATE. This combined with the compost created in the vermicomposting process is food for the plants in the greenhouse. The water containing is filtered by the plants and the clean water is pumped back to the fish.

Café de Ceuvel uses the plants grown in their greenhouse as ingredients.
![](https://raw.githubusercontent.com/jajan20/project3-new-concepts-with-realtime-data/master/assets/circular-economics-ceuvel.png)

#### Idea
I think there is something here, right now all the data collected by de ceuvel is just a bunch of data. Very valuable data! but, for the customers not really relevant. How can I change this?

![](https://raw.githubusercontent.com/jajan20/project3-new-concepts-with-realtime-data/master/assets/order-ideas-browser.png)

This is where I think my concept is really strong. Let's say you're at the restaurant. You order something off the menu and then you have to wait till your food is ready. My idea is as follows:

You order your food, once you take out your smartphone and add your table number you can see all the orders that are being made. That's not all.

Specifics on an order being made:

#### Gas
- How much gas is needed to prepare your meal?
    - How does the ceuvel get their gas?
    - Can I contribute to their gas supply? (waste)
    - Interesting facts

#### Electricity
- How much electricity is used?
    - Where does the electricity come from?
    - Do they store power in batteries?

#### Herbs and Vegetables
- What are ingredients taken from the greenhouse are used in your order?
    - When did the season start?
    - How long did it take to grow?
    - What is in my order?

## Realtime
Since a lot of the data is processed real-time I can incorporate this into my concept. When the meal is being prepared I can show the consumption of gas and electricity on the screen. This gives a feeling of awareness, commitment. Customers can see exactly what is needed for their order.

![](https://raw.githubusercontent.com/jajan20/project3-new-concepts-with-realtime-data/master/assets/order-specific.png)

## High fidelity design
This is the way I want to go, adding pictures of the dishes and other visual stimuli. By keeping the data simple and easy to process the customer isn't overwhelmed by a lot of numbers and it's easier to compare the results.

![](https://raw.githubusercontent.com/jajan20/project3-new-concepts-with-realtime-data/master/assets/app-sketches.png)
