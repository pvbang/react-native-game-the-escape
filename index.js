/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Index from './src/views/index';
// import Index from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Index);