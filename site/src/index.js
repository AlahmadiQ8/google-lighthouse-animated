CSSPlugin.defaultTransformPerspective = 500;
TweenMax.defaultTransformPerspective = 500;

TweenMax.set('#Cloud-1', {
  visibility: 'visible',
  x: '50%',
});

// TweenMax.set('.ray', {
//   x: 172
// })

const cloudSmall = function() {
  // TODO: cloud doesn't move exactly within `range`
  // cloud moves between -range/2 and range/2
  const range = 1300;
  const tweenCloudSmall = TweenMax.to('#Cloud-1', 50, {
    x: `+=${range}`,
    ease: Power0.easeNone,
    modifiers: {
      x: x => x % range - range / 2,
    },
    repeat: -1,
  });
  return tweenCloudSmall;
};

const largeCloud = function() {
  const initialPosition = 750;
  const rightEdge = 1450;
  return TweenMax.to('#Cloud-3', 50, {
    ease: Power0.easeNone,
    x: `+=${rightEdge}`,
    modifiers: {
      x: x => x % (rightEdge + initialPosition) - initialPosition,
    },
    repeat: -1,
  });
};

const mediumCloud = function() {
  const leftEdge = -1185;
  const rightEdge = 125;
  const range = rightEdge - leftEdge;
  const tweenMediumCloud = TweenMax.to('.cloud-medium', 60, {
    x: `-=${range}`,
    ease: Power0.easeNone,
    modifiers: {
      x: x => x % range +  Math.abs(rightEdge),
    },
    repeat: -1,
  });
  return tweenMediumCloud;
}

const rayRotation = function() {
  const tweenRayRotation = TweenMax.to('.ray', 3, {
    // transformPerspective: 300,
    rotationY: 360,
    // rotation: 360,
    transformOrigin: '100% 85px 50%',
    yoyo: true,
    repeat: -1,
    ease: Power0.easeNone,
  })
  return tweenRayRotation;
}

const master = new TimelineMax();
master.add('start');
master
  // .add(cloudSmall(), 'start')
  // .add(largeCloud(), 'start-=25')
  .add(mediumCloud(), 'start+=10')
  .add(rayRotation(), 'start');
