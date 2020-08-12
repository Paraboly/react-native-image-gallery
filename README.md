<img alt="React Native Image Gallery" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/Paraboly/react-native-image-gallery)

[![Fully customizable & easy to use Image Gallery for React Native by Paraboly](https://img.shields.io/badge/-Fully%20customizable%20%26%20easy%20to%20use%20Image%20Gallery%20for%20React%20Native%20by%20Paraboly-lightgrey?style=for-the-badge)](https://github.com/Paraboly/react-native-image-gallery)

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-image-gallery.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-image-gallery)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-image-gallery.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/react-native-image-gallery)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Image Gallery"
        src="assets/Screenshots/React-Native-Image-Gallery-v3.gif" />
</p>

# Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-image-gallery
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-gallery-swiper": ">= 1.26.4"
```

# Usage

## Import

```jsx
import ImageGallery from "@paraboly/react-native-image-gallery";
```

## Fundamental Usage

```jsx
<ImageGallery
  initialPage={0}
  images={staticImages}
  backButtonImageSource={backButtonImage}
/>
```

## Data Format for Images

You **MUST** use this data format to use ImageGallery.

```jsx
const staticImages = [
  {
    uri:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
    dimensions: defaultDimensions,
    caption: "@seefromthesky",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
    dimensions: defaultDimensions,
    caption: "@yaaniu",
  },
];
```

# Configuration - Props

| Property              |   Type    |  Default  | Description                                                                                                                 |
| --------------------- | :-------: | :-------: | --------------------------------------------------------------------------------------------------------------------------- |
| Container             | component |   View    | set your own container wrapper for the background of the whole ImageGallery. Such as; `LinearGradient` or `ImageBackground` |
| ImageComponent        | component |   Image   | set your own component instead of Image for BackButton                                                                      |
| backButtonImageSource |   image   | undefined | set the back button image                                                                                                   |
| backButtonStyle       |   style   |  default  | change the back button's styling or override                                                                                |
| backButtonImageStyle  |   style   |  default  | change the back button image' styling or override                                                                           |
| onBackButtonPress     | function  | undefined | set your own logic when Back Button is pressed                                                                              |
| index                 |  number   |     1     | manage index of the images                                                                                                  |
| length                |  number   |     4     | manage lenght of the images                                                                                                 |
| totalPageTextStyle    |   style   |  default  | set or override your own styling for total page text                                                                        |
| currentPageTextStyle  |   style   |  default  | set or override your own styling for current page text                                                                      |

## Future Plans

- [x] ~~LICENSE~~

## Credits

Thank you so much [Unsplash](https://unsplash.com/) for every image on the example.

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Image Gallery is available under the MIT license. See the LICENSE file for more info.
