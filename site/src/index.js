CSSPlugin.defaultTransformPerspective = 500;
TweenMax.defaultTransformPerspective = 500;

const WIDTH = 1135;
const HEIGHT = 737;
const NEGATIVE_OFFSET = 200;


const cloudSmall = function() {
  const tweenCloudSmall = TweenMax.to('#Cloud-1', 50, {
    x: WIDTH,
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1,
  });
  return tweenCloudSmall;
};

const largeCloud = function() {
  return TweenMax.to('#Cloud-3', 50, {
    x: WIDTH,
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1,
  });
};

const mediumCloud = function() {
  const tweenMediumCloud = TweenMax.from('#Cloud-2', 60, {
    x: WIDTH,
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1,
  });
  return tweenMediumCloud;
}

const rayRotation = function() {
  const tweenRayRotation = TweenMax.to('#Ray', 3, {
    transformPerspective: 2000,
    rotationY: '-360',
    // transformOrigin: '636px center',
    transformOrigin: '636px center',
    repeat: -1,
    ease: Power0.easeNone,
  })
  return tweenRayRotation;
}

const master = new TimelineMax();
master.add('start');
master
  .add(cloudSmall(), 'start')
  .add(largeCloud(), 'start-=15')
  .add(mediumCloud(), 'start')
  .add(rayRotation(), 'start');
