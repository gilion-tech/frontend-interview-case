# Welcome to ArK's React Front-end Coding Challenge

The aim of this case is to simulate a code review and to discuss some code in an informal setting, not to test specific technologies or syntaxes.

## The challenge

The `server.js` file includes two endpoints `/ads-spend-data` and `/purchase-data` which queries BigQuery and returns some stats.

Create React components that fetches the data and visualizes it. One of the endpoints returns a bigger data set: feel free to optimize the data fetching to make this visualization more responsive.

To get you started, the `AdsSpendGraph.jsx` file includes a shell of an example React component which fetches data from the server.

Please spend a couple of hours to show off your skills by building some useful functionality for browsing this data. Try to come up with ways of making the data interesting to the user of the website.

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
npm run start
```

You're good to go!

When you're done, submit your github repo via email to ArK.

Good luck!