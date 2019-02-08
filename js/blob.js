svg = document.getElementById('blobs');
s = Snap(svg);

var path = s.select('#path-01');

path.attr({
  fill:"l()#3B4CFF-#FFFFFF" 
});

animatePath();

function animatePath(){
	path.animate({ d: "M317.35,346.12c130.4-104.75,109-71.68,109-223.4S290.63-3.4,176.25,11.56C64.46,26.19,10.58,117.38,1,196.48-17.36,347.08,232.05,414.64,317.35,346.12Z" }, 4000, mina.linear, animatePath2);
}

function animatePath2(){
	path.animate({ d: "M187.54,450.05c76.44-92,89.1-121.21,175.73-252,110.08-166.19,65.55-222-98.37-189-164.68,33.16-281.21,196.26-263,347C12.92,447.84,127.86,521.89,187.54,450.05Z" }, 5000, mina.linear, resetPath);
}

function resetPath(){
	path.animate({ d: "M205.69,320.3c75-5,216,85.71,216-66s-129.63-268-244-253C65.89,15.93,11.59,171.85,2,250.94-16.35,401.55,96.52,327.58,205.69,320.3Z" }, 8000, mina.linear, animatePath);
}