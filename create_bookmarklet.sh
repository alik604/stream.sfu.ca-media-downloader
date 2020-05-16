#!/usr/bin/env bash
{
	printf "javascript:"
	npx uglify-es downloader.js
} > bookmarklet.txt
