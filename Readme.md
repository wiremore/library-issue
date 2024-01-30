# Building a consumable library with `tsup` and using it in Next.js

## The goal

I want to build a small React based package that can be installed in a Next.js app

## The current state

I've got a working [tsup](https://tsup.egoist.dev/) config that creates an ESM build of my library. The code is fully functional and can be tested in a Storybook environment.

## The issue

Once I install the library in my Next.js app and try to import it, I get an error:

```
Unhandled Runtime Error
TypeError: Cannot read properties of null (reading 'useState')
```

## How to reproduce

```
git clone git@github.com:wiremore/library-issue.git
cd library-issue/app
yarn install
yarn dev
```

## Worth mentioning:

The original setup is heavily based on https://github.com/TimMikeladze/tsup-react-package-starter
