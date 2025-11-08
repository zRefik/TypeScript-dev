abstract class Shape {
  abstract getArea(): number // abstract getArea metodu
}

class Circle extends Shape {

    private radius:number;
    constructor(radius:number){
        super()
        this.radius=radius
  }

  getArea(): number{
    return Math.PI * this.radius ** 2;
  }
  // constructor (radius: number)
  // getArea implementasyonu (Math.PI kullanın)
}

const circle = new Circle(10); // 10 yarıçaplı
console.log(circle.getArea());

// BEKLENEN EKRAN ÇIKTISI:
// 314.1592653589793
