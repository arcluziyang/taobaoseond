// 搜索框悬停
var el_top = document.querySelector("#top"),
    el_search = document.querySelector("#search");
var height = el_search.offsetTop,
    flag = true;

document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= height) {
        if (flag) {
            flag = false;
            el_top.classList.add("active");
            el_search.classList.add("fixed");
        }
    } else {
        if (!flag) {
            flag = true;
            el_top.classList.remove("active");
            el_search.classList.remove("fixed");
        }
    }
}, false);


// 需要用到页面滚动事件scroll因为是页面滚动,所以事件源是document
// 滚动到某个位置,就是判断页面被卷去的上部值。
// 页面被卷去的头部:可以通过window.pageYOffset获得如果 是被卷去的左侧window.pagexoffset
// 注意，元素被卷去的头部是element.scrollTop , 如果是页面被卷去的头部则是window.pageOfset

//1.获取元素
var sliderbar = document.querySelector('.slider-bar');
var jubao = document.querySelector('.jubao');
// spirit_down.offsetTop 就是被卷去的大小 一定要写到外面
var jubaoTop = jubao.offsetTop;
//当我们侧边栏固定定位之后应该变化的数值
var sliderbarTop = sliderbar.offsetTop - jubaoTop; //55
// 获取youai 主体元素
var youai = document.querySelector('.youai');
var goback = document.querySelector('.goback');
var youaiTop = youai.offsetTop;
// 2. 页面滚动事件 scroll
document.addEventListener('scroll', function () {
    //页面被卷去的头部
    // console.log(window.pageYOffset);
    //3. 当我们页面被卷去的头部大于等于 1000 此时 侧边栏就要改为固定定位
    if (window.pageYOffset >= jubaoTop) {
        sliderbar.style.position = 'fixed';
        sliderbar.style.top = sliderbarTop + 'px';
    } else {
        sliderbar.style = '.slider-bar';
    }
    //当我们页面滚动 youai 盒子就显示gobck
    if (window.pageYOffset >= jubaoTop) {
        goback.style.display = 'block';
    } else {
        goback.style.display = 'none';
    }
});
goback.addEventListener('click', function () {
    // x和y不加单位，直接写数字
    //window.scroll(0, 0);
    animate1(window, 0);
});

// 动画函数
function animate1(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器里面
        // 把我们步长值改为整数
        // var step=Math.ceil((target-obj.offsetLeft)/10);
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            // 回调函数写在定时器结束里面
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式
        // obj.style.left = window.pageYOffset + step + 'px';
        window.scroll(0, window.pageYOffset + step);
    }, 15)
};


// 手机淘宝下载的二维码
// 1. 获取元素
var btn = document.querySelector('.close-btn');
var download = document.querySelector('.download');

//2 注册事件 程序处理
btn.onclick = function () {
    download.style.display = 'none';
};

// 主题市场导航栏 模块
    var navitems =document.querySelector(".navitems");
    var tianmm = document.querySelector(".tianmm");
    var ictaobao = document.querySelector(".ictaobao");
    var nav_uls =navitems.querySelectorAll("ul");
    for (var i = 0; i < nav_uls.length; i++) {

    console.log(nav_uls[i].children[0]);
    nav_uls[i].onmouseover = function () {
        this.children[0].style.display = 'block';
    }
    nav_uls[i].onmouseout = function () {
        this.children[0].style.display = 'none';
    }
    };
// 右导航栏的模块显示

// var clothing =document.querySelector('.clothing');
// var clothes  =document.querySelector('.clothes')

//  clothing.addEventListener('mouseover',function(){
//     clothes.style.display = 'block'
//  })
//  clothing.addEventListener('mouseout',function(){
//     clothes.style.display = 'none'
//  })

// 1. 获取元素
var clothing = document.querySelector('.clothing');
var lis = clothing.children; // 得到4个小li

for (var i = 0; i < lis.length; i++) {
    // console.log(lis[i].children[0]);
    lis[i].onmouseover = function () {
        this.children[0].style.display = 'block';
    }
    lis[i].onmouseout = function () {
        this.children[0].style.display = 'none';
    }
};