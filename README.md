# emailer

This app uses Sendgrid and Mailgun APIs to send an email to a recipient. Sendgrid is the default API used, and there is a failover mechanism that will use Mailgun in case of failure with Sendgrid. Written in React and Node.

## Set up Sendgrid and Mailgun Accounts
- Go to [Sendgrid](https://sendgrid.com/) and [Mailgun](https://www.mailgun.com/) to create free accounts for each
- Create API Keys for both Sendgrid and Mailgun, and get the domain from mailgun

## Add API Keys
- Inside of routes, find the mg_email.js and sg_email.js files
- In sg_email.js, add the API key for Sendgrid in this line: `sgMail.setApiKey('')`
- In mg_email.js, add the API key for Mailgun in this line: `var api_key = ''`
- Also in mg_email.js, add the domain for Mailgun in this line: `var DOMAIN = ''`

## To run this app
- Go to the root directory
- Run `npm install`
- Run `npm run dev`
- Go to localhost:3000
