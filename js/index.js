let counter = 0;
const getData = () => {
  //calls API and get data
  console.log("Fetching Data...", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};
const debounceFunction = debounce(getData, 300);
