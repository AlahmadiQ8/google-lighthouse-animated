'use strict';

TweenMax.set('.cloud-small', {
  visibility: 'visible',
  x: '50%'
});

var CloudSmall = function CloudSmall() {
  // TODO: cloud doesn't move exactly within `range`
  // cloud moves between -range/2 and range/2
  var range = 1300;
  var tweenCloudSmall = TweenMax.to('.cloud-small', 40, {
    x: '+=' + range,
    ease: Power0.easeNone,
    modifiers: {
      x: function x(_x) {
        return _x % range - range / 2;
      }
    },
    repeat: -1
  });
  return tweenCloudSmall;
};

var largeCloud = function largeCloud() {
  var initialPosition = 750;
  var rightEdge = 1450;
  return TweenMax.to('.cloud-large', 50, {
    ease: Power0.easeNone,
    x: '+=' + rightEdge,
    modifiers: {
      x: function x(_x2) {
        return _x2 % (rightEdge + initialPosition) - initialPosition;
      }
    },
    repeat: -1
  });
};

var mediumCloud = function mediumCloud() {
  var leftEdge = -1185;
  var rightEdge = 125;
  var range = rightEdge - leftEdge;
  console.log(range);
  var tweenMediumCloud = TweenMax.to('.cloud-medium', 60, {
    x: '-=' + range,
    ease: Power0.easeNone,
    modifiers: {
      x: function x(_x3) {
        return _x3 % range + Math.abs(rightEdge);
      }
    },
    repeat: -1
  });
  return tweenMediumCloud;
};

var master = new TimelineMax();
master.add('start');
master.add(CloudSmall(), 'start').add(largeCloud(), 'start-=25').add(mediumCloud(), 'start+=10');