//your JS code here. If required.

let counter = document.getElementById('counter');
let btn = document.getElementById('incrementBtn');
let count = 0;

btn.addEventListener('click', function() {
	counter.textContent = count+1;
	count++;
    alert(count-1);
})
