# DEV
Primary terminal run this command:
yarn build-watch

Second terminal run the following commands:
cd playgorund
yarn start

For the card test on the playground (use animation_url): card-test?/510270/77/metadata/11155111/2/2

URL for the plyaground: http://localhost:3000/#/card-test?{app-host-name}/{communityId}/{collectionId}/metadata/{chainId}/1/1

- simply use the metadata url after the card test parameter

# DEPLOY
From the root folder!
increase version number in  package.json!
yarn build
commit&push to git

# PROCESSES
- Write the feature.
- Increase the version number.
- Run the build command.
- Update the master branch with the feature branch.
- Use the component in the corresponding project with the current version number.