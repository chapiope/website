
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

        const observer = new IntersectionObserver(showImage, options);

        elements.forEach(target => {
            observer.observe(target);
        });

    }

    const post = document.querySelectorAll('.anim');

    animObserver(post, -100);
}


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
