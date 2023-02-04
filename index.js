console.log(document.domain)
console.log(document.title)
document.title='items'
console.log(document.all)

console.log(document.getElementById('header-title'))
var header=document.getElementById('header-title')
header.style.borderBottom='solid 3px #000'

var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[1].textContent='Hello World'

var odd=document.querySelectorAll('li:nth-child(odd)')
var even=document.querySelectorAll('li:nth-child(even)')

for(i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#f4f4f4'
    even[i].style.backgroundColor='#ccc'
}

items[2].style.backgroundColor='green'
for(i=0;i<items.length;i++)
{
items[i].style.fontWeight='bold'
}