import './bootstrap';


let testSection = document.getElementById('test');
let text1 = document.getElementById('text_1');
let text2 = document.getElementById('text_2');

testSection.insertBefore(text1, text2);

console.log('new-test');
