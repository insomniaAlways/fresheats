export const validate_authentication = (authData) => {
  return {
    type: 'VALIDATED_AUTHENTICATION',
    payload: authData
  }
}

export const check_authentication = {
  type: "CHECK_AUTHENTICATION"
}

export const set_authentication = (isAuthenticated) => {
  return {
    type: "SET_AUTHENTICATION",
    payload: isAuthenticated
  }
}