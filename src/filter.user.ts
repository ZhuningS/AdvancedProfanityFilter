// ==UserScript==
// @name         Advanced Profanity Filter (Userscript)
// @description  A userscript to filter profanity fwrom webpages. This is experimental right now, and settings will be overridden when a new version is released. Please save your customizations externally or disable auto-updates of the script.
// @namespace    https://github.com/richardfrost/AdvancedProfanityFilter/wiki
// @version      1.0.0
// @downloadURL  https://raw.githubusercontent.com/richardfrost/AdvancedProfanityFilter/master/advanced-profanity-filter.user.js
// @author       Richard Frost
// @match        *://*
// @grant        none
// ==/UserScript==

import Domain from './domain.js';
import {Filter} from './lib/filter.js';
import Page from './page.js';

(function() {
  ////
  // Settings
  ////
  let settings = {
    "advancedDomains": [
      "reddit.com"
    ],
    "censorCharacter": "*",
    "censorFixedLength": 0,
    "defaultSubstitution": "censored",
    "defaultWordMatchMethod": 0,
    "defaultWordRepeat": false,
    "disabledDomains": [],
    "filterMethod": 1,
    "filterWordList": true,
    "globalMatchMethod": 3,
    "password": null,
    "preserveCase": true,
    "preserveFirst": true,
    "preserveLast": false,
    "showCounter": true,
    "substitutionMark": false,
    "words": {
      "ass": {
        "matchMethod": 0,
        "repeat": true,
        "sub": "butt"
      },
      "asses": {
        "matchMethod": 0,
        "repeat": false,
        "sub": "butts"
      },
      "asshole": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "jerk"
      },
      "bastard": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "jerk"
      },
      "bitch": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "jerk"
      },
      "cunt": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "explative"
      },
      "dammit": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "dangit"
      },
      "damn": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "dang"
      },
      "dumbass": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "idiot"
      },
      "fuck": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "fudge"
      },
      "hell": {
        "matchMethod": 0,
        "repeat": true,
        "sub": "heck"
      },
      "piss": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "pee"
      },
      "pissed": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "ticked"
      },
      "shit": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "crap"
      },
      "slut": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "tramp"
      },
      "tits": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "explative"
      },
      "whore": {
        "matchMethod": 1,
        "repeat": true,
        "sub": "tramp"
      }
    }
  };

  ////
  // End Settings
  ////
  settings.showCounter = false;
  settings.password = null;


  ////
  // Script
  ////
});