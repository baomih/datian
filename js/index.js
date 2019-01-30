$(function () {
    var count = 0;
    var $ul = $('#section04 .banner_ul');
    var $li = $ul.find('li');
    $liwidth = $li.width();
    console.log($li.length);
    function move(){
        count ++;
        if(count == $li.length){
            count = 0;
            $ul.offset({left:0})
        }
        $ul.animate({
            left:-count*$li.width()
        }, 200, 'linear', function () {});
        $('#section04 .option li').eq(count).addClass('active').siblings().removeClass('active')
    }
    var timer = setInterval(move,1000);
    $('#section04 .banner').on('touchstart', function () {
      clearInterval(timer)
    });
    $('#section04 .banner').on('touchend', function () {
        timer = setInterval(move,1000)
    })
});