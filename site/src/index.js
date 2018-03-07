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
};

const rayRotation = function(duration) {
  const transformOriginX = 548 + 180 / 2.0;
  const tweenRayRotation = TweenMax.to('#Ray', duration, {
    transformPerspective: 3000,
    rotationY: '-360',
    repeat: -1,
    ease: Power0.easeNone,
  });
  return tweenRayRotation;
};

const raySource = function(duration) {
  const el = document.getElementById('ray-source');
  const maskEl = document.getElementById('ray-source-mask');
  const radius = el.getAttribute('rx');
  const maskWidth = getWidth(maskEl);
  const start = -radius;
  const end = +radius + maskWidth;
  TweenMax.set('#ray-source', { attr: { cx: end }, visibility: 'visible' });
  const tween = TweenMax.to('#ray-source', duration / 2, {
    attr: { cx: `${start}` },
    ease: Power0.easeNone,
    repeat: -1,
    repeatDelay: duration / 2,
  });

  return tween;
};

const rayShadowBottom = function(duration) {
  const el = document.getElementById('ray-shadow-bottom');
  const maskEl = document.getElementById('balcony-mask');
  const radius = el.getAttribute('r');
  const maskWidth = getWidth(maskEl);
  const start = -radius;
  const end = +radius + maskWidth;
  TweenMax.set(el, { attr: { cx: end }, visibility: 'visible' });
  const tween = TweenMax.to(el, duration / 2, {
    attr: { cx: `${start}` },
    ease: Power0.easeNone,
    repeat: -1,
    repeatDelay: duration / 2,
  });

  return tween;
};

const rayScene = function() {
  const tl = new TimelineMax();
  const duration = 3;
  tl.add('ray');
  tl.add(rayRotation(duration), 'ray');
  tl.add(raySource(duration), `ray+=${duration / 2}`);
  tl.add(rayShadowBottom(duration), `ray+=${duration / 2}`);
  return tl;
};

const master = new TimelineMax();
master.add('start');
master
  .add(cloudSmall(), 'start')
  .add(largeCloud(), 'start-=15')
  .add(mediumCloud(), 'start')
  .add(rayScene(), 'start');
// .add(rayRotation(), 'start')
// .add(raySource(), 'start+=1.5')
