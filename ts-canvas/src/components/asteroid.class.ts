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
    public lineWidth: number = 1,
    public size: number = Math.ceil(Math.random() * 10) + 4,
    public rotation: number = 0,
    public rotationSpeed: number = Math.random() * 0.06 - 0.03,
    public pointList: Point[] = new Array<Point>(),
  ) {

    const xrand = () => Math.round(Math.random() * this.size);
    const yrand = () => Math.round(Math.random() * this.size);
    const getRandomInt = (min: number, max: number): number =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    while(this.pointList.length < 10) {
      this.pointList.push(
        new Point(
          getRandomInt(1, 2) * this.size,
          getRandomInt(1, 2) * this.size,
        ),
      );
    }
  }

  public render = () => {
    const ctx: CanvasRenderingContext2D = context;

    this.x += this.velocityX;
    this.y += this.velocityY;

    const outsideTopLeft = -this.size * 4; // multiple size to be fully outside
    const outsideRight = 1280 + this.size * 4;
    const outsideBottom = 720 + this.size * 4;

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

    this.pointList.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}

export default Asteroid;
