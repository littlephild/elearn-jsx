export const selectUser = (user) => {
   console.log("You clicked on ["+user.fullName+"]");
   return {
     type: "USER_SELECTED",
     payload: user
   }
}
