export default {
  unregisterUsers(state){
    return state.users.filter(user => { return !user.registered; })
  },
  registrations(state){
    return state.registrations;
  },
  totalRegisterations(state){
    return state.registrations.length;
  }
}
