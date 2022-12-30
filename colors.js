
var Body = {
  setBackgroundColor:function(color) {
    // 아래 코드는 jquery 쓰기 전
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  },
  setColor:function(color) {
    // 아래 코드는 jquery 쓰기 전
    // document.querySelector('body').style.color=color;
    $('body').css('color', color);
  }
}

var Links = {
  setColor:function(color){
    // 아래 코드는 jquery 쓰기 전
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue');
    self.value = 'day';

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('black');
    self.value = 'night';
  }
}
