# guppy-gpu example

This repository provides a minimum working example of the WebGPU rendering package [guppy-gpu](https://github.com/oppenheimj/guppy). The following example creates player/camera/controls which allows the uer to move around the empty 3D space and view a secondary player moving in circles.
## Setup

Clone this repository
```
$ git clone https://github.com/oppenheimj/guppy-gpu-example
```

Install dependencies
```
$ npm install
```

Run the app
```
$ npm run serve
```

Browse to http://localhost:8081/ in a WebGPU-compatible browser, such as Chrome Canary. See instructions at the end if you don't have Chrome Canary.

You should be able to move and look around with keys W, A, S, D, Q, and E, and your mouse. You'll see an Entity moving around.

![](doc/img/entity.gif)

Chrome Canary setup instructions:
1. Download Chrome Canary from [here](https://www.google.com/chrome/canary/).
2. Browse to **chrome://flags**, search for **webgpu**, and enable **Unsafe WebGPU** (see screenshot below).
![](doc/img/cc.png)