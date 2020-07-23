var bt = document.querySelectorAll('.filterLink')[0];
var turbVal = { val: 0.000001 };
var turb = document.querySelectorAll('#filt feTurbulence')[0];
var btTl = new TimelineLite({ paused: true, onUpdate: function() {
  turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
} });

btTl.to(turbVal, 0.2, { val: 0.005 });
btTl.to(turbVal, 0.2, { val: 0.000001 });

bt.addEventListener('mouseover', function() {
  btTl.restart();
  });