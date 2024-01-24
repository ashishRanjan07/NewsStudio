// ValidationComponent.js

import { Alert } from 'react-native';

const validateInput = (value, regex, errorMessage) => {
  if (value.trim() === '') {
    Alert.alert('Error', `Please enter your ${errorMessage}`);
    return false;
  }

  if (!regex.test(value)) {
    Alert.alert('Error', `Please enter a valid ${errorMessage.toLowerCase()}`);
    return false;
  }

  return true;
};

export default validateInput;