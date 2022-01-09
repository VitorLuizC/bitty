#!/bin/bash

set -o errexit

ROOT_DIR="$(dirname $(dirname $0))"

PACKAGE_NAME="$PNPM_PACKAGE_NAME"

# It's the package name without "@bitty/"
PACKAGE_DIR_NAME="${PACKAGE_NAME:7}"

PACKAGE_DIR="$ROOT_DIR/packages/$PACKAGE_DIR_NAME"

cd $PACKAGE_DIR

PACKAGE_VERSION="$(node -p 'require("./package.json").version')"

npm version $1 \
  --commit-hooks false \
  --git-tag-version false

sleep 2

git add package.json

sleep 2

GIT_DIR="$(git rev-parse --show-toplevel)"

sleep 2

if [[ $GIT_DIR == $PACKAGE_DIR ]]; then
  git commit -m "🔖 bump to version $PACKAGE_VERSION"
else
  git commit -m "🔖 ($PACKAGE_DIR_NAME): bump to version $PACKAGE_VERSION"
fi

sleep 2
