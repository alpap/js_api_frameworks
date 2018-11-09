# Comparing js api frameworks

## RAYO

- Responce 26-34 ms on chrome local
- Missing plugins
- Very new but promissing

```
./go-wrk -c 800 -d 5  http://localhost:3000/user/1
Running 5s test @ http://localhost:3000/user/1
  800 goroutine(s) running concurrently
19037 requests in 5.030289304s, 2.67MB read
Requests/sec:           3784.47
Transfer/sec:           543.28KB
Avg Req Time:           211.39ms
Fastest Request:        23.0412ms
Slowest Request:        2.0377374s
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
./go-wrk -c 800 -d 5  http://localhost:3000/user/1
Running 5s test @ http://localhost:3000/user/1
  800 goroutine(s) running concurrently
88470 requests in 5.021216959s, 11.73MB read
Requests/sec:           17619.23
Transfer/sec:           2.34MB
Avg Req Time:           45.404923ms
Fastest Request:        1.0023ms
Slowest Request:        1.1947739s
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
./go-wrk -c 800 -d 5  http://localhost:3000/users/1D

12505 requests in 3.465680456s, 1.06MB read
Requests/sec:           3608.24
Transfer/sec:           313.61KB
Avg Req Time:           221.714863ms
Fastest Request:        4.9959ms
Slowest Request:        2.6949984s
Number of Errors:       782

```

## MICRO

- Opinionated
- Nothing out of the box
- Non newbie
- Plugins
- Fast

```
./go-wrk -c 800 -d 5  http://localhost:3000/user/1

Running 5s test @ http://localhost:3000/user/1
  800 goroutine(s) running concurrently
75393 requests in 5.02029441s, 6.40MB read
Requests/sec:           15017.65
Transfer/sec:           1.27MB
Avg Req Time:           53.270668ms
Fastest Request:        0s
Slowest Request:        1.4349981s
Number of Errors:       0
```
