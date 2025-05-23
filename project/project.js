
'use strict';
{
    

    function animObserver(elements, timing) {
        const options = {
            root: null,
            rootMargin: `0px 0px ${timing}px 0px`,
            threshold: [0.3]
        }

        function showImage(entries) { 
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                }
            });
        }

        const observerlight = new IntersectionObserver(showImage, options);

        elements.forEach(target => {
            observerlight.observe(target);
        });

    }

    const project = document.querySelectorAll('.anim');

    animObserver(project, -100);
}



const overlaycard = document.querySelector('.overlay-card');



const card1 = document.querySelector('.card-1');
const modalcard1 = document.querySelector('.modalcard-1');
card1.addEventListener('click', function(e){
    e.preventDefault();
    modalcard1.classList.add('active');
    overlaycard.classList.add('active');
});
overlaycard.addEventListener('click', function() {
    modalcard1.classList.remove('active');
    overlaycard.classList.remove('active');
});

const card2 = document.querySelector('.card-2');
const modalcard2 = document.querySelector('.modalcard-2');
card2.addEventListener('click', function(e){
    e.preventDefault();
    modalcard2.classList.add('active');
    overlaycard.classList.add('active');
});
overlaycard.addEventListener('click', function() {
    modalcard2.classList.remove('active');
    overlaycard.classList.remove('active');
});
const card3 = document.querySelector('.card-3');
const modalcard3 = document.querySelector('.modalcard-3');
card3.addEventListener('click', function(e){
    e.preventDefault();
    modalcard3.classList.add('active');
    overlaycard.classList.add('active');
});
overlaycard.addEventListener('click', function() {
    modalcard3.classList.remove('active');
    overlaycard.classList.remove('active');
});
const card4 = document.querySelector('.card-4');
const modalcard4 = document.querySelector('.modalcard-4');
card4.addEventListener('click', function(e){
    e.preventDefault();
    modalcard4.classList.add('active');
    overlaycard.classList.add('active');
});
overlaycard.addEventListener('click', function() {
    modalcard4.classList.remove('active');
    overlaycard.classList.remove('active');
});
const card5 = document.querySelector('.card-5');
const modalcard5 = document.querySelector('.modalcard-5');
card5.addEventListener('click', function(e){
    e.preventDefault();
    modalcard5.classList.add('active');
    overlaycard.classList.add('active');
});
overlaycard.addEventListener('click', function() {
    modalcard5.classList.remove('active');
    overlaycard.classList.remove('active');
});




const btn1 = document.querySelector('.btn-1');
const modal1 = document.querySelector('.modal-1');
const btn2 = document.querySelector('.btn-2');
const modal2 = document.querySelector('.modal-2');
const closeBtn1 = document.querySelector('.close-1');
const closeBtn2 = document.querySelector('.close-2');
const overlay = document.querySelector('.overlay');


// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn1.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  　// モーダルとオーバーレイにactiveクラスを付与する
  modal1.classList.add('active');
  overlay.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn1.addEventListener('click', function(){
    modal1.classList.remove('active');
    overlay.classList.remove('active');
});
  
  // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function() {
    modal1.classList.remove('active');
    overlay.classList.remove('active');
});

btn2.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    　// モーダルとオーバーレイにactiveクラスを付与する
    modal2.classList.add('active');
    overlay.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn2.addEventListener('click', function(){
  modal2.classList.remove('active');
  overlay.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function() {
  modal2.classList.remove('active');
  overlay.classList.remove('active');
});
