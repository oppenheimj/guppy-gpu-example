const guppy = require('guppy-gpu');

(async () => {
  const canvas = document.getElementById("webgpu-canvas");

  const camera = new guppy.Camera(70, 0.1, 6000, canvas.width/canvas.height);

  const webgpu = new guppy.WebGPU(canvas);
  await webgpu.init(camera);

  const player = new guppy.Entity(webgpu);

  const keyboardControls = getKeyboardControls(player);
  const mouseControls = getMouseControls(player, canvas);
  const controls = new guppy.Controls(document, canvas, keyboardControls, mouseControls);

  webgpu.player = player;
  webgpu.controls = controls;

  const otherPlayer = new guppy.Entity(webgpu);
  webgpu.addEntity(otherPlayer);

  const customRenderFn = () => {
    otherPlayer.moveForwardLocal(0.1);
    otherPlayer.rotateOnUpLocal(1);
  }

  webgpu.run(customRenderFn);
})();

function getKeyboardControls(player) {
  const scale = 0.5;

  return {
    w: s => { player.moveForwardLocal(s * scale); },
    s: s => { player.moveForwardLocal(-s * scale); },
    a: s => { player.moveRightLocal(-s * scale); },
    d: s => { player.moveRightLocal(s * scale); },
    e: s => { player.moveUpLocal(s * scale); },
    q: s => { player.moveUpLocal(-s * scale); }
  };
}

function getMouseControls(player, canvas) {
  return {
    x: dx => { player.rotateOnUpGlobal(dx/canvas.width); },
    y: dy => { player.rotateOnRightLocal(dy/canvas.height); }
  };
}