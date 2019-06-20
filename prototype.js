var Object = function(o){
    var fun =function(){
    }
    fun.prototype=o;
    return new fun;

}
var object = {
     color:['red','blue','green'],
     name:'jack'

}
var instance = new Object(object);
var instance2 = new Object(object);
instance.color.push('black');
console.log(instance.color);
console.log(instance2.color);