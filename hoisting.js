function callMe(){
  return "maybe";
}

function sayMyName(){
  console.log("Kristin");
}

function crazy() {
  return () => {
    return () => {
      return 'hey!!!'
    }
  }
}
 
crazy()()()