window.addEventListener 'DOMContentLoaded', ->
    c = document.getElementById("sketch01Canvas")
    ctx = c.getContext("2d")
    ctx.fillStyle = "#050500"
    #ctx.fillRect 0, 0, 50, 50
    console.log c.width, c.height
    for i in [0..10] by 1
        ctx.fillStyle = "#"+(10-i)+""+i+"0"
        ctx.fillRect (c.width/2) - (5*i)-10, 9*i, 20+(i*10), 20+(i*10)
        ctx.fillStyle = "#00"+i+"000"
        ctx.fillRect 0+(i*10), 0+(i*10), c.width - (i*20), c.height - (i*20)
