# Comparing js api frameworks

## RAYO

- Responce 26-34 ms on chrome local
- Missing plugins
- Very new but promissing

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
81969 requests in 9.99890777s, 7.04MB read
Requests/sec:           8197.80
Transfer/sec:           720.51KB
Avg Req Time:           9.758721ms
Fastest Request:        0s
Slowest Request:        65.0685ms
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬───────────┬────────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev     │ Max        │
├─────────┼──────┼──────┼────────┼────────┼──────────┼───────────┼────────────┤
│ Latency │ 0 ms │ 0 ms │ 844 ms │ 878 ms │ 84.15 ms │ 273.61 ms │ 4017.04 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴───────────┴────────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 1730   │ 1730   │ 12047   │ 12967   │ 11720.47 │ 1900.88 │ 1730   │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 185 kB │ 185 kB │ 1.29 MB │ 1.39 MB │ 1.25 MB  │ 203 kB  │ 185 kB │
└───────────┴────────┴────────┴─────────┴─────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

352k requests in 30.21s, 37.6 MB read
```

## RESTIFY

- Responce 28-30 ms on chrome local
- Good community
- Good support
- Plugins for rapid development
- plugin set up can be tricky
- Not so good documentation needs update
- Express syntax

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
166940 requests in 9.990184771s, 22.13MB read
Requests/sec:           16710.40
Transfer/sec:           2.22MB
Avg Req Time:           4.787437ms
Fastest Request:        2.9932ms
Slowest Request:        52.0474ms
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬───────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev     │ Max       │
├─────────┼──────┼──────┼────────┼────────┼──────────┼───────────┼───────────┤
│ Latency │ 0 ms │ 5 ms │ 518 ms │ 544 ms │ 53.01 ms │ 148.88 ms │ 854.88 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴───────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 11671   │ 11671   │ 19055   │ 19919   │ 18706   │ 1453.22 │ 11668   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 1.82 MB │ 1.82 MB │ 2.97 MB │ 3.11 MB │ 2.92 MB │ 227 kB  │ 1.82 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

561k requests in 30.3s, 87.5 MB read
```

## POLKA

- Responce 31-36 ms on chrome local
- New and promissing
- Express syntax
- Very simple to start with
- Clean syntax
- freely use any middleware from express

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
159497 requests in 9.99361088s, 13.54MB read
Requests/sec:           15959.90
Transfer/sec:           1.35MB
Avg Req Time:           5.012563ms
Fastest Request:        0s
Slowest Request:        43.0395ms
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1;autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬───────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev     │ Max       │
├─────────┼──────┼──────┼────────┼────────┼──────────┼───────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 454 ms │ 631 ms │ 24.35 ms │ 102.45 ms │ 991.13 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴───────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 28399   │ 28399   │ 41823   │ 44415   │ 40758.14 │ 3561.28 │ 28390   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.01 MB │ 3.01 MB │ 4.43 MB │ 4.71 MB │ 4.32 MB  │ 377 kB  │ 3.01 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1223k requests in 30.21s, 130 MB read
```

## MICRO

- Opinionated
- Nothing out of the box
- Non newbie
- Plugins
- Fast

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
140558 requests in 9.995187596s, 11.93MB read
Requests/sec:           14062.57
Transfer/sec:           1.19MB
Avg Req Time:           5.688861ms
Fastest Request:        0s
Slowest Request:        42.0381ms
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬───────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev │ Max       │
├─────────┼──────┼──────┼────────┼────────┼──────────┼───────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 237 ms │ 608 ms │ 26.45 ms │ 97 ms │ 930.62 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴───────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 27087   │ 27087   │ 37471   │ 40895   │ 37565.6 │ 2319.24 │ 27080   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.87 MB │ 2.87 MB │ 3.97 MB │ 4.34 MB │ 3.98 MB │ 246 kB  │ 2.87 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1127k requests in 30.2s, 119 MB read
```

## RESTANA

- Very new
- express based
- took the best from frameworks and combined them

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
192298 requests in 9.98925697s, 17.61MB read
Requests/sec:           19250.48
Transfer/sec:           1.76MB
Avg Req Time:           4.15574ms
Fastest Request:        2.0011ms
Slowest Request:        1.0375677s
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬──────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max       │
├─────────┼──────┼──────┼────────┼────────┼──────────┼──────────┼───────────┤
│ Latency │ 0 ms │ 4 ms │ 299 ms │ 316 ms │ 31.55 ms │ 85.25 ms │ 583.48 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 23071   │ 23071   │ 31407   │ 33151   │ 31394.4 │ 1767.04 │ 23056   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.61 MB │ 2.61 MB │ 3.55 MB │ 3.75 MB │ 3.55 MB │ 200 kB  │ 2.61 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

942k requests in 30.26s, 106 MB read
```

with turbo http

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
212024 requests in 9.986943981s, 11.93MB read
Requests/sec:           21230.12
Transfer/sec:           1.19MB
Avg Req Time:           3.768231ms
Fastest Request:        1.9924ms
Slowest Request:        1.0296643s
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬──────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max       │
├─────────┼──────┼──────┼────────┼────────┼──────────┼──────────┼───────────┤
│ Latency │ 0 ms │ 0 ms │ 180 ms │ 201 ms │ 16.34 ms │ 52.03 ms │ 606.33 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 28303   │ 28303   │ 62783   │ 65919   │ 61498.94 │ 6504.89 │ 28300   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.15 MB │ 2.15 MB │ 4.77 MB │ 5.01 MB │ 4.67 MB  │ 494 kB  │ 2.15 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1845k requests in 30.49s, 140 MB read
```

## Fastify 1.13

- Fast
- 90+ pluggins
- Seems more advanced

```
./go-wrk -c 80 -d 10  http://localhost:3000/user/1
Running 10s test @ http://localhost:3000/user/1
  80 goroutine(s) running concurrently
135186 requests in 9.995741128s, 16.76MB read
Requests/sec:           13524.36
Transfer/sec:           1.68MB
Avg Req Time:           5.915252ms
Fastest Request:        0s
Slowest Request:        1.0536042s
Number of Errors:       0
```

```
autocannon -c 1000 -d 30 -p 10 localhost:3000/user/1
Running 30s test @ http://localhost:3000/user/1
1000 connections with 10 pipelining factor

┌─────────┬──────┬──────┬────────┬────────┬──────────┬──────────┬────────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max        │
├─────────┼──────┼──────┼────────┼────────┼──────────┼──────────┼────────────┤
│ Latency │ 0 ms │ 0 ms │ 246 ms │ 568 ms │ 26.24 ms │ 94.95 ms │ 1077.42 ms │
└─────────┴──────┴──────┴────────┴────────┴──────────┴──────────┴────────────┘
┌───────────┬─────────┬─────────┬─────────┬───────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5% │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼───────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 26847   │ 26847   │ 38239   │ 40799 │ 37832.81 │ 2753.42 │ 26833   │
├───────────┼─────────┼─────────┼─────────┼───────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.95 MB │ 3.95 MB │ 5.62 MB │ 6 MB  │ 5.56 MB  │ 404 kB  │ 3.94 MB │
└───────────┴─────────┴─────────┴─────────┴───────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

1135k requests in 30.18s, 167 MB read
```
