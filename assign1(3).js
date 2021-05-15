class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    getArea(){
            return (this.height*this.width);
        }
}

Rectangle =new Rectangle(10,20);
Rectangle.width=15;
console.log("height="+Rectangle.height);
console.log("width="+Rectangle.width);
console.log(Rectangle.getArea());