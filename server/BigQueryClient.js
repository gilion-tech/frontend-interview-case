// Imports the Google Cloud client library
import { BigQuery } from "@google-cloud/bigquery";

const options = {
  keyFilename: "./bigquery_service_account.json",
  projectId: "ark-interview-case",
};

const bigqueryClient = new BigQuery(options);

export const getAdsSpend = async () => {
  const query = `SELECT *
    FROM \`ark-interview-case.jewelry_store.ads_spend\``;

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery
  const queryOptions = {
    query: query,
    location: "EU",
  };

  // Run the query as a job
  const [job] = await bigqueryClient.createQueryJob(queryOptions);

  // Wait for job to complete and get rows.
  const [rows] = await job.getQueryResults();

  return rows;
};

export const getPurchases = async () => {
  const query = `SELECT *
    FROM \`ark-interview-case.jewelry_store.ecommerce_purchases\``;

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery
  const queryOptions = {
    query: query,
    location: "EU",
  };

  // Run the query as a job
  const [job] = await bigqueryClient.createQueryJob(queryOptions);

  // Wait for job to complete and get rows.
  const [rows] = await job.getQueryResults();

  return rows;
};
