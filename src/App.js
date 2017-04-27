import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-sketchapp';

import styles from './styles';

const App = () => (
  <View style={styles.container} name="Wrapper">
    <Text style={styles.text}>Edit src/App.js to see your changes.</Text>
  </View>
);

export default App;
