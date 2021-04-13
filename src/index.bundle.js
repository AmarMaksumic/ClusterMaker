/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\nvar fileSelector = document.getElementById('csv-input');\r\nfileSelector.addEventListener('change', function (event) {\r\n    var fileList = event.target.files;\r\n    console.log(fileList);\r\n});\r\nfunction readCSV(file) {\r\n    var reader = new FileReader();\r\n    reader.onload = function (event) {\r\n        if (event.target) {\r\n            var data = event.target.result;\r\n            console.log(data);\r\n        }\r\n    };\r\n    reader.readAsText(file);\r\n}\r\nvar map;\r\nvar center = { lat: 30, lng: -110 };\r\nfunction labelMap(locations) {\r\n    var map = new google.maps.Map(document.getElementById(\"map\"), {\r\n        zoom: 3,\r\n        center: center\r\n    });\r\n    // Create an array of alphabetical characters used to label the markers.\r\n    var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\r\n    // Add some markers to the map.\r\n    // Note: The code uses the JavaScript Array.prototype.map() method to\r\n    // create an array of markers based on a given \"locations\" array.\r\n    // The map() method here has nothing to do with the Google Maps API.\r\n    var markers = locations.map(function (location, i) {\r\n        return new google.maps.Marker({\r\n            position: location,\r\n            label: labels[i % labels.length],\r\n        });\r\n    });\r\n    // Add a marker clusterer to manage the markers.\r\n    // @ts-ignore MarkerClusterer defined via script\r\n    new MarkerClusterer(map, markers, {\r\n        imagePath: \"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m\",\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://clustermaker/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;