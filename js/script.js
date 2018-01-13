const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const codewords = [
    {
        word: "Great Gatsby",
        category: "Movie",
        description: "A drama movie from 2013 directed by Baz Luhrmann based on the famous novel by Francis Scott Fitzgerald"
    },
    {
        word: "La La Land",
        category: "Movie",
        description: "Musical directed by Damien Chazelle from 2016"
    },
    {
        word: "Mahatma Gandhi",
        category: "Famous person",
        description: "Indian activist who was the leader of the Indian independence movement against British rule"
    },
    {
        word: "Diun",
        category: "Book",
        description: "1965 science fiction novel by American author Frank Herbert"
    }
];
let word = "";
let word2 = "";
let desc = "";
let mistakes = 0;
function drawWord() {
    var num = Math.floor(Math.random() * codewords.length);
    document.getElementById('category').innerHTML = codewords[num].category.toUpperCase();
    word = codewords[num].word.toUpperCase();
    desc = codewords[num].description.toUpperCase();
    for (i = 0; i < word.length; i++)
    {
        if (word.charAt(i) === " ")
            word2 = word2 + " ";
        else
            word2 += "_";
    }
}

function drawToGuess() {
    document.getElementById('toguess').innerHTML = word2;
}

window.onload = function () {
    let word = "";
    let word2 = "";
    let desc = "";
    let mistakes = 0;
    drawWord();
    drawToGuess();

    document.getElementById('let0').onclick = function () {
        guess(0);
    };
    document.getElementById('let1').onclick = function () {
        guess(1);
    };
    document.getElementById('let2').onclick = function () {
        guess(2);
    };
    document.getElementById('let3').onclick = function () {
        guess(3);
    };
    document.getElementById('let4').onclick = function () {
        guess(4);
    };
    document.getElementById('let5').onclick = function () {
        guess(5);
    };
    document.getElementById('let6').onclick = function () {
        guess(6);
    };
    document.getElementById('let7').onclick = function () {
        guess(7);
    };
    document.getElementById('let8').onclick = function () {
        guess(8);
    };
    document.getElementById('let9').onclick = function () {
        guess(9);
    };
    document.getElementById('let10').onclick = function () {
        guess(10);
    };
    document.getElementById('let11').onclick = function () {
        guess(11);
    };
    document.getElementById('let12').onclick = function () {
        guess(12);
    };
    document.getElementById('let13').onclick = function () {
        guess(13);
    };
    document.getElementById('let14').onclick = function () {
        guess(14);
    };
    document.getElementById('let15').onclick = function () {
        guess(15);
    };
    document.getElementById('let16').onclick = function () {
        guess(16);
    };
    document.getElementById('let17').onclick = function () {
        guess(17);
    };
    document.getElementById('let18').onclick = function () {
        guess(18);
    };
    document.getElementById('let19').onclick = function () {
        guess(19);
    };
    document.getElementById('let20').onclick = function () {
        guess(20);
    };
    document.getElementById('let21').onclick = function () {
        guess(21);
    };
    document.getElementById('let22').onclick = function () {
        guess(22);
    };
    document.getElementById('let23').onclick = function () {
        guess(23);
    };
    document.getElementById('let24').onclick = function () {
        guess(24);
    };
    document.getElementById('let25').onclick = function () {
        guess(25);
    };


};




String.prototype.putLetter = function (place, letter) {
    if (place > this.length - 1)
        return this.toString();
    else
        return this.substr(0, place) + letter + this.substr(place + 1);
};
function guess(x) {

    let ok = false;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === letters[x]) {
            word2 = word2.putLetter(i, letters[x]);
            drawToGuess();
            ok = true;
        }
    }

    if (ok) {
        let guessed = "let" + x;
        document.getElementById(guessed).style.background = "#003300";
        document.getElementById(guessed).style.color = "#00C000";
        document.getElementById(guessed).style.border = "3px solid #00C000";
        document.getElementById(guessed).style.cursor = "default";
    } else {
        const guessed = "let" + x;
        document.getElementById(guessed).style.background = "#330000";
        document.getElementById(guessed).style.color = "#C00000";
        document.getElementById(guessed).style.border = "3px solid #C00000";
        document.getElementById(guessed).style.cursor = "default";
        document.getElementById(guessed).setAttribute("onclick", ";");
        mistakes++;
        document.getElementById('image').src = "media/img" + mistakes + ".jpg";
    }

    if (word === word2) {
        document.getElementById('image').src = "media/img10.jpg";
        document.getElementById('allletters').innerHTML = '<h1>CONGRATULATIONS</h1><p>The word was:<br>' + word + '</p><p>Description:<br> ' + desc + '</p> <button id="again">PLAY AGAIN</button>';
        document.getElementById('again').onclick = function () {
            location.reload();
        };
    } else if (mistakes === 9) {
        document.getElementById('allletters').innerHTML = '<h1>BAD LUCK</h1> <p>The word was:<br> ' + word + '</p><p>Description: <br>' + desc + '</p> <button id="again">PLAY AGAIN</button>';

        word1 = word;
        drawToGuess();

        document.getElementById('again').onclick = function () {
            location.reload();
        };
    }
}





