import Asteroid from 'components/asteroid.class';
import Circle from 'components/circle.class';
import Poligon from 'components/poligon.class';
import Rectangle from 'components/rectangle.class';
import IShape from 'components/shape.interface';
import context from 'context';

// instances
const c1: Circle = new Circle(1000, 350, 50);
const c2: Circle = new Circle(0, 350, 150, 'blue', 5);
const c3: Circle = new Circle(500, 350, 100, 'pink', 5);
const r1: Rectangle = new Rectangle(50, 50, 1180, 620, 'yellow', 10);
const shapeArray: IShape[] = new Array<IShape>();

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  const ctx: CanvasRenderingContext2D = context;

  // clear the canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1280, 720);

  // render all
  shapeArray.forEach((shape) => shape.render());
};

window.onload = () => {

  let numOfAsteroids = 5;
  while (numOfAsteroids > 0) {
    shapeArray.push(new Asteroid());
    numOfAsteroids-=1;
  }

  let numOfPoligons = 15;
  while (numOfPoligons > 0) {
    shapeArray.push(new Poligon());
    numOfPoligons-=1;
  }

  shapeArray.push(c2);
  shapeArray.push(c3);
  shapeArray.push(c1);
  shapeArray.push(r1);

  // loop
  gameLoop();
};
