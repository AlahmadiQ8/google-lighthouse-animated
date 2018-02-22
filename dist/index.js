'use strict';

CSSPlugin.defaultTransformPerspective = 500;
TweenMax.defaultTransformPerspective = 500;

var WIDTH = 1135;
var HEIGHT = 737;
var NEGATIVE_OFFSET = 200;

var cloudSmall = function cloudSmall() {
  var tweenCloudSmall = TweenMax.to('#Cloud-1', 50, {
    x: WIDTH,
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1
  });
  return tweenCloudSmall;
};

var largeCloud = function largeCloud() {
  return TweenMax.to('#Cloud-3', 50, {
    x: WIDTH,
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1
  });
};

var mediumCloud = function mediumCloud() {
  var tweenMediumCloud = TweenMax.from('#Cloud-2', 60, {
    x: WIDTH,
    ease: Power0.easeNone,
    yoyo: true,
    repeat: -1
  });
  return tweenMediumCloud;
};

var rayRotation = function rayRotation() {
  var tweenRayRotation = TweenMax.to('#Ray', 3, {
    transformPerspective: 2000,
    rotationY: '-360',
    // transformOrigin: '636px center',
    transformOrigin: '636px center',
    repeat: -1,
    ease: Power0.easeNone
  });
  return tweenRayRotation;
};

var master = new TimelineMax();
master.add('start');
master.add(cloudSmall(), 'start').add(largeCloud(), 'start-=15').add(mediumCloud(), 'start').add(rayRotation(), 'start');