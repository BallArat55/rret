ax2 + bx + c = 0, where
a, b and c are real numbers and
a ≠ 0
const xArray = [50,6,10];
const yArray = [7,9,9,14,1];
const yArray2 = [7,8,9,0,149];

// Plot Scatter
ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i+) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 2, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}
