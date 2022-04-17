# react-ssr-old-way

Demenstrating how ssr works in prior react(before 18).

## Prerequisite

- github personal token

For listing the repos and repo detial, you have to inject this token in `.env` at the root folder, please refer to sample in `.sample.env`.

### Get started

`Install dependencies`:

```
npm i
```

`build client`:

```
npm build
```

`build server and start`:

```
npm run dev
```

### Defects

The defects below are known chanllenges for developers when implementing ssr via react17. You can take a look at how these are be resolved in `react-ssr-new-way`.

- ssr can take a quite long time if preparing the server data is really time-consuming. It may be caused by only one request but all your rending have to wait for its completion. `while screen` last very long in client side when it occurs.

- Loading big chunk caused by complex components will stop the user interaction with your dry page without any reminder.

- React17 doesn't support Suspense in server side, you have to implement the logic for spinner by your own and it must happen in client side. Extra effort of refactoring your code towards this way is unavoidable and annoying.