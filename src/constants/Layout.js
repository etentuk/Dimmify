import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  height,
  width,
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
