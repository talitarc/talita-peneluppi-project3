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
        imgAnswer: 'url',
        id: [
            'cusackJR',
            'sutherlandJR',
            'brosnanJR',
            'timberlakeJR'
        ]
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
        imgAnswer: 'url',
        id: [
            'voxMD',
            'combsMD',
            'croweMD',
            'shakurMD'
        ]
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
        imgAnswer: 'url',
        id: [
            'sinatraCH',
            'joviCH',
            'simmonsCH',
            'kennedyCH'
        ]
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
        imgAnswer: 'url',
        id: [
            'carterBS',
            'dicaprioBS',
            'timberlakeBS',
            'wahlbergBS'
        ]
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
        imgAnswer: 'url',
        id: [
            'willisDM',
            'brosnanDM',
            'neesonDM',
            'cusackDM'
        ]
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
        imgAnswer: 'url',
        id: [
            'rowlandLD',
            'rihannaLC',
            'jolieLD',
            'diazLD'
        ]
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
        imgAnswer: 'url',
        id: [
            'sisqoRH',
            'beaoufRH',
            'aaliyahRH',
            'combsRH'
        ]
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
        imgAnswer: 'url',
        id: [
            'pittSP',
            'tarantinoSP',
            'washingtonSP',
            'downeySP'
        ]
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
        imgAnswer: 'url',
        id: [
            'ritchieJL',
            'hiltonJL',
            'williamsJL',
            'stefaniJL'
        ]
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
        imgAnswer: 'url',
        id: [
            'mayerLL',
            'ronsonLL',
            'duffLL',
            'hiltonLL'
        ]
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
        imgAnswer: 'url',
        id: [
            'cusackUT',
            'letoUT',
            'foxxUT',
            'affleckUT'
        ]
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
        imgAnswer: 'url',
        id: [
            'rihannaJG',
            'mooreJG',
            'campbellJG',
            'dunstJG'
        ]
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
        imgAnswer: 'url',
        id: [
            'rodriguezCD',
            'lipaCD',
            'rihannaCD',
            'malikCD'
        ]
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
        imgAnswer: 'url',
        id: [
            'banksWS',
            'rowlandWS',
            'barrymoreWS',
            'campbellWS'
        ]
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
        imgAnswer: 'url',
        id: [
            'pittJL',
            'jayzJL',
            'thorntonJL',
            'affleckJL'
        ]
    }
];

const fValentine = [];

// EXT: QUESTIONS APPEARS RANDOMLY AND WITHOUT REPETITION WHEN THE DOM IS LOAD

// MATH.RANDOM *11 TO GUARANTEE THAT WE WILL ALWAYS HAVE 5 ELEMENTS IN THE ARRAY
const randomNumb = Math.floor(Math.random() * 11);

// CREATE A NEW ARRAY WITH A RANDOM SELECTION OF ITEMS OF THE ARRAY QUESTIONS
let displayQuestions = questions.splice(randomNumb, 5);

// CREATE A VARIABLE TO STORE USER'S SCORE
fValentine.score = 0;

// CREATE A VARIABLE TO STORE QUESTIONS ANSWERED
fValentine.answerCount = 0;

fValentine.init = () => {
    fValentine.quizz(displayQuestions);
    fValentine.showScore();
};

// DISPLAY SELECTED QUESTIONS IN THE DOM

fValentine.quizz = (object) => {

    object.forEach((element) => {

        $('form.quizz').append(`
            <div class="question">
            <h2>${element.person}</h2>
        
            <div class="opt-box">
            <input type="radio" id="${element.id[0]}" name="${element.person}" value="${element.pair[0]}">
            <label for="${element.id[0]}">${element.pair[0]}</label></div>

            <div class="opt-box">
            <input type="radio" id="${element.id[1]}" name="${element.person}" value="${element.pair[1]}">
            <label for="${element.id[1]}">${element.pair[1]}</label></div>

            <div class="opt-box">
            <input type="radio" id="${element.id[2]}" name="${element.person}" value="${element.pair[2]}">
            <label for="${element.id[2]}">${element.pair[2]}</label></div>

            <div class="opt-box">
            <input type="radio" id="${element.id[3]}" name="${element.person}" value="${element.pair[3]}">
            <label for="${element.id[3]}">${element.pair[3]}</label>
            </div>
        
            <div class="answer"><h2>Answer: ${element.answer}</h2></div>
            </div>
        `);
        $('div.answer').addClass("display-answer"); 
    });

    fValentine.identifyClick();
};

fValentine.identifyClick = () => {
    $('.quizz').on('click', 'input', function(event){
        
// IDENTIFY THE USER ANSWER AND KEEP THE USERS ANSWER
        let userAnswer = this.value;

//IDENTIFY THE PARENT TO DISPLAY THE ANSWER
        let parent = ($(this).parent()).parent();
        
// SHOW THE ANSWER TO THE USER
        const checkAnswer = $(parent).find('.answer');
        checkAnswer.removeClass('display-answer');
//
        let rightAnswer = checkAnswer.text();

// UPDATE THE ANSWER COUNTING TO DEFINE WHICH SCORE MESSAGE WILL BE SHOWN BY SHOWSCORE
        if ('input[type="radio"]:checked') {
            fValentine.answerCount = fValentine.answerCount + 1;
        }

// IF USER IS RIGHT ADD +1 TO THE SCORE VARIABLE
        if (rightAnswer == `Answer: ${userAnswer}`) {
            fValentine.score = fValentine.score +1;
        }
    });
};

// SHOW A MESSAGE WITH THE SCORE WHEN THE BUTTON IS CLICKED
fValentine.showScore = () => {
    $('input[type=submit]').on('click', function(event){
        
        if (fValentine.answerCount == 5) {
            $('.score').html(`You got ${fValentine.score} answers right!`);
        } else if (0 < fValentine.answerCount < 5) {
            $('.score').html(`You haven\'t answer all our questions yet!, but your current score is ${fValentine.score}.`);
        };
    });
};

// INIT FVALENTINE WHEN THE PAGE IS READY
$(document).ready(function () {
    fValentine.init();
});