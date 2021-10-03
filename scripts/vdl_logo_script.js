svgString().then(logo => {
  d3.select('#svg').html(logo);
  run();
});

async function run() {
  let leftSource = d3.select('.left-source');
  let midSource = d3.select('.mid-source');
  let rightSource = d3.select('.right-source');

  let level = 1;
  let pausing = false;

  restart()

  d3.select('svg')
    .on('mouseover', () => {
      level = 0;

      // If not waiting for pause, restart
      if (!pausing) {
        restart();
      }
    })
    .on('mouseout', async () => {
      for (let i = 0; i <= 3; ++i) {
        setTimeout(() => {
          level = i;
        }, i * 3333);
      }

      // If not already pausing, pause
      if (!pausing) {
        pausing = true;
        await sleep(10);
        pause();
        pausing = false;
      }
    });

  await sleep(10)
  pause()

  function addNewBubbles() {
    if (level) {
      // Slow bubbling
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
      animateBubble(...addBubble(rightSource), 'right');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(leftSource), 'left');
    } else {
      // Fast bubbling
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
    }
  }

  function addBubble(source) {
    let radius = getRandomRadius();
    let xShift = shiftRandom(radius);
    return [
      source
        .append('circle')
        .classed('bubble', true)
        .classed('moving-bubble', true)
        .attr('r', radius)
        .attr('transform', `translate(${xShift}, 0)`),
      xShift,
    ];
  }

  function getRandomRadius() {
    return randomFloatInRange(0.5, 2);
  }

  function shiftRandom(radius) {
    let a = randomFloatInRange(-5, 5);
    if (Math.abs(a) + radius > 5) {
      if (a < 0) a = a + radius;
      else a = a - radius;
    }
    return a;
  }

  function animateBubble(bubble, xShift, position) {
    const points = getPoints(xShift, position);
    const path = getPath(points);
    const timeToMove = sToMs(getRandomTime())
    bubble
      .attr('t', 0)
      .attr('timetomove', timeToMove)
      .attr('points', `${JSON.stringify(points)}`)

    bubble
      .transition()
      .duration(timeToMove)
      .attr('t', 1)
      .attrTween('transform', translateAlongPath(path.node()))
      .remove();
    path.remove();
  }

  function getPath(points) {
    return d3
      .select('svg')
      .append('path')
      .attr('class', `random-path `)
      .datum(points)
      .attr(
        'd',
        d3
          .line()
          .x(d => d[0])
          .y(d => d[1])
          .curve(d3.curveMonotoneX),
      );
  }

  function getRandomTime() {
    switch (level) {
      case 5:
        return randomFloatInRange(17, 19);
      case 4:
        return randomFloatInRange(15, 17);
      case 3:
        return randomFloatInRange(13, 15);
      case 2:
        return randomFloatInRange(9, 13);
      case 1:
        return randomFloatInRange(7, 9);
      case 0:
      default:
        return randomFloatInRange(4, 9);
    }
  }

  function sToMs(s) {
    return s * 1000;
  }

  function translateAlongPath(path) {
    let l = path.getTotalLength();
    return function (d, i, a) {
      return function (t) {
        let p = path.getPointAtLength(t * l);
        return `translate(${p.x}, ${p.y})`;
      };
    };
  }

  function getPoints(xShift, position = 'mid') {
    let points = [[xShift, 0], [xShift, -20]];

    if (position === 'left') {
      xShift = xShift + 13;
      points.push([xShift - 11, -22]);
      points.push([xShift - 6, -28]);
      points.push([xShift - 5, -30]);
      points.push([12, -35]);
      points.push([12, -50]);
      points.push([xShift, -90]);
    } else if (position === 'right') {
      xShift = xShift - 13;
      points.push([xShift + 11, -25]);
      points.push([xShift + 6, -30]);
      points.push([-12, -36]);
      points.push([-12, -50]);
      points.push([xShift, -90]);
    } else {
      points.push([xShift / 2, -50]);
      points.push([xShift / 2, -90]);
    }

    return points;
  }

  function getRemainingPoints(points, currentPos) {
    const output = []
    output.push(currentPos)
    points
      .filter(point => point[1] < currentPos[1])
      .forEach(point => output.push(point))

    return output
  }

  function getNextPoint(points, currentPos) {
    const nextPos = points.find(point => point[1] < currentPos[1]) || [13, -100]
    nextPos[1] = nextPos[1] + randomFloatInRange(-8, 2)

    const output = []
    output.push(currentPos)
    output.push(nextPos)

    return output
  }

  function restart() {
    const bubbles = d3.selectAll('.moving-bubble')

    bubbles.nodes().forEach((d) => {
      // Get T
      const pausePoint = d.attributes.t.value;
      const timeToMove = d.attributes.timetomove.value;
      let points = JSON.parse(d.attributes.points.value)
      let currentPos = d.attributes.transform.value

      currentPos = currentPos.slice(10, currentPos.length - 1).split(', ')
      points = getRemainingPoints(points, currentPos)

      const path = getPath(points);
      const remainingTime = timeToMove - (timeToMove * pausePoint)

      // Resume transition
      d3.select(d)
        .transition()
        .duration(remainingTime / 2)
        .attr('t', 1)
        .attrTween('transform', translateAlongPath(path.node()))
        .remove();
      path.remove();
    })

    bubbleInterval = setInterval(addNewBubbles, 1000);
  }

  async function pause() {
    clearInterval(bubbleInterval);

    const bubbles = d3.selectAll('.moving-bubble')

    bubbles.nodes().forEach((d) => {
      // Get T
      let points = JSON.parse(d.attributes.points.value)
      let currentPos = d.attributes.transform.value

      currentPos = currentPos.slice(10, currentPos.length - 1).split(', ')
      points = getNextPoint(points, currentPos)

      const path = getPath(points);

      // Transition and ease to next point
      d3.select(d)
        .transition()
        .ease(d3.easeSinOut)
        .duration(1500)
        .attrTween('transform', translateAlongPath(path.node()));
    })
  }

  function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sToMs(sec)));
  }

  function randomFloatInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
}

async function svgString() {
  return await d3.text('/assets/images/logos/animated_logo_template.svg');
}
