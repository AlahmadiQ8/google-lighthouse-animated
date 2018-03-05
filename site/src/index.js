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
  const transformOriginX = 548 + 180/2.0;
  const tweenRayRotation = TweenMax.to('#Ray', 3, {
    transformPerspective: 3000,
    rotationY: '-360',
    repeat: -1,
    ease: Power0.easeNone,
  })
  return tweenRayRotation;
}


const raySource = function() {
  const el = document.getElementById('ray-source');
  const maskEl = document.getElementById('ray-source-mask');
  const diameter = el.getAttribute('rx');
  const maskWidth = getWidth(maskEl);
  const start = -diameter;
  const end = +diameter + maskWidth;
  TweenMax.set('#ray-source', { attr: { cx: end }, visibility: 'visible' });
  const tween = TweenMax.to('#ray-source', 1.5, {
    attr: { cx: `${start}` },
    ease: Power0.easeNone,
    repeat: -1,
    repeatDelay: 1.5,
  });
  
  return tween;
}

const master = new TimelineMax();
master.add('start');
master
  .add(cloudSmall(), 'start')
  .add(largeCloud(), 'start-=15')
  .add(mediumCloud(), 'start')
  .add(rayRotation(), 'start')
  .add(raySource(), 'start+=1.5')
