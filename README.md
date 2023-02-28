# Welcome to this ArK Coding Challenge

The aim of this case is to simulate a code review and to discuss some code in an informal setting, not to test specific technologies or syntaxes.

## The Case

There's two components to the case, one is the server, which you shouldn't have to do anything with, and the other one is the client which is a [Vite](https://vitejs.dev/) project. The client is very bare-bones, by design, we leave it up to you how you want to build it.

The server has two endpoints, `/ads-spend-data` and `/purchase-data`, which queries BigQuery and returns some data.

Your assignment is to create React components that fetches the data and visualizes it in a performant, responsive, and preferably beautiful way.

To get you started, the `DataFetchDemo.tsx` file includes a shell of an example React component which fetches data from the server and
`LineChartExample.tsx` has a trivial chart with hard-coded data, to serve as a basic example if you haven't worked with visualizations before. It's **not** a requirement to use either `axios` or `chart.js`.

Please spend 3-4 hours to building useful functionality for visualizing the data, remember to think about responsiveness and performance. Try to come up with ways of making the data interesting to the user of the website.

You can install any dependency you want but be aware that we will require you to reason about your choices.

You do not have to worry about implementing tests for this case, however, do think about it when implementing your components.

## Pre-requisites

A `bigquery_service_account.json` file in the root directory (you should have gotten access to download this file together with the case).

Latest Node LTS version.

## Getting Started

Open two terminal windows and run one command in each:

```bash
yarn server
```

```bash
yarn dev
```

If you rather want to use npm you can run `npm install` and then `npm run server` and `npm run dev`.

You're good to go!

When you're done, submit your github repo via email to ArK.

Good luck!
