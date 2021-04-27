import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';

const myAppConfig = {

  "aws_project_region": "ap-south-1",
  "aws_appsync_graphqlEndpoint": "https://ufk2s7nctvb6xjb6lquedxlwke.appsync-api.ap-south-1.amazonaws.com/graphql",
  "aws_appsync_region": "ap-south-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-4zinox3ooba3tbbsucdsfhxzj4",

}

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
