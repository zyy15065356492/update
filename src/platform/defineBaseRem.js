 export const defineBaseRem =function (designWidth,a) {
    // let tid=null
    console.log('aa')
    const doc = document,
    // const win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style")
    
   
    function refreshRem() {

        const width = docEl.getBoundingClientRect().width;
        // maxWidth = maxWidth || 540; //不需要判断最大宽度
        // width > maxWidth && (width = maxWidth);
        const rem = width * 100 / designWidth;
        console.log(rem)
document.getElementsByTagName('html')[0].style.fontSize=rem+'px'
        // remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
        //140.55636896046852
       console.log(document.getElementsByTagName('html')[0].style.fontSize)
        
        // document.getElementsByTagName('html')[0].style.fontSize='140.55636896046852px'
    }

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        let wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();

    // win.addEventListener("resize", function () {
    //     clearTimeout(tid); //防止执行两次
    //     tid = setTimeout(refreshRem, 300);
    // }, false);

    // win.addEventListener("pageshow", function (e) {
    //     if (e.persisted) { // 浏览器后退的时候重新计算
    //         clearTimeout(tid);
    //         tid = setTimeout(refreshRem, 300);
    //     }
    // }, false);

    if (doc.readyState === "complete") {
        doc.html.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function () {
            doc.html.style.fontSize = "16px";
        }, false);
    }
};