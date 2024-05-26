require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubDAta = {
  login: "hussain-ahmed2",
  id: 111119731,
  node_id: "U_kgDOBp-Ncw",
  avatar_url: "https://avatars.githubusercontent.com/u/111119731?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hussain-ahmed2",
  html_url: "https://github.com/hussain-ahmed2",
  followers_url: "https://api.github.com/users/hussain-ahmed2/followers",
  following_url:
    "https://api.github.com/users/hussain-ahmed2/following{/other_user}",
  gists_url: "https://api.github.com/users/hussain-ahmed2/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hussain-ahmed2/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/hussain-ahmed2/subscriptions",
  organizations_url: "https://api.github.com/users/hussain-ahmed2/orgs",
  repos_url: "https://api.github.com/users/hussain-ahmed2/repos",
  events_url: "https://api.github.com/users/hussain-ahmed2/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hussain-ahmed2/received_events",
  type: "User",
  site_admin: false,
  name: "Hussain Ahmed",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 27,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2022-08-12T09:32:36Z",
  updated_at: "2024-04-26T04:15:39Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twiter", (req, res) => {
  res.send("HusainAhm3d");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login First</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Watch videos on YouTube</h2>");
});

app.get("/github", (req, res) => {
    res.json(githubDAta)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
