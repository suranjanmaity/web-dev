function resolveAfter2Seconds() {
  return new Promise((resolve,rejected) => {
    setTimeout(() => {
      resolve('RESOLVED');
    }, 2000);

  });
}

async function asyncCall() {
  console.log('await calling');
  const result =await resolveAfter2Seconds();
  result
  .then(() => {console.log("await then");})
  .catch(() => {console.log("await catch")})
  .finally(() => {console.log("await finally")});

  console.log("await result");
  console.log(result);
}
asyncCall();

async function asyncCall2() {
  console.log('calling2');
  const result = resolveAfter2Seconds();
  result
  .then(() => {console.log("then2");})
  .catch(() => {console.log("catch2")})
  .finally(() => {console.log("finally2")});

  console.log("result2");
  console.log(result);
} 
asyncCall2();