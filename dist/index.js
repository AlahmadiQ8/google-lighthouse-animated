'use strict';

CSSPlugin.defaultTransformPerspective = 500;
TweenMax.defaultTransformPerspective = 500;

var WIDTH = 1135;
var HEIGHT = 737;
var NEGATIVE_OFFSET = 200;

var getWidth = function getWidth(el) {
  return el.getBoundingClientRect().width;
};

var cloudSmall = function cloudSmall() {
  var el = document.getElementById('Cloud-1');
  var tweenCloudSmall = TweenMax.to('#Cloud-1', 50, {
    x: WIDTH - getWidth(el),
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1
  });
  return tweenCloudSmall;
};

var largeCloud = function largeCloud() {
  var el = document.getElementById('Cloud-3');
  return TweenMax.to(el, 50, {
    x: WIDTH - getWidth(el),
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1
  });
};

var mediumCloud = function mediumCloud() {
  var el = document.getElementById('Cloud-2');
  var tweenMediumCloud = TweenMax.from('#Cloud-2', 60, {
    x: WIDTH - getWidth(el),
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1
  });
  return tweenMediumCloud;
};

var rayRotation = function rayRotation() {
  var transformOriginX = 548 + 180 / 2.0;
  var tweenRayRotation = TweenMax.to('#Ray', 3, {
    transformPerspective: 3000,
    rotationY: '-360',
    repeat: -1,
    ease: Power0.easeNone
  });
  return tweenRayRotation;
};

var raySource = function raySource() {
  var el = document.getElementById('ray-source');
  var maskEl = document.getElementById('ray-source-mask');
  var diameter = el.getAttribute('rx');
  var maskWidth = getWidth(maskEl);
  var start = -diameter;
  var end = +diameter + maskWidth;
  TweenMax.set('#ray-source', { attr: { cx: end }, visibility: 'visible' });
  var tween = TweenMax.to('#ray-source', 1.5, {
    attr: { cx: '' + start },
    ease: Power0.easeNone,
    repeat: -1,
    repeatDelay: 1.5
  });

  return tween;
};

var master = new TimelineMax();
master.add('start');
master.add(cloudSmall(), 'start').add(largeCloud(), 'start-=15').add(mediumCloud(), 'start').add(rayRotation(), 'start').add(raySource(), 'start+=1.5');