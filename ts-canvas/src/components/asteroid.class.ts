import Point from 'components/point.class';
import IShape from 'components/shape.interface';
import context from 'context';

class Asteroid implements IShape {
  constructor(
    public x: number = Math.round(Math.random() * 1280),
    public y: number = Math.round(Math.random() * 720),
    public velocityX: number = Math.round(Math.random() * 4 - 2),
    public velocityY: number = Math.round(Math.random() * 4 - 2),
    public color: string = 'white',
    public lineWidth: number = 2,
    public size: number = Math.ceil(Math.random() * 10) + 4,
    public rotation: number = 0,
    public rotationSpeed: number = Math.random() * 0.06 - 0.03,
    public pointList: Point[] = new Array<Point>(),
  ) {
    let xrand: number = 0;
    let yrand: number = 0;

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand, yrand + 3 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand - 1 * this.size, yrand + 2 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand - 2 * this.size, yrand + 2 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand - 3 * this.size, yrand + this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand - 4 * this.size, yrand));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand - 1 * this.size, yrand - 3 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand + 2 * this.size, yrand - 4 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand + 2 * this.size, yrand - 3 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand + 4 * this.size, yrand - 2 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand + 4 * this.size, yrand + this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);

    this.pointList.push(new Point(xrand + 3 * this.size, yrand + 2 * this.size));

    xrand = Math.round(Math.random() * this.size - this.size / 2);
    yrand = Math.round(Math.random() * this.size - this.size / 2);
  }

  public render = () => {
    const ctx: CanvasRenderingContext2D = context;

    this.x += this.velocityX;
    this.y += this.velocityY;

    const outsideTopLeft = -this.size * 2; // why *2
    const outsideRight = 1280 + this.size * 2; // why *2
    const outsideBottom = 720 + this.size * 2; // why *2

    this.x = (this.x < outsideTopLeft) ? (outsideRight) : this.x;
    this.x = (this.x > outsideRight) ? (outsideTopLeft) : this.x;
    this.y = (this.y < outsideTopLeft) ? (outsideBottom) : this.y;
    this.y = (this.y > outsideBottom) ? (outsideTopLeft) : this.y;

    this.rotation += this.rotationSpeed;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;

    ctx.moveTo(
      this.pointList[this.pointList.length - 1].x,
      this.pointList[this.pointList.length - 1].y,
    );
    // for (var i: number = 0; i < this.pointList.length; i++) {
    //   ctx.lineTo(this.pointList[i].x, this.pointList[i].y);
    // }
    this.pointList.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}

export default Asteroid;
