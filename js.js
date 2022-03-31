const canvas = document.getElementById("my_canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let range = document.getElementById("range");
let num = document.getElementById("num");

//     X and Y coordinates where the branch starts,  length of its branch and angle
function draw(startX, startY, len, angle, branchWidth) {
  ctx.lineWidth = branchWidth;

  ctx.beginPath();
  ctx.save();
  
  ctx.strokeStyle = "black";

  ctx.translate(startX, startY);
  ctx.rotate((angle * range.value) / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  ctx.shadowBlur = 18;
  const colArr = ["rgba(135, 207, 235, 0.8)", "gray", "black"];
  const rand = Math.floor(Math.random() * colArr.length);
  ctx.shadowOpacity = 0.2;
  ctx.shadowColor = colArr[rand];

  let param = len > num.value;
  // draw if len > px length
  //higher length for better performance!! 4px lookes better
  if (param) {
    //   draw(0, -len, len * 0.8, 74, branchWidth * 0.61);
    //   draw(0, -len, len * 0.8, 15, branchWidth * 0.78);
    draw(0, -len, len * 0.8, angle - 15, branchWidth * 0.8);
    draw(0, -len, len * 0.8, angle + 15, branchWidth * 0.8);
  }
  ctx.restore();
 
}

range.addEventListener("input", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw(600, 630, 120, 0, 12);
});
