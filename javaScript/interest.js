
 document.getElementById('card1').style.display = 'none';
   document.querySelector('h1').style.display = ''
document.getElementById('btn').addEventListener('click',()=>{

  
    const amt =Number(document.getElementById('amt').value);
const rate =document.getElementById('rate').value;
const time = document.getElementById('time').value;
const si = (amt*rate*time)/100;
  document.querySelector('h1').style.display = 'none'
    document.getElementById('card').style.display = 'none';
    document.getElementById('card1').style.display = 'flex';

    if(amt && rate && time)
    {
        
     document.getElementById('para').innerText = `initial.AMT :${amt} \n Profit : ${si} \n total returns :  ${amt+si} `;

    document.getElementById('para').style.color = 'white'

    }
    else
    {
        document.getElementById('para').innerHTML = 'Plz enter the values';
        document.getElementById('para').style.color = 'red'
        
        
        
    }
   

})
document.getElementById('btn1').addEventListener('click',()=>
{
    document.getElementById('card').style.display = 'flex'
     document.getElementById('card1').style.display = 'none';
      document.querySelector('h1').style.display = ''
})