import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-primitives';

import styles from './styles';

const App = () => (
    <View style={styles.container} name="Wrapper">
      <Text style={styles.text}>Hello World</Text>
    </View>
);

export default App;
