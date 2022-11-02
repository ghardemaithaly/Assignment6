class Rectangle{
    constructor(w,h){
        this.w=w;
        this.h=h;
    }
}

// adds  and area method to rectangle class

Rectangle.prototype.area = function(){
    return this.w* this.h;
}

// create a square class
class Square extends Rectangle{
    constructor(w){
        
        super(w,w)
    }
}