# Bluebird `Promise.all` vs `Promise.join` vs native `Promise.all`

Using node's `perf_hooks`, measures the performance of using Bluebird's `Promise.all` and `Promise.join` versus the native `Promise.all`.

## Install

```bash
$ npm install
```

## Usage

The number of runs can be changed in the `env.js` file.

```bash
$ npm test
```

## Results

```
[1 / 10]
join: 10000 in 404.23102ms (avg: 0.02570ms)
all: 10000 in 305.20595ms (avg: 0.01865ms)
native: 10000 in 188.47789ms (avg: 0.00815ms)

[2 / 10]
join: 10000 in 307.14645ms (avg: 0.01834ms)
all: 10000 in 261.68664ms (avg: 0.01451ms)
native: 10000 in 165.76513ms (avg: 0.00736ms)

[3 / 10]
join: 10000 in 270.40870ms (avg: 0.01569ms)
all: 10000 in 270.87748ms (avg: 0.01501ms)
native: 10000 in 192.07037ms (avg: 0.00833ms)

[4 / 10]
join: 10000 in 273.32725ms (avg: 0.01566ms)
all: 10000 in 259.74411ms (avg: 0.01460ms)
native: 10000 in 164.98827ms (avg: 0.00672ms)

[5 / 10]
join: 10000 in 279.70540ms (avg: 0.01544ms)
all: 10000 in 258.32958ms (avg: 0.01414ms)
native: 10000 in 166.61922ms (avg: 0.00732ms)

[6 / 10]
join: 10000 in 273.77372ms (avg: 0.01498ms)
all: 10000 in 265.24856ms (avg: 0.01436ms)
native: 10000 in 171.01208ms (avg: 0.00729ms)

[7 / 10]
join: 10000 in 271.96715ms (avg: 0.01546ms)
all: 10000 in 263.76613ms (avg: 0.01448ms)
native: 10000 in 165.19352ms (avg: 0.00784ms)

[8 / 10]
join: 10000 in 271.58063ms (avg: 0.01506ms)
all: 10000 in 261.41912ms (avg: 0.01430ms)
native: 10000 in 166.44423ms (avg: 0.00638ms)

[9 / 10]
join: 10000 in 272.25007ms (avg: 0.01555ms)
all: 10000 in 289.79557ms (avg: 0.01623ms)
native: 10000 in 163.66656ms (avg: 0.00602ms)

[10 / 10]
join: 10000 in 266.78531ms (avg: 0.01427ms)
all: 10000 in 269.34272ms (avg: 0.01480ms)
native: 10000 in 168.10718ms (avg: 0.00739ms)

Final Average of 10000 loops 10 times:
  join: 289.11757ms (avg: 0.01661ms)
   all: 270.54159ms (avg: 0.01511ms)
native: 171.23444ms (avg: 0.00728ms)
```