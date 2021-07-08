const socksQuantity = 9
const socksArray = [10, 20, 20, 10, 10, 30, 50, 10, 20]

/* O(N^2)*/
const  sockMerchant = (n, ar) => {
  const mapedArray = ar.map((element, index) => (
    {
      el: element,
      count: 0,
      index
    }
  ))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mapedArray[i].el === mapedArray[j].el && mapedArray[i].count <= 0 && mapedArray[j].count <= 0 && i !== j) {
        mapedArray[i].count++
        mapedArray[j].count++
      }
    }
  }

  const filteredArray = mapedArray.filter(element => element.count > 0)
  const pairOfSocks = filteredArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count
  }, 0)

  const parsedPairOfSocks = pairOfSocks / 2

  return parsedPairOfSocks
}

/* Using frequency count pattern O(N)*/
function sockMerchant(n, ar) {
  let storage = {};
  let pairs = 0;

  for (var i = 0; i < n; i++) {
      storage[ar[i]] = !storage[ar[i]];
      if (!storage[ar[i]]) pairs++;
  }
  
  return pairs;
}

console.log(sockMerchant(socksQuantity, socksArray))