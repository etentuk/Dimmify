import React from 'react';
import { Image } from 'react-native';

const Icon = ({ size, uri }) => (
  <Image source={{ uri }} style={{ height: size, width: size }} />
);

Icon.defaultProps = {
  size: 20,
};

export default Icon;
