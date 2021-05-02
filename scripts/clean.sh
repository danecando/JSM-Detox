#!/usr/bin/env bash

echo "Cleaning Project"
watchman watch-del-all
rm -rf node_modules
npm cache clean --force
pod cache clean --all
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/npm-*
rm -rf $TMPDIR/metro-*
rm -rf ~/Library/Developer/Xcode/DerivedData
cd ios && rm -rf Pods Podfile.lock build && cd ../
cd android && rm -rf build && cd ../

echo "Re-installing"
yarn
cd ios && pod install && cd ../
yarn start -- --reset-cache