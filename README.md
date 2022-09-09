# Welcome to this ArK Coding Challenge

The aim of this case is to simulate a code review and to discuss some code in an informal setting, not to test specific technologies or syntaxes.

## The challenge

The `server.js` file includes two endpoints `/ads-spend-data` and `/purchase-data` which queries BigQuery and returns some stats.

Create React components that fetches the data and visualizes it in a snappy and responsive way.

To get you started, the `AdsSpendGraph.jsx` file includes a shell of an example React component which fetches data from the server.

Please spend 2-3 hours to show off your skills by building useful functionality for browsing the data. Try to come up with ways of making the data interesting to the user of the website.

The project includes a `Chart.js` setup (see `LineGraphExample.tsx`). You are however free to use another library for visualizing the data if you would want to.

You're allowed to install any node packages you want.

## Pre-requisites

A `bigquery_service_account.json` file in the root directory (you should have gotten access to download this file together with the case).

Latest Node version (e.g. by running `nvm install --lts`).

## Getting Started

Open two terminal windows and run one command in each:

```bash
node server
```

```bash
yarn start
```

You're good to go!

When you're done, submit your github repo via email to ArK.

Good luck!
