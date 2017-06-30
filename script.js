var arrayNew = document.getElementsByTagName('select');

var element = document.getElementById('content');

function myFunction(){
    
    var style = this.id;
    var value = this.value;
    
    element.style[style] = value;
    
}

for( var i = 0; i < arrayNew.length; i++ ){
    
    arrayNew[i].addEventListener( 'change', myFunction );
    
}