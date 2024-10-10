document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  const hoverItems = document.querySelectorAll('.itemA, .itemB, .itemC'); // クラス名で要素を取得

  // ハンバーガーメニューの表示・非表示切り替え
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });

  // ホバーイベントの追加
  hoverItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      item.classList.add('active'); // ホバー時にactiveクラスを追加
    });

    item.addEventListener('mouseout', function() {
      item.classList.remove('active'); // ホバーが外れたらactiveクラスを削除
    });
  });

  // メディアクエリの監視
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  handleMediaChange(mediaQuery);
  mediaQuery.addEventListener('change', handleMediaChange);

  function handleMediaChange(e) {
    if (!e.matches) {
      // 768pxを超えた場合、メニューを表示
      nav.classList.remove('active');

      // 768pxを超えた場合、全hover要素からactiveクラスを削除
      hoverItems.forEach(item => item.classList.remove('active'));
    }
  }
});
