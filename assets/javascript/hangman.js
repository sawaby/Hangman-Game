<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="300" height="200" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//vertical line
ctx.beginPath();
ctx.moveTo(20, 30);
ctx.lineTo(20, 180);
ctx.stroke();

//bottom line
ctx.beginPath();
ctx.moveTo(100, 180);
ctx.lineTo(20, 180);
ctx.stroke();

//up line
ctx.beginPath();
ctx.moveTo(20, 30);
ctx.lineTo(100, 30);
ctx.stroke();


//string line
ctx.beginPath();
ctx.moveTo(100, 30);
ctx.lineTo(100, 50);
ctx.stroke();

//body line
ctx.beginPath();
ctx.moveTo(100, 90);
ctx.lineTo(100, 130);
ctx.stroke();


//left hand line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(70, 120);
ctx.stroke();

//rigth hand line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(130, 120);
ctx.stroke();

//left leg line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(70, 120);
ctx.stroke();

//rigth leg line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(130, 120);
ctx.stroke();

//head
ctx.beginPath();
ctx.arc(100, 70, 20, 0, 2 * Math.PI);
ctx.stroke();

</script> 

</body>
</html>