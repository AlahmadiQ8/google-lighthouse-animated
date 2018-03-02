CSSPlugin.defaultTransformPerspective = 500;
TweenMax.defaultTransformPerspective = 500;

const WIDTH = 1135;
const HEIGHT = 737;
const NEGATIVE_OFFSET = 200;

const getWidth = el => el.getBoundingClientRect().width;

const cloudSmall = function() {
  const el = document.getElementById('Cloud-1');
  const tweenCloudSmall = TweenMax.to('#Cloud-1', 50, {
    x: WIDTH - getWidth(el),
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1,
  });
  return tweenCloudSmall;
};

const largeCloud = function() {
  const el = document.getElementById('Cloud-3');
  return TweenMax.to(el, 50, {
    x: WIDTH - getWidth(el),
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1,
  });
};

const mediumCloud = function() {
  const el = document.getElementById('Cloud-2');
  const tweenMediumCloud = TweenMax.from('#Cloud-2', 60, {
    x: WIDTH - getWidth(el),
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
