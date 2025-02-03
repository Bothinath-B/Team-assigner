const bt=document.getElementById('btn');
let res=document.getElementById('resetButton');
let download=document.getElementById('downloadButton');
let temp=[];
        bt.addEventListener("click",function(){
                let total=document.getElementById('total').value;
                let membersperteam=document.getElementById('mpt').value;
                let para;
                let rad;
                let team=total/membersperteam;
                let array=[];
                let store=[];
                
                array[0]=Math.floor(Math.random()*total)+1;
                let at=total-1;

                //Random and unique number in array
                while(at!=0)
                {
                    rad=Math.floor(Math.random()*total)+1;
                    if(!array.includes(rad))
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
                let index2=0;
                let times=0;
                let ct=0;
                
                for(let i=0;i<team;i++)
                {
                    ct=i+1;
                    para=document.createElement('p');
                    while(times<membersperteam)
                    {  
                        store[index++]=array[count++];
                        temp[index2++]=store[index-1];
                        times+=1;
                    }
                    para.innerText="Team "+ct+": "+store;
                    document.getElementById('output').appendChild(para);
                    times=0;
                    index=0;
                    store=[];
                }
                res.style.visibility="visible";
                download.style.visibility="visible";

            })

            download.onclick = function () {
                let total=parseInt(document.getElementById('total').value);
                let membersperteam=parseInt(document.getElementById('mpt').value);
                let row="";
                let csvContent = "data:text/csv;charset=utf-8,";
                
                for(let i=0;i<temp.length;i+=membersperteam){
                    row=temp.slice(i,i+membersperteam).join('-');
                    csvContent+=`${row}\n`;   
                    row="";
                }
        
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "team_formation.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }


            const resetButton = document.getElementById('resetButton');
            let total=document.getElementById('total').value;
            let mem=document.getElementById('mpt').value;
            resetButton.addEventListener('click', () => {
                document.getElementById('output').innerHTML = '';
                    let t=document.getElementById('total').value=null;
                let m=document.getElementById('mpt').value=null;
                total.value='';
                mem.value='';
                res.style.visibility="hidden";
                download.style.visibility="hidden";
            });
