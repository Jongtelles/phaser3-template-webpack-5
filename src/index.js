import Phaser from "phaser";
import kennyO from "./assets/kennyo.jpeg";

class Scene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("kenny", kennyO);
  }

  create() {
    const kenny = this.add.image(400, 125, "kenny");

    this.tweens.add({
      targets: kenny,
      y: 400,
      duration: 1000,
      yoyo: true,
      loop: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Scene,
};

const game = new Phaser.Game(config);
