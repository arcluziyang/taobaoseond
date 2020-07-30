//动画函数
function animate(obj, target,callback) {
    // console.log(callback); callback=function() {} 调用的时候 callback();
    
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器里面
        // 把我们步长值改为整数
        // var step=Math.ceil((target-obj.offsetLeft)/10);
        var step = (target - obj.offsetLeft) / 10;
        step =step> 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写在定时器结束里面
            // if(callback){
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
        // window.scroll(0,window.pageYOffset+step);
    }, 15)
}