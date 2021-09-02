# install cypress
    $ yarn add -D cypress

# setup cypress
    - In package.json add `"test:e2e": "cypress open",`
    - Optional, you can edit cypress.json
    - Run: `$ yarn test:e2e`
    - Cypress dialog will show

# cy is not defined
    - Install: `$ yarn add -D eslint-plugin-cypress`
    - Create .eslintrc.json, then adding config

# what is @testing-library/cypress used for?
    Extends Cypress'cy command, such as: findBy, findAllBy
    Note: you must import it into cypress/support/commands.js