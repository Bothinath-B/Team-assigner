const bt=document.getElementById('btn');
let res=document.getElementById('resetButton');
        bt.addEventListener("click",function(){
                let t=document.getElementById('total').value;
                let m=document.getElementById('mpt').value;
                let para;
                let rad;
                let team=t/m;
                let array=[];
                let store=[];
                
                array[0]=Math.floor(Math.random( )*t)+1;
                let at=t-1;

                //Random and unique number in array
                while(at!=0)
                {
                    rad=Math.floor(Math.random()*t)+1;
                    if(array.includes(rad)==false)
                    {
                    array.push(rad);
                    } 
                    else
                    {
                        at=at+1;
                    }
                    at=at-1;
                }
            
                //Teams assign
                let count=0;
                let index=0;
                let times=0;
                let ct=0;
                for(let i=0;i<team;i++)
                {
                    ct=i+1;
                    para=document.createElement('p');
                    while(times<m)
                    {  
                        store[index++]=array[count++];
                        times+=1;
                    }
                    para.innerText="Team "+ct+": "+store;
                    document.getElementById('output').appendChild(para);
                    times=0;
                    index=0;
                    while(store==" ")
                    {
                        store.pop();
                    }
                }

                res.style.visibility="visible";
            })

            const resetButton = document.getElementById('resetButton');
            let total=document.getElementById('total').value;
            let mem=document.getElementById('mpt').value;
            resetButton.addEventListener('click', () => {
                document.getElementById('output').innerHTML = '';
                total.value='';
                mem.value='';
                res.style.visibility="hidden";
            });