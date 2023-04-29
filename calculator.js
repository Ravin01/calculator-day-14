// (function (){
// //assigning values
//    let screen = document.querySelector('.screen');
//    let buttons = document.querySelectorAll('.btn');
//    let equal = document.querySelector('.btn-equal');
//    let clear = document.querySelector('.btn-clear');
// //    working buttons
//    buttons.forEach(function(button){
//     button.addEventListener('click', function(event){
//         let value = event.target.dataset.num;
//         // screen.value = screen.value+value;
//         screen.value += value;
//     })
// });
// //  equal button
//     equal.addEventListener('click', function(e){
//         if(screen.value === ''){
//             screen.value = '';
//         }
//         else{
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     })   
// // clear button
//     clear.addEventListener("click",function(event){
//         screen.value = '';
//     })    
// })();

// my try
// alert("welcome");
(function(){
    let screen = document.querySelector('.screen');
    let button = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    //assign button
    button.forEach(function(button){
        button.addEventListener('click',function(event){
            let value = event.target.dataset.num;
            screen.value = screen.value + value;
        })
    });
    //equal
    equal.addEventListener('click', function(event){
        if(screen.value === ''){
            screen.value = '';
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
       
    })
    //clear
    clear.addEventListener('click', function(event){
        screen.value = '';
    })


})();