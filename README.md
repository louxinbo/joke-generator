### Assignment

Your task is to create a small web application to load list of jokes from a public API.

### Requirements
- User should be able to filter jokes by category: programming, general, all
- User should be able to toggle to display one joke at a time, or 10 jokes at a time
- Refresh button to load more jokes with the filtered categories (eg. if user wants to see only programming jokes)

### Optional requirements
Only complete if you have time, you won’t be penalized if you didn’t do this section.
- add an icon / checkbox to save users’ favorite joke to a local storage
- Add a page to display saved jokes

### API Endpoint
Get all (unfiltered) jokes:
- single
  https://official-joke-api.appspot.com/jokes/random
- 10 jokes https://official-joke-api.appspot.com/jokes/ten

Get general (non-programming) jokes:
- single
  https://official-joke-api.appspot.com/jokes/general/random
- 10 jokes https://official-joke-api.appspot.com/jokes/general/ten

Get programming jokes:
- single
  https://official-joke-api.appspot.com/jokes/programming/random
- 10 jokes https://official-joke-api.appspot.com/jokes/programming/ten

### Technical Requirements
- Use Typescript
- Choose any framework you are familiar with between React, Angular, or vanilla Javascript / TypeScript
- Include unit testing - Pick one requirement and write 2+ test cases.
- Documentation - Update `Developers.md` with information you'd give to other members of your team about how to start and run the solution, and anything else you'd like us to know

### Running the app
In this project you will find an empty react application.
We've included [material UI](https://mui.com/material-ui/getting-started/overview/) which you can optionally use if you prefer (completely optional).
#### Setup
```
# Install all Dependencies
yarn install
```
#### Running the app
```
yarn start
```

#### Setup


### Submission
Send us a public git repository link, or for private repository share the access with carini.ellen@zip.co


### Recommendations
We want to see best practices you would have applied to production code.
If you run out of time to implement best practices, leave a descriptive comment of what you would have done given more time.

Focus on the most critical requirement to ensure you don't run out of time
