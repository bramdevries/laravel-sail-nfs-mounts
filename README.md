# Benchmarks

This repository is a default Laravel installation and is used to test performance of Docker across various platforms and configurations, using Laravel Sail. 

## Results

|         | Native | Sail (macOS) | Sail + NFS Mount (macOS) | Sail (windows) | Sail (macOS - Delegated) | Sail (macOS - cached) | Sail - Experimental Virtualization | Sail - Mutagen | Sail (macOS + osxfs) |
| ------- | ------ | ------------ | ------------------------ | -------------- | ------------------------ | --------------------- | ---------------------------------- | -------------- | -------------------- |
| API     | 8.76   | 47.72        | 32                       | 15.78          | 39.27                    | 39.95                 | 156.63                             | 17.59          | 85.06                |
| Welcome | 12.77  | 43.13        | 36                       | 13.33          | 40.02                    | 39.56                 | 247.74                             | 18.15          | 89.06                |

## Running the benchmarks

In order to run the benchmarks you will first have to set up the project first:

```bash
cp .env.example .env
sail up
sail artisan key:generate
sail artisan migrate:fresh --seed
npm i
npm run production
```

There are two benchmarking scripts that can be run:

1. `npm run benchmarks:welcome`: Performs a request to the default welcome screen.
2. `npm run benchmarks:api`: Performs a request to an API endpoint that returns a user looked up through the database.
