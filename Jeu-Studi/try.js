function WinnerPlayer1 () {
    if (totalP1 >= 100) {
        document.getElementById('winner').innerHTML = 'LE JOUEUR 1 L\'EMPORTE';
    } else {
        console.log('Waiting a winner');
    }
}

function WinnerPlayer2 () {
    if (totalP2 >= 100) {
        document.getElementById('winner').innerHTML = 'LE JOUEUR 2 L\'EMPORTE';
    } else {
        console.log('Waiting a winner');
    }
}




function changePlayer (notFalse) {
    let playerOne = document.getElementById('p-1');
    let playTwo = document.getElementById("p-2")
    diceClear();
    if (playerOne.className === "play"){
            if (notFalse) {
                totalP1 = totalP1 + player1;
                document.getElementById('player1').innerHTML = totalP1 ;
            }
            player1 = 0;
            document.getElementById('currentP1').innerHTML = player1;
    } else {
            if (notFalse) {
                totalP2 = totalP2 + player2;
                document.getElementById('player2').innerHTML = totalP2 ;
            }
            player2 = 0;
            document.getElementById('currentP2').innerHTML = player2;
    }
}  



function changePlayer (notFalse) {
    let playerOne = document.getElementById('p-1');
    let playTwo = document.getElementById("p-2")
    let winner = document.getElementById('winner').value;
    diceClear();
    if (playerOne.className === "play"){
        if (totalP1 < 100) {
            playerOne.classList.remove("play")
            playTwo.classList.add("play");
            if (notFalse) {
                totalP1 = totalP1 + player1;
                document.getElementById('player1').innerHTML = totalP1 ;
            }
            player1 = 0;
            document.getElementById('currentP1').innerHTML = player1;
            } else {
                document.getElementById('winner').innerHTML = 'JOUEUR 1 L\'EMPORTE!';
        }
    } else {
        if (totalP2 < 100) {
            playTwo.classList.remove("play")
            playerOne.classList.add("play");
            if (notFalse) {
                totalP2 = totalP2 + player2;
                document.getElementById('player2').innerHTML = totalP2 ;
            }
            player2 = 0;
            document.getElementById('currentP2').innerHTML = player2;
        } else {
            document.getElementById('winner').innerHTML = 'JOUEUR 2 L\'EMPORTE!';
        }
    }
}  