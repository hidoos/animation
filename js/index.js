(function() {
    "use strict";
    var box = document.getElementsByClassName("box")[0];
    box.addEventListener("click", function(event) {
        var self = this, startTime = Date.now(),
            distance = 200, T = 2000;
        requestAnimationFrame(function step() {
            var p = Math.min(1.0, (Date.now() - startTime) / T);
            self.style.transform = 'translateX(' + (distance * p) + 'px)';
            if (p < 1.0) requestAnimationFrame(step);
        });
    }, false);
})();