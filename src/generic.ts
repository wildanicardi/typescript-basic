//generic

function mydata<T>(params: T) {
  return params;
}
console.log(mydata("wildan"));

const dataMe = <T>(params: T) => {
  return params;
};
console.log(dataMe(123));
