export const auth = {
  isAuthenticated
};

function isAuthenticated(){
  if(localStorage.getItem('authToken') !== null)
    return true;
  else {
    return false;
  }
}
