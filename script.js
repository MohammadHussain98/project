
const imgs = ['html.png',
'js.png',
'css.png',
'html.png',
'js.png',
'css.png'];


let main = document.getElementById('main');
let allDivs =document.getElementsByTagName('div');

    function draw(){
for (let i=0; i<imgs.length;i++){

    main.innerHTML += '<div><img src ='+ imgs[i]+'></div>' ;
  }
}
draw();
draw();




let one = true;
let  arr = [];

for(let i=0; i<allDivs.length; i++){

    allDivs[i].addEventListener('click',function(){
        if(one){
     this.firstChild.style.opacity = 1;

     if(arr.length ==0){
         arr[0]= this;
       

     }else if(arr.length ==1){
         arr[1] =this;
        
     }

     if(arr.length == 2){

         one = false ;
         
         setTimeout(checkImg,1000);


          
     }

   }else
        return;
    })



    
    function checkImg(){
        console.log("ok")
    if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')){
        alert('ok')
    }else{
        arr[0].firstChild.style.opacity = 0 ;
        arr[1].firstChild.style.opacity = 0 ;

    }
    arr = [];
    one = true;

   }
}



