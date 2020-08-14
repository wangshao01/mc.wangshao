export function rem() {
    document.documentElement.style.fontSize = window.innerWidth / 7.5 + 'px'; //1rem = 100px
    document.body.style.fontSize = '14px';// 在body上将字体还原大小，避免页面无样式字体超大
}