# Welcome to this Gilion Coding Challenge

The aim of this case is to simulate a code review and to discuss some code in an informal setting, not to test specific technologies or syntaxes.

## The Case

There's two components to the case, one is the server, which you shouldn't have to do anything with, and the other one is the client which is a [Vite](https://vitejs.dev/) project. The client is very bare-bones, by design, we leave it up to you how you want to build it.

The server has one endpoint, `/marketing-vs-new-customer-data`, which returns some data for you to use.

Your assignment is to create React components that fetches the data and visualizes it in a performant, responsive, and preferably beautiful way.

To get you started, the `DataFetchDemo.tsx` file includes a shell of an example React component which fetches data from the server and
`LineChartExample.tsx` has a trivial chart with hard-coded data, to serve as a basic example if you haven't worked with visualizations before. It's **not** a requirement to use either `axios` or `chart.js`.

Please spend 3-4 hours to building useful functionality for visualizing the data, remember to think about responsiveness and performance. Try to come up with ways of making the data interesting to the user of the website.

## Data explanation

The dataset given is a time series of new customer and marketing spend. For each data point you are given the following properties.

- is_forecast: Boolean describing if the data is a forecasted value or not
- month: The date of the data point
- country_code: The country
- new_customer: Number of new customers that month
- marketing_spend: Amount spent on marketing that month. (In euro)

## Pre-requisites

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

When you're done, submit your github repo via email to Gilion.

Good luck!
