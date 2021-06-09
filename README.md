# @imtbl/design-system

A repository to house all design system components utilised inside of Immutable GUI

## prerequisites

This library assumes the following peer dependencies are installed in the consumer application:

```
"react": "^17.0.2",
"react-dom": "^17.0.2",
"bignumber.js": "^9.0.1",
```

## install

```
npm install @imtbl/design-system
```

## run demo

```
npm ci; npm run start:demo
```

## build

```
npm run build:lib
```

## build watch

```
npm run build:lib:watch
```

## run tests (incl eslint + stylelint + types + cypress + coverage)

```
npm run test
```

## run only unit tests in "fast" mode (no videos + no coverage)

```
npm run test:fast
```

## develop/edit cypress tests

```
npm run test:watch
```

## further info

You can read [further details](https://immutable.atlassian.net/wiki/spaces/APOLLO/pages/827621392) on confluence.

## problems pushing to master

sometimes i get the error:

```
error: dst refspec refs/heads/master matches more than one
```

if this happens: do: `git ls-remote origin` and look for the dupe ref (usually its a tag named the same as a branch). Delete dupe tag ref, and then you should be good to go.
