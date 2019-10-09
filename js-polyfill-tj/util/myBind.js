const myBind=()=>{
    var func = function(){
        return this.a + Array.prototype.slice.call(arguments);
    }
    
    func.myBind(1,2,3)()
}
module.exports=myBind