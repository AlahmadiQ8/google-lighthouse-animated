TweenMax.set('.cloud-small', {
  visibility: 'visible',
  x: '50%',
});

const CloudSmall = () => {
  // TODO: cloud doesn't move exactly within `range`
  // cloud moves between -range/2 and range/2
  const range = 1300;
  const tweenCloudSmall = TweenMax.to('.cloud-small', 40, {
    x: `+=${range}`,
    ease: Power0.easeNone,
    modifiers: {
      x: x => x % range - range / 2,
    },
    repeat: -1,
  });
  return tweenCloudSmall;
};

const largeCloud = () => {
  const initialPosition = 750;
  const rightEdge = 1450;
  return TweenMax.to('.cloud-large', 50, {
    ease: Power0.easeNone,
    x: `+=${rightEdge}`,
    modifiers: {
      x: x => x % (rightEdge + initialPosition) - initialPosition,
    },
    repeat: -1,
  });
};

const mediumCloud = () => {
  const leftEdge = -1185;
  const rightEdge = 125;
  const range = rightEdge - leftEdge;
  console.log(range);
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


const master = new TimelineMax();
master.add('start');
master
  .add(CloudSmall(), 'start')
  .add(largeCloud(), 'start-=25')
  .add(mediumCloud(), 'start+=10');
