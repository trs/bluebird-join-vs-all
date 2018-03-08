const Bluebird = require('bluebird');
const { performance } = require('perf_hooks');

const env = require('./env');
const utils = require('./utils');

const timings = [];
function test (method) {
  return async function () {
    performance.mark(`${method}_start`);
    const averages = [];
    for (let i = 0; i < env.loops; i++) {
      performance.mark(`${method}_start_single`);

      switch (method) {
        case 'join': {
          await Bluebird.join(
            Promise.resolve(1),
            Promise.resolve(2),
            Promise.resolve(3),
            Promise.resolve(4),
            Promise.resolve(5) 
          );
          break;
        }
        case 'all': {
          await Bluebird.all([
            Promise.resolve(1),
            Promise.resolve(2),
            Promise.resolve(3),
            Promise.resolve(4),
            Promise.resolve(5)
          ]);
          break;
        }
        case 'native': {
          await Promise.all([
            Promise.resolve(1),
            Promise.resolve(2),
            Promise.resolve(3),
            Promise.resolve(4),
            Promise.resolve(5)
          ]);
          break;
        }
      }

      performance.mark(`${method}_end_single`);
      performance.measure(`${method}_total_single`, `${method}_start_single`, `${method}_end_single`);
      const singleElapsed = performance.getEntriesByName(`${method}_total_single`)[0].duration;
      averages.push(singleElapsed);

      performance.clearMarks(`${method}_start_single`);
      performance.clearMarks(`${method}_end_single`);
      performance.clearMeasures(`${method}_total_single`);
    }
    performance.mark(`${method}_end`);
    performance.measure(`${method}_total`, `${method}_start`, `${method}_end`);

    const elapsed = performance.getEntriesByName(`${method}_total`)[0].duration;
    const average = utils.sumAverage(averages);

    performance.clearMarks(`${method}_start`);
    performance.clearMarks(`${method}_end`);
    performance.clearMeasures(`${method}_total`);

    console.log(`${method}: ${env.loops} in ${elapsed.toFixed(env.decimalPlaces)}ms (avg: ${average.toFixed(env.decimalPlaces)}ms)`);

    return {elapsed, average};
  }
};

module.exports = test;
