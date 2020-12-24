const cnt = 20;
const scene = document.querySelector(".scene");
let i=0;

while(i<cnt){
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * 1 +0.1;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 1 + 'px';
    star.style.height = h + 'px';
    star.style.animationDuration = duration + 's';

    scene.appendChild(star);
    i++
}
// 화면 크기 변환 시 star 다시 불러오기 추가하기

const rocket = document.querySelector('.rocket');
mouseHovering(rocket, '', '#00d0ff', '4em');