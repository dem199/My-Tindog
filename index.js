
import dogs from './data.js';
import Dog from './Dog.js'


//Event listeners to the like and reject button
document.getElementById('like-btn').addEventListener('click', like)
document.getElementById('reject-btn').addEventListener('click', reject)

function like() {
    swipe('left')
    dog.hasBeenLiked = true
    nextDog()
}

function reject() {
    swipe('right')
    dog.hasBeenLiked = true
    nextDog()   
}

//Mapping over the dog array
const dogsArray = dogs.map(dog => new Dog(dog))
let dog = getNewDog() 

function getNewDog() {
    const nextDog = dogsArray.shift()
    return nextDog ? new Dog(nextDog) : {} 
}

function nextDog() {
    setTimeout(() => {
        if (dogsArray.length > 0) {
            dog = getNewDog()
            render()
        } else {
            end()
        }
    }, 1000)
}
//Creating Html content
function end() {
    document.getElementById('dog').innerHTML = 
        `<p class="end-message">You've seen all the dogs. Thanks</p>`
    document.querySelector('footer').innerHTML =  
        `<h4 class="end-message">Project by Opeyemi Olatunbosun<h4>`
}

function swipe(direction) {
    const reaction = document.getElementById('reaction')
    reaction.classList.add(`reaction-${direction}`)   
}

function render() {
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

render()