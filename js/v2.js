var block = document.getElementsByClassName("box")[0];
block.addEventListener('click', function(){
  var self = this, startTime = Date.now(),
      r = 100, T = 2000; 

  requestAnimationFrame(function step(){
    var distance  = 200;
    var p = Math.min(1.0, (Date.now() - startTime) / T);
    var temp = Math.pow(p,4)
    var result = distance * temp
    console.log("temp",temp);
    self.style.transform = 'translate(' 
       +  result + 'px)';
    if(p < 1.0) requestAnimationFrame(step);
  });
});