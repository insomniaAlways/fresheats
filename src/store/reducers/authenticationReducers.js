import { AsyncStorage } from "react-native";

const authValidations = (state={ isAuthenticated: false}, actions) => {
  switch (actions.type) {
    case 'VALIDATED_AUTHENTICATION':
      let value = actions.payload.phoneNumber.toString()
      AsyncStorage.setItem('userToken', value.trim())
      return { isAuthenticated: value.trim() ? true : false }
    case 'CHECK_AUTHENTICATION':
      return AsyncStorage.getItem('userToken').then(() => {
        return { isAuthenticated: userToken.trim() ? true : false }
      })
    case 'SET_AUTHENTICATION': 
      return { isAuthenticated: actions.payload }
    default:
      return state;
  }
}

export default authValidations;