import Particle from 'components/particle.class';
import Point from 'components/point.class';

class Asteroid extends Particle {
  constructor() {
    super();

    const xrand = () => Math.round(Math.random() * this.size - this.size / 2);
    const yrand = () => Math.round(Math.random() * this.size - this.size / 2);
    const coordinates: Point[] = [
      new Point(xrand(), yrand() + 3 * this.size),
      new Point(xrand() - 1 * this.size, yrand() + 2 * this.size),
      new Point(xrand() - 2 * this.size, yrand() + 2 * this.size),
      new Point(xrand() - 3 * this.size, yrand() + this.size),
      new Point(xrand() - 4 * this.size, yrand()),
      new Point(xrand() - 1 * this.size, yrand() - 3 * this.size),
      new Point(xrand() + 2 * this.size, yrand() - 4 * this.size),
      new Point(xrand() + 2 * this.size, yrand() - 3 * this.size),
      new Point(xrand() + 4 * this.size, yrand() - 2 * this.size),
      new Point(xrand() + 4 * this.size, yrand() + this.size),
      new Point(xrand() + 3 * this.size, yrand() + 2 * this.size),
    ];

    coordinates.forEach((point, i) => {
      this.pointList.push(point);
    });
  }
}

export default Asteroid;
