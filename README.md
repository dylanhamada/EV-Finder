# EV Finder

A full-stack app built with React that helps users find the right full-electric vehicle for them. Users can take a questionnaire, browse vehicles, or compare two side-by-side.

## Introduction

After completing my [previous app](https://github.com/dylanhamada/blog-project), which focused on combining React with HTTP requests to a database, I decided to build a new app to implement what I learned about React-Router and Redux.

In the previous year, I had purchased a new car, and wished there was an app to help me find and compare potential candidates. Eventually this became the kernel of an app idea, with a focus on electric vehicles.

## Project Status

I am currently designing the app and basic functionality on Figma. Previously, I completed the app wireframe and functionality.

The current iteration of the [design](https://www.figma.com/file/LiZL6BMFyBA22YfizVdSvj/EV-Finder-Layout-Greyscale?node-id=0%3A1) can be viewed on Figma.

The current iteration of the [wireframe](https://excalidraw.com/#json=5689566321180672,aDVm3j7vVG_IXqRH0fvtIA) can be viewed on Excalidraw.

A record of notable changes can be found in the CHANGELOG file.

## App Overview

1. A questionnaire that provides users with a vehicle recommendation
   1. Present user with qualities that can be arranged by importance
   2. Secondary recommendations available
2. Vehicle browser with various filters
   1. Vehicles can be selected and their relevant info displayed
3. Two vehicles can be compared side-by-side, with highlighting of superior/inferior stats
4. User authentication allows for saved favourites and comparisons

## Technologies

I plan to use the following tech stack:

- React
    - React Router
    - Redux
    - React Drag and Drop
- Firebase
    - Auth
    - Firestore