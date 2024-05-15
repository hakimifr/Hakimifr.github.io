function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

while (true) {
  let randVal1 = Math.random();
  let randVal2 = Math.random(); 
  let randVal3 = Math.random();
  let randVal4 = Math.random();
  let randVal5 = Math.random();
  let randVal6 = Math.random();

  document.getElementById("temp").innerText = 30 + randVal1 + randVal2 + randVal3;

  document.getElementById("seabed").innerText = 100 + randVal4 + randVal5 + randVal6;

  sleep(1000);
}
