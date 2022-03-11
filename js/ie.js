const ver = navigator.userAgent;
const isIE = /trident/i.test(ver);
console.log(ver);
if (isIE) {
  alert(
    '익스플로러로 접곳하셨습니다. 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속 해 주세요.'
  );
}

// console.log(isLeft);
var isLeft;
$('p.left').click(function () {
  $('div.layout div.wrap').animate(
    {
      left: '0px',
    },
    1000,
    function () {
      $('div.layout div.wrap').css('left');
      console.log($('div.layout div.wrap').css('left'));
      isLeft = $('div.layout div.wrap').css('left');
      console.log(isLeft);
      // $('p.left').css('display', 'none');
      // $('p.right').css('display', 'block');
    }
  );
});
$('p.right').click(function () {
  $('div.layout div.wrap').animate(
    {
      left: '-940px',
    },
    1000,
    function () {
      // $('div.layout div.wrap').css('left', '-940px');
      isLeft = $('div.layout div.wrap').css('left');
      console.log($('div.layout div.wrap').css('left'));
      // $('p.right').css('display', 'none');
      // $('p.left').css('display', 'block');
    }
  );
});
if (isLeft == '0px') {
  console.log('10');
  $('p.left').css('display', 'none');
  $('p.right').css('display', 'block');
} else if (isLeft == '-940px') {
  console.log('3');
  $('p.left').css('display', 'block');
  $('p.right').css('display', 'none');
} else {
}
