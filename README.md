# globby-performance-test

Fork of https://github.com/ernscht/globby-performace-test with latest globby versions, rewritten for ESM, replacing `system-sleep` with `sleep` and corrected the repository name 😉

All credit to [@ernscht](https://github.com/ernscht)

Find a specific file from 1000 documents in 220 folders.

## usage

```
npm install
npm start
```

## time needed:

100 runs - node v18.16.1 - MacBook Pro M1 Max - macOS 13.14.1

```
Duration: 9 - 16 ms | average: 13 ms (v: 11.1.0)
Duration: 7 - 16 ms | average: 13 ms (v: 12.2.0)
Duration: 8 - 17 ms | average: 13 ms (v: 13.2.1)
```
