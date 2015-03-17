# pokey

### What
Http server that responds with random text after a delay. The size of response and delay time are configurable, defaults to 0 msec and 1024 bytes.

### Why
Handy for testing?

### How
You can specify size of response and delay via query parameters, like so:

```
☯ curl -w "@curl-format.txt" -o /dev/null -s "http://api.lo5.at/pokey?delay=0&size=256"

            time_namelookup:  0.005
               time_connect:  0.050
            time_appconnect:  0.000
           time_pretransfer:  0.050
              time_redirect:  0.000
         time_starttransfer:  0.193
                            ----------
                 time_total:  0.193

☯ curl -w "@curl-format.txt" -o /dev/null -s "http://api.lo5.at/pokey?delay=3000&size=256"

           time_namelookup:  0.004
              time_connect:  0.054
           time_appconnect:  0.000
          time_pretransfer:  0.054
             time_redirect:  0.000
        time_starttransfer:  3.158
                           ----------
                time_total:  3.158
```
