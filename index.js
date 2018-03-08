const test = require('./test');

const env = require('./env');
const utils = require('./utils');

function pushAveragesFactory(averages) {
  return function (timings) {
    Object.entries(timings).forEach(([key, time]) => {
      if (!averages[key]) averages[key] = [];
  
      averages[key].push(time);
    });
  }
}

(async function () {

  const join = test('join');
  const all = test('all');
  const native = test('native');

  const joinAverages = {};
  const allAverages = {};
  const nativeAverages = {};

  const pushJoinAverage = pushAveragesFactory(joinAverages);
  const pushAllAverage = pushAveragesFactory(allAverages);
  const pushNativeAverage = pushAveragesFactory(nativeAverages);

  for (let i = 1; i <= env.count; i++) {
    console.log(`[${i} / ${env.count}]`);

    const joinTimings = await join();
    const allTimings = await all();
    const nativeTimings = await native();

    console.log('');

    pushJoinAverage(joinTimings);
    pushAllAverage(allTimings);
    pushNativeAverage(nativeTimings);
  }

  const joinElapsed = utils.sumAverage(joinAverages.elapsed);
  const allElapsed = utils.sumAverage(allAverages.elapsed);
  const nativeElapsed = utils.sumAverage(nativeAverages.elapsed);

  const joinAverage = utils.sumAverage(joinAverages.average);
  const allAverage = utils.sumAverage(allAverages.average);
  const nativeAverage = utils.sumAverage(nativeAverages.average);

  console.log(`Final Average of ${env.loops} loops ${env.count} times:`);
  console.log(`  join: ${joinElapsed.toFixed(env.decimalPlaces)}ms (avg: ${joinAverage.toFixed(env.decimalPlaces)}ms)`);
  console.log(`   all: ${allElapsed.toFixed(env.decimalPlaces)}ms (avg: ${allAverage.toFixed(env.decimalPlaces)}ms)`);
  console.log(`native: ${nativeElapsed.toFixed(env.decimalPlaces)}ms (avg: ${nativeAverage.toFixed(env.decimalPlaces)}ms)`);
})();
