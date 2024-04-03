# React Image Selector App

A TypeScript app to display an input array of images as a grid using Material UI and allow selection using React state. 

## How to use

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## More Information

- `src/App.tsx` contains the code for the app - it imports the ImageSelectorComponent which contains the bulk of the code. This is how you would use the image selector component.
- `src/ImageSelector.tsx` contains a basic image selector - it takes an array of images, displays them in a grid using Material UI and stores the selected image in state.

## Packages I've looked at 

- I've checked out `react-image-picker` which looked v useful, but it's built on an old version of React and hasn't been updated in 7 years.
- There's also `react-selectable` which allows individual or group selection of items but it's not very commonly used and hasn't been updated in 4 years. Also, the demo I found that uses it just doesn't work. 
- There's also `react-selectable-fast` based upon `react-selectable` which allows a React component (or group of components) to be selectable via mouse. It eliminates render during selection caused by state updates of SelectableGroup in react-selectable. But it also hasn't been updated in 4 years and to select something you have to draw a box over it which is weird? It's more commonly used than react-selectable by the looks of it though. 