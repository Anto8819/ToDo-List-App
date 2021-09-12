const { default: axios } = require("axios");
const gitRemoteOriginUrl = require("git-remote-origin-url");
const GitUrlParse = require("git-url-parse");

module.exports = function report(data) {
  try {
    const { numTotalTests, numPendingTests, numFailedTests, numPassedTests } =
      data;
    if (numTotalTests > 0)
      gitRemoteOriginUrl()
        .then((remote) => {
          const { name: repo, owner: github } = GitUrlParse(remote);
          return axios.post(
            "https://learning.soyhenry.com/toolbox/checkpoint-report/report/check",
            {
              numTotalTestSuites: numTotalTests,
              numPassedTestSuites: numPassedTests,
              numFailedTestSuites: numPendingTests + numFailedTests,
              repo,
              github,
              githubsha: process.env.GITHUB_SHA,
            }
          );
        })
        .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
  data.success = true;
  return data;
};
