function timeCount(time){
    const hour = parseInt(time/3600)
    let remainingSecond = time%3600
    const minit = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond%60
    return ` ${hour} hour ${minit} minit ${remainingSecond} second ago`
}
console.log(timeCount(1600078))