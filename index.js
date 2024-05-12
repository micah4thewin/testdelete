javascript:(function(){
    var element = document.getElementById('rcnt');
    if (element) {
        element.innerHTML = 'hello world';
    } else {
        console.log('Element with ID "rcnt" not found.');
    }
})();
