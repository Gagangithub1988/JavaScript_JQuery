function getRandomColor(){
  var letters='123456789ABCDEF'
  var color='#'
  for (var i=0;i<6;i++){
    var r=Math.floor(Math.random()*16)
    color=color+letters[r]
  }
  return color
}
function getRandomName(){
  var names=['ODISHA','MUMBAI']
  var r= Math.floor(Math.random()*2)
  return names[r]
}

var myh1=document.querySelector('h1')
function changeContentColor(){
  myh1.style.color=getRandomColor()
  myh1.textContent=getRandomName()
}

myh1.addEventListener('mouseover',changeContentColor)
myh1.addEventListener('mouseout',changeContentColor)
