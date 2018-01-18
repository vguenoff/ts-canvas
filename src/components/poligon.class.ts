import Particle from 'components/particle.class';
import Point from 'components/point.class';

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Poligon extends Particle {
  constructor() {
    super();

    const xrand = () => Math.round(Math.random() * this.size);
    const yrand = () => Math.round(Math.random() * this.size);

    while(this.pointList.length < 10) {
      this.pointList.push(
        new Point(
          getRandomInt(1, 2) * this.size,
          getRandomInt(1, 2) * this.size,
        ),
      );
    }
  }
}

export default Poligon;
