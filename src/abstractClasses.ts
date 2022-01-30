// Реализовать абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства: прямоугольная область, описывающая примитив; метод - переместить примитив на заданное смещение.
// От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, у которого есть свойство площадь. 
// От него должны наследоваться класс MyCircle, у него есть свойства: центр окружности и ее радиус, а также должен наследоваться класс MyRectangle с свойствами: ширина и высота, левая верхняя граница, правая нижняя граница

abstract class MyGraphicsPrimitive2D {
  protected rectangularArea: number[] = [];
  protected abstract movePrimitive(offsetX: number, offsetY: number): void;
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  protected abstract square: number;
}

export class MyCircle extends MyAreaPrimitive2D {
  constructor(public circleCenter: {x: number, y: number}, public radius: number, public square: number) {
    super();
  }

  movePrimitive(offsetX: number, offsetY: number): void {
    this.circleCenter.x += offsetX;
    this.circleCenter.y += offsetY;
  }
}

export class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    public width: number, 
    public height: number, 
    public leftTopBorder: {x: number, y: number}, 
    public rightBottomBorder: {x: number, y: number}, 
    public square: number
  ) {
    super();
    this.rectangularArea = [width, height];
  }

  movePrimitive(offsetX: number, offsetY: number): void {
    this.leftTopBorder.x += offsetX;
    this.leftTopBorder.y += offsetY;
    this.rightBottomBorder.x += offsetX;
    this.rightBottomBorder.y += offsetY;
  }
}

const circle = new MyCircle({x:0, y:0}, 4, 50);
circle.movePrimitive(2, 4);

const rectangle = new MyRectangle(12, 6, {x:0, y:0}, {x:12, y:6}, 72);
rectangle.movePrimitive(5, 6);
