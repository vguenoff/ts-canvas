import context from 'context';

import IShape from './shape.interface';

class Circle implements IShape {
  constructor(
    public x: number = 50,
    public y: number = 50,
    public radius: number = 100,
    public color: string = 'red',
    public lineWidth: number = 5,
  ) {}

  public render = (): void => {
    const ctx: CanvasRenderingContext2D = context;

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.arc(
      this.x + this.lineWidth / 2,
      this.y + this.lineWidth / 2,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.stroke();
    ctx.restore();
  }
}

export default Circle;
