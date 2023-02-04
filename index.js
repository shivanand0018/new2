// console.log(document.domain)
// console.log(document.title)
// document.title='items'
// console.log(document.all)

// console.log(document.getElementById('header-title'))
// var header=document.getElementById('header-title')
// header.style.borderBottom='solid 3px #000'

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].textContent='Hello World'

// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even)')

// // for(i=0;i<odd.length;i++)
// // {
// //     odd[i].style.backgroundColor='#f4f4f4'
// //     even[i].style.backgroundColor='#ccc'
// // }

// items[2].style.backgroundColor='green'
// for(i=0;i<items.length;i++)
// {
// items[i].style.fontWeight='bold'
// }

// var items1=document.getElementsByClassName('list')
// console.log(items1)

// items1[0].textContent='List 5'

// var items2=document.getElementsByTagName('li')
// console.log(items2)

// items2[4].textContent='Item 5'

// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// console.log(secondItem);
// secondItem.style.color='green'

// var lastItem=document.querySelector('.list-group-item:nth-child(3)')
// console.log(lastItem);
// lastItem.style.display='none'

//Parent element
var item=document.querySelector('#items')
console.log(item)
item.parentElement.style.backgroundColor='blue'

//child
item.children[1].style.backgroundColor='black'

//first elemwnt child
item.firstElementChild.style.backgroundColor='grey'

//last elemwnt child
item.lastElementChild.style.backgroundColor='grey'

//create element
var newDiv=document.createElement('div')

var newDivText=document.createTextNode('hello')

newDiv.appendChild(newDivText)
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

container.insertBefore(newDiv,h1)

