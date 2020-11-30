
document.querySelector('.n1tugma').addEventListener('click',function(){
    let n1x=document.querySelector('.n1x');
    let n1javob=document.querySelector('.n1javob');
    n1javob.value=parseInt(n1x.value)*parseInt(n1x.value)*parseInt(n1x.value);
})

document.querySelector('.n2tugma').addEventListener('click',function(){
    let n2r1=document.querySelector('.n2r1');
    let n2r2=document.querySelector('.n2r2');
    let n2r3=document.querySelector('.n2r3');
    let n2javob1=document.querySelector('.n2javob1');
    let n2javob2=document.querySelector('.n2javob2');
    let n2javob3=document.querySelector('.n2javob3');
    n2javob1.value=parseInt(n2r1.value)*parseInt(n2r1.value)*3.141592;
    n2javob2.value=parseInt(n2r2.value)*parseInt(n2r2.value)*3.141592;
    n2javob3.value=parseInt(n2r3.value)*parseInt(n2r3.value)*3.141592;
})

document.querySelector('.n3tugma').addEventListener('click',function(){
    let n3s=document.querySelector('.n3s');
    let n3h=document.querySelector('.n3h');
    let n3javob=document.querySelector('.n3javob');
    n3javob.value=parseInt(n3s.value)*2/parseInt(n3h.value);
})

document.querySelector('.n4tugma').addEventListener('click',function(){
    let n4r=document.querySelector('.n4r');
    let n4javob=document.querySelector('.n4javob');
    n4javob.value=parseInt(n4r.value)*parseInt(n4r.value)*3.141592*4;
})

document.querySelector('.n5tugma').addEventListener('click',function(){
    let n5a=document.querySelector('.n5a');
    let n5b=document.querySelector('.n5b');
    let n5c=document.querySelector('.n5c');
    let n5javob=document.querySelector('.n5javob');
    n5javob.value=(parseInt(n5a.value)+parseInt(n5b.value)+parseInt(n5c.value))/2;
})

document.querySelector('.n7tugma').addEventListener('click',function(){
    let n7h=document.querySelector('.n7h');
    let n7r=document.querySelector('.n7r');
    let n7javob=document.querySelector('.n7javob');
    n7javob.value=parseInt(n7r.value)*parseInt(n7r.value)*parseInt(n7h.value)*0.33333333333*3.141592;
})

document.querySelector('.n8tugma').addEventListener('click',function(){
    let n8v=document.querySelector('.n8v');
    let n8s=document.querySelector('.n8s');
    let n8javob=document.querySelector('.n8javob');
    n8javob.value=parseInt(n8s.value)/parseInt(n8v.value);
})

document.querySelector('.n9tugma').addEventListener('click',function(){
    let n9h=document.querySelector('.n9h');
    let n9javob=document.querySelector('.n9javob');
    let x=parseInt(n9h.value)*2/9.8;
    n9javob.value=math.sqrt(parseInt(x.value));
})
 
document.querySelector('.n10tugma').addEventListener('click',function(){
    let n10x=document.querySelector('.n10x');
    let n10javob=document.querySelector('.n10javob');
    n10javob.value=parseInt(n10x.value)*365*24*3600/1000;
})

document.querySelector('.n11tugma').addEventListener('click',function(){
    let n11x=document.querySelector('.n11x');
    let n11javob=document.querySelector('.n11javob');
    let s=0;
    for(var i=1;i<=(parseInt(n11x.value));i++) {
        s=s+i;
    }
    n11javob.value=s;
})

document.querySelector('.n12tugma').addEventListener('click',function(){
    let n12m=document.querySelector('.n12m');
    let n12javob=document.querySelector('.n12javob');
    n12javob.value=parseInt(n12m.value)*9.8;
})
  
document.querySelector('.n13tugma').addEventListener('click',function(){
    let n13m=document.querySelector('.n13m');
    let n13a=document.querySelector('.n13a');
    let n13javob=document.querySelector('.n13javob');
    n13javob.value=parseInt(n13m.value)*parseInt(n13a.value);
})

document.querySelector('.n14tugma').addEventListener('click',function(){
    let n14u=document.querySelector('.n14u');
    let n14r=document.querySelector('.n14r');
    let n14javob=document.querySelector('.n14javob');
    n14javob.value=parseInt(n14u.value)/parseInt(n14r.value);
})

document.querySelector('.n15tugma').addEventListener('click',function(){
    let n15r1=document.querySelector('.n15r1');
    let n15r2=document.querySelector('.n15r2');
    let n15r3=document.querySelector('.n15r3');
    let n15javob=document.querySelector('.n15javob');
    n15javob.value=1/((1/parseInt(n15r1.value))+(1/parseInt(n15r2.value))+(1/parseInt(n15r3.value)));
})

document.querySelector('.n16tugma').addEventListener('click',function(){
    let n16x=document.querySelector('.n16x');
    let n16y=document.querySelector('.n16y');
    let n16javob=document.querySelector('.n16javob');
    let x16=parseInt(n16x.value);
    let y16=parseInt(n16y.value);
    let c=((x16+y16)/(y16*y16+math.abs((y16*y16+2)/(x16+(x16*x16*x16)/5))))+math.pow(math.pi,y16+2);

    console.log(c)
})


