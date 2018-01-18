import context from 'context';

import IShape from 'components/shape.interface';

class Rectangle implements IShape {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public width: number = 300,
    public height: number = 200,
    public color: string = 'yellow',
    public lineWidth: number = 5,
  ) {}

  public render = (): void => {
    const ctx: CanvasRenderingContext2D = context;

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.rect(
      this.x + this.lineWidth / 2,
      this.y + this.lineWidth / 2,
      this.width,
      this.height,
    );
    ctx.stroke();
    ctx.restore();
  }
}

export default Rectangle;
