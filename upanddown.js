let value=0;
function increment(){
    value++
    up.textContent=value;
    
}
function decrement(){
    value--
    up.textContent=value;

}
function reset(){
    value=0
    up.textContent=value;

}
const up=document.getElementById('output')
