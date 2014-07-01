Node.js Router Benchmarks
=========================

First of all, I'm the author of [light-router](https://github.com/herenow/light-router), so this benchmark isn't really fair. This is a fork from mnutt, and I use this scripts to keep my router in check. You are free to edit the scripts and run your tests.

** This benchmarks arent really ready, but its a start **

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
koa                      4354.73         4276.30
express                  7697.21         6825.72
hapi                     1198.65         1233.84
light-router             10414.99        10270.18
light-router (no-cache)  10502.09        10052.09
barista                  8114.13         2214.44
choreographer            9470.82         8944.37
clutch                   8433.79         2332.45
connect                  7848.29         7227.07
escort                   8828.66         8622.83
journey                  4770.10         4423.57
regex                    11233.89        9814.03
```

**Notes about this results**
* `koa` and `express` are not just routers, they are robust frameworks, they are doing a lot more then just route the request. The added overhead may or not be worth it depending on what you are building.
* `rawhttp` is a reference to a control benchmark, its not routing anything.
* I'm not sure why `hapi` performed so poorly


TODO
------
* Write more realistic routes
