console.log(arrowTitle)
/* START CODE UNDER THIS LINE */



const imgs = ['html.png',
'html.png',
'html.png',
'html.png',
'html.png'];


let main = document.getElementById('main');

for (let i=0;i<imgs.length;i++){

    main.innerHTML='<img src ="'+ imgs[i]+'">';

}

