## How to contribute

### Code of Conduct

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

### Semantic Versioning

Purifycss uses [SemVer](http://semver.org/) for versioning. We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes.

### Sending a Pull Request

Before submitting a pull request, please make sure the following is done:

Fork the repository and create your branch from master. The name of the branch should reflect the changes made.
If you've added code that should be tested, add tests!
If you've changed APIs, update the documentation.
1. Ensure the test suite passes (npm test).
2. Make sure your code lints (npm run lint).
3. Format your code with prettier (npm run prettier).
4. Run the Flow typechecks (npm run flow).

### Development Workflow

After cloning React, run npm install to fetch its dependencies. Then, you can run several commands:

npm run lint checks the code style.
npm test runs the complete test suite.
npm test -- --watch runs an interactive test watcher.
npm test <pattern> runs tests with matching filenames.
npm run flow runs the Flow typechecks.
npm run build creates a build folder with all the packages.
We recommend running npm test (or its variations above) to make sure you don't introduce any regressions as you work on your change. However it can be handy to try your build of React in a real project.

