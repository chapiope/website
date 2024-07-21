//コピペした

// ① ターゲット要素を取得
const post = document.getElementById("post");

// ③ オプション設定 ※デフォルトで良いなら記述しなくでも大丈夫です！
const options = {
  threshold: 0.5,
};

// ④ 要素が表示されたら実行
function showImage(entries) {  
  if (entries[0].isIntersecting) {
    post.style.opacity = 1;
  }
}

// ② IntersectionObserverを呼び出す
const observer = new IntersectionObserver(showImage, options);

// ⑤ 実行
observer.observe(post);

//コピペした最後
