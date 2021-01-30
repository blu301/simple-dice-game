function getDice() {
    return Math.floor(Math.random() * 6 + 1);
}

let img1 = getDice();
let img2 = getDice();

document.querySelector('.img1').setAttribute('src', 'images/dice' + img1 + '.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + img2 + '.png');

if(img1 > img2) {
    document.querySelector('h1').innerHTML = '🚩 Player 1 is the winner';
} else if(img2 > img1) {
    document.querySelector('h1').innerHTML = 'Player 2 is the winner 🚩';
} else {
    document.querySelector('h1').textContent = '🚩 It\'s a Draw 🚩';
}