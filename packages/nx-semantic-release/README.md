# nx-semantic-release

An nx generator to create publishable node packages and libraries using [semantic-release](https://github.com/semantic-release/semantic-release).

`nx-semantic-release` modifies your existing library - or generates a new one with the `--libraryGenerator` parameter - to be setup with `semantic-release`.

## Usage

The most basic use case is when you have a library called `mylib` that you wish to setup `semantic-release`:

```sh
nx g @yuberto/nx-semantic-release:library mylib
```

Follow on-screen prompts to finalize the setup, and release!

## Prerequisites

Before you can start:

- Configure your Continuous Integration service to run [semantic-release](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/ci-configuration.md#run-semantic-release-only-after-all-tests-succeeded)
- Configure your Git repository and package manager repository [authentication](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/ci-configuration.md#authentication) in your Continuous Integration service

_[Source](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started)_

# Installation

To install the plugin:

```sh
npm i -D @yuberto/nx-semantic-release
```

# Library Generator

## Generate a Library

The following will create a library named `your-library-name` with default configuration to publish to both NPM and Github registries.

```sh
nx g @yuberto/nx-semantic-release:library your-library-name --branches=main
```

## Configuration

- `name` - Name of the semantic-release library to modify/generate.
- `branches` - Comma separated list of this repo's release branches.
- `prereleaseBranches` - Comma separated list of this repo's pre-release branches.
- `libraryGenerator` - Name of the library generator to use if library does not exist.
  - All mandatory parameters of customer library generator should be passed as command line arguments to `nx-semantic-release` as well.
- `directory` - Name of a custom directory inside the `libs` dir.
  - `--name=mylibrary --directory=mydirectory` will initiate the library in `libs/mydirectory/mylibrary`

**Note:** _For a complete list of parameters, please refer to the [schema](./src/generators/library/schema.json)._

<!-- # Workflow Generator

## Generate a workflow

The following will generate a Github workflow named `your-workflow-name` to publish your library on every push to branches `main` and `alpha`

```sh
nx g @yuberto/nx-semantic-release:workflow your-workflow-name --branch=main,alpha --ci=github
``` -->
