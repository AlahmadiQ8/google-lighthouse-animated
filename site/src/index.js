
const EDGE = 1300;

TweenMax.set('.cloud-small', {
  visibility: 'visible',
  x: '50%',
});

const tweenCloudSmall = TweenMax.to('.cloud-small', 40, {
  x: `+=${EDGE}`, //move each box 500px to right
  ease: Power0.easeNone,
  modifiers: {
    x: function(x) {
      return (x % EDGE) - EDGE/2;
    },
  },
  repeat: -1,
});

tweenCloudSmall.seek(25);

const largeCloud = () => {
  const initialPosition = 750; 
  const leftEdge = 1450;
  return TweenMax.to('.cloud-large', 40, {
    ease: Power0.easeNone,
    x: `+=${leftEdge}`, 
    modifiers: {
      x: function(x) {
        return (x % (leftEdge + initialPosition)) - initialPosition;
      }
    },
    repeat: -1
  });
}

largeCloud().play();
