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
