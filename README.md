# Preact Material Design
A set of UI components that follow the [Material Design Guidelines](https://material.io/guidelines/)

## Install
```sh
yarn add preact-material-design
```
_or_
```sh
npm i -S preact-material-design
```

## Usage

(More details coming soon)

### Code
To use any given component, simply import it,
and then use it like any other preact component/
```jsx
import { Button } from 'preact-material-design';

() => <Button>Primary Button</Button>
```

### Styles
You must also include the css for the component which you can do per component,
or simply include the full stylesheet.
```html
<link rel="stylesheet" href="node_modules/preact-material-design/dist/styles.css">
```

If using sass, you can import the sass directly from the src folder.
```scss
@import '~preact-material-design/src/styles';
```

Note: These paths and method are likely to change in the future.

## Theming
There is very limited theming support right now,
and the situation will improve as this module develops.

For now, you should be able to override the sass variables before importing the
preact-material-design styles.

E.g.
```scss
$pmd-color-primary: #FF5722;

@import '~preact-material-design/src/styles';
```
