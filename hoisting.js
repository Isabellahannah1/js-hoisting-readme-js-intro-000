function callMe(){
  return "maybe";
}

function sayMyName(){
  console.log("Kristin");
}

function crazy() {
  return () => {
    return () => {
      console.log('hey!!!')
    }
  }
}
 
crazy()()()