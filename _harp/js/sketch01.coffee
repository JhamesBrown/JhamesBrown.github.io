window.addEventListener 'DOMContentLoaded', ->
    c = document.getElementById("sketch01Canvas")
    ctx = c.getContext("2d")
    ctx.fillStyle = "#FF0000"
    ctx.fillRect 0, 0, 50, 50
