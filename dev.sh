#!/usr/bin/env bash
export PATH="$PWD/node:$PATH"
exec "$PWD/node/node" "$PWD/node_modules/vitepress/bin/vitepress.js" dev "$PWD/docs" --host
