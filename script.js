// HERE GOES THE QUESTIONS ARRAY

const questions = [
    {
        person: 'Julia Roberts',
        pair: [
            'John Cusack',
            'Kiefer Sutherland',
            'Pierce Brosnan',
            'Justin Timberlake'
        ],
        answer: 'Kiefer Sutherland',
        imgAnswer: 'url'
    },

    {
        person: 'Madonna',
        pair: [
            'Bono Vox',
            'Sean Combs aka P. Diddy',
            'Russell Crowe',
            'Tupac Shakur'
        ],
        answer: 'Tupac Shakur',
        imgAnswer: 'url'
    },
    {
        person: 'Cher',
        pair: [
            'Frank Sinatra',
            'Jon Bon Jovi',
            'Gene Simmons',
            'John F Kennedy Jr'
        ],
        answer: 'Gene Simmons',
        imgAnswer: 'url'
    },
    {
        person: 'Britney Spears',
        pair: [
            'Aaron Carter',
            'Leonardo DiCaprio',
            'Justin Timberlake',
            'Mark Wahlberg'
        ],
        answer: 'Justin Timberlake',
        imgAnswer: 'url'
    },
    {
        person: 'Demi Moore',
        pair: [
            'Bruce Willis',
            'Pierce Brosnan',
            'Liam Neeson',
            'John Cusack'
        ],
        answer: 'Bruce Willis',
        imgAnswer: 'url'
    },
    {
        person: 'Leonardo DiCaprio',
        pair: [
            'Kelly Rowland',
            'Rihanna',
            'Angelina Jolie',
            'Cameron Diaz'
        ],
        answer: 'Rihanna',
        imgAnswer: 'url'
    },
    {
        person: 'Rihanna',
        pair: [
            'Sisqo',
            'Shia LaBeouf',
            'Aaliyah',
            'Sean Combs aka P. Diddy'
        ],
        answer: 'Shia LaBeouf',
        imgAnswer: 'url'
    },
    {
        person: 'Sarah Jessica Parker',
        pair: [
            'Brad Pitt',
            'Quentin Tarantino',
            'Denzel Washignton',
            'Robert Downey Jr'
        ],
        answer: 'Robert Downey Jr',
        imgAnswer: 'url'
    },
    {
        person: 'Jared Leto',
        pair: [
            'Nicole Ritchie',
            'Paris Hilton',
            'Robbie Williams',
            'Gwen Stefani'
        ],
        answer: 'Paris Hilton',
        imgAnswer: 'url'
    },
    {
        person: 'Linday Lohan',
        pair: [
            'John Mayer',
            'Samantha Ronson',
            'Hillary Duff',
            'Paris Hilton'
        ],
        answer: 'Samantha Ronson',
        imgAnswer: 'url'
    },
    {
        person: 'Uma Thurman',
        pair: [
            'John Cusack',
            'Jared Leto',
            'Jamie Foxx',
            'Ben Affleck'
        ],
        answer: 'John Cusack',
        imgAnswer: 'url'
    },
    {
        person: 'Jake Gyllenhaal',
        pair: [
            'Rihanna',
            'Mandy Moore',
            'Naomi Campbell',
            'Kirsten Dunst'
        ],
        answer: 'Kirsten Dunst',
        imgAnswer: 'url'
    },
    {
        person: 'Cara Delevingne',
        pair: [
            'Michelle Rodriguez',
            'Dua Lipa',
            'Rihanna',
            'Zayn Malik'
        ],
        answer: 'Michelle Rodriguez',
        imgAnswer: 'url'
    },
    {
        person: 'Will Smith',
        pair: [
            'Tyra Banks',
            'Kelly Rowland',
            'Drew Barrymore',
            'Naomi Campbell'
        ],
        answer: 'Tyra Banks',
        imgAnswer: 'url'
    },
    {
        person: 'Jennifer Lopez',
        pair: [
            'Brad Pitt',
            'Jay-Z',
            'Billy Bob Thornton',
            'Ben Affleck'
        ],
        answer: 'Ben Affleck',
        imgAnswer: 'url'
    }
];

// EXT: QUESTIONS APPEARS RANDOMLY AND WITHOUT REPETITION WHEN THE DOM IS LOAD


// MATH.RANDOM *11 TO GUARANTEE THAT WE WILL ALWAYS HAVA 5 ELEMENTS IN THE ARRAY
const randomNumb = Math.floor(Math.random() * 11);

// CREATE A NEW ARRAY WITH A RANDOM SELECTION OF ITEMS OF THE ARRAY QUESTIONS
let displayQuestions = questions.splice(randomNumb, 5);


// DISPLAY SELECTED QUESTIONS ON THE DOM
for (let i = 0; i < 6; i++) {
    let index = i;

    $(`div.question${index}`).html(`
        <h2>${displayQuestions[index].person}</h2><div class="option-box">
        <div><input type="radio" id="${displayQuestions[index].pair[0]}" name="${displayQuestions[index].pair}" value="${displayQuestions[index].pair[0]}">
        <label for="${displayQuestions[index].pair[0]}">${displayQuestions[index].pair[0]}</label></div>

        <input type="radio" id="${displayQuestions[index].pair[1]}" name="${displayQuestions[index].pair}" value="${displayQuestions[index].pair[1]}">
        <label for="${displayQuestions[index].pair[1]}">${displayQuestions[index].pair[1]}</label>
        
        <input type="radio" id="${displayQuestions[index].pair[2]}" name="${displayQuestions[index].pair}" value="${displayQuestions[index].pair[2]}">
        <label for="${displayQuestions[index].pair[2]}">${displayQuestions[index].pair[2]}</label>

        <input type="radio" id="${displayQuestions[index].pair[3]}" name="${displayQuestions[index].pair}" value="${displayQuestions[index].pair[3]}">
        <label for="${displayQuestions[index].pair[3]}">${displayQuestions[index].pair[3]}</label></div>`);
}

// EVENT PREVENT DEFAULT

// LISTEN THE USER CLICK

// IDENTIFY THE USER ANSWER

// KEEP THE USERS ANSWER

// CREATE A VARIABLE TO STORE USER'S SCORE

// IF USER IS RIGHT ADD +1 TO THE SCORE VARIABLE

// SHOW THE RIGHT ANSWER TO THE USER  AND TELL TO THE USER IF IT'S RIGHT OR WRONG

// WHEN THE USER CLICKS IN THE NEXT BUTTON, IT LEADS TO NEXT QUESTION

// LISTEN THE USER CLICKING THE NEXT BUTTON

// GOES TO THE NEXT QUESTION

// AT QUESTION 5, THEY CANNOT CHOOSE NEXT QUESTION, BUT ONLY "SHOW THE SCORE"

// SHOW TO THE USER THE FINAL SCORE
