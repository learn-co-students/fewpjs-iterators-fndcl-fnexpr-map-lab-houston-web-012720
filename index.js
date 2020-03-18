const tutorials = [
    'what does the this keyword mean?',
    'What is the Contutorialuctor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

const titleCased = () => tutorials.map((tutorial) => split(tutorial))

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function split(toutorial) {
    let words = toutorial.split(' ')
    let arrayofwords = words.map((word) => capitalize(word))
    return arrayofwords.join(' ')
}