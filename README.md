# Comparing js api frameworks

## RAYO

- Responce 26-34 ms on chrome local
- Missing plugins
- Very new but promissing

## RESTIFY

- Responce 28-30 ms on chrome local
- Good community
- Good support
- Plugins for rapid development
- plugin set up can be tricky
- Not so good documentation needs update
- Express syntax

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
$ ./go-wrk -c 800 -d 5  http://localhost:3000/
Running 5s test @ http://localhost:3000/
  800 goroutine(s) running concurrently
77922 requests in 5.021318113s, 12.04MB read
Requests/sec:           15518.24
Transfer/sec:           2.40MB
Avg Req Time:           51.55225ms
Fastest Request:        998.6µs
Slowest Request:        1.3375186s
Number of Errors:       0

```
