Node.js Router Benchmarks
=========================

This is a fork from mnutt. You are free to edit the scripts and run your tests. This benchmarks show the least overhead you will get when using each router.

Running the tests
-------
```
npm install
./run.sh
```
* The tests results will be written in the folder `results-2014`
* Sample output http://pastebin.com/VA6v4NrR
* You need to have installed on your system `node` and `wrk`
* You can install wrk with `brew wrk`


Results overview
-------
```
Tested on a MacBook Pro 13" 2012 @2,4Ghz i5
```

```
router    first route (req/sec)  20th route (req/sec)
-----------------------------------------
rawhttp                  10887.88        10407.13
director                 6264.09         5485.87
light-router             10414.99        10270.18
light-router (no-cache)  10502.09        10052.09
barista                  8114.13         2214.44
choreographer            9470.82         8944.37
clutch                   8433.79         2332.45
connect                  7848.29         7227.07
escort                   8828.66         8622.83
journey                  4770.10         4423.57
regex                    11233.89        9814.03
---- frameworks ----
koa                      4354.73         4276.30
express                  7697.21         6825.72
hapi                     1198.65         1233.84
totaljs                  3889.81         3938.33
```

**Notes about this results**
* `rawhttp` is a reference to a control benchmark, its not routing anything.
* `koa`, `express`, `hapi` and `totaljs` are actually frameworks, some are more robust then others.


TODO
------
* Write more realistic routes
