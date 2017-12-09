import Asteroid from 'components/asteroid.class';
import Circle from 'components/circle.class';
import Rectangle from 'components/rectangle.class';
import IShape from 'components/shape.interface';
import context from 'context';

// instances
const c1: Circle = new Circle(500, 400, 50);
const c2: Circle = new Circle(500, 350, 150, 'blue', 5);
const r1: Rectangle = new Rectangle(500, 400, 1000, 1000);
const shapeArray: IShape[] = new Array<IShape>();

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  const ctx: CanvasRenderingContext2D = context;

  // clear the canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0 , 1280, 720);
  // // animation
  // c1.x = (c1.x++ >= (1280 + c1.radius)) ? -c1.radius : c1.x;
  // c2.y = (c2.y++ >= (720 + c2.radius)) ? -c2.radius : c2.y;
  // // render
  // r1.render();
  // c1.render();
  // c2.render();

  // var shape: iShape;
  // for (var i: number = 0; i < shape_array.length; i++) {
  //    shape = shape_array[i];
  //    shape.draw();
  // }

  shapeArray.forEach((shape) => shape.render());

};

window.onload = () => {
  shapeArray.push(new Asteroid());
  shapeArray.push(new Asteroid());
  shapeArray.push(new Asteroid());
  shapeArray.push(new Asteroid());
  shapeArray.push(new Asteroid());

  gameLoop();
};
