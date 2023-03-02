let trTable = document.querySelectorAll('tr')

console.log(trTable);

for(let i=0; i < trTable.length; i++){
        trTable[i].children[i].style.background = 'red';
}