import HashMap from './HashMap.js';

const hm = new HashMap();
for (let i = 0; i < 5; i++) {
  hm.set(i, i+100);
}
console.log('-----TEST length----');
console.log(hm.length());
console.log('-----TEST keys----');
console.log(hm.keys());
console.log('-----TEST values----');
console.log(hm.values());
console.log('-----TEST entries----');
console.log(hm.entries());

console.log('-----TEST get----');
console.log('get returns value of given key or null')
for (let i = 0; i < 5; i++) {
  console.log(`get(${i+1}) => ${hm.get(i+1)}`);
}
console.log('-----TEST has----');
console.log('has returns true or false based on if key is in map')
for (let i = 0; i < 5; i++) {
  console.log(`has(${i+1}) => ${hm.has(i+1)}`);
}
console.log('-----TEST remove----');
console.log(`remove(${1}) => ${hm.remove(1)}`);
console.log(`remove(${3}) => ${hm.remove(3)}`);

console.log('-----TEST length----');
console.log(hm.length());
console.log('-----TEST keys----');
console.log(hm.keys());
console.log('-----TEST values----');
console.log(hm.values());
console.log('-----TEST entries----');
console.log(hm.entries());

console.log('-----TEST resize----');
for (let i = 5; i < 30; i++) {
  hm.set(i, i+100);
}

console.log('-----TEST length----');
console.log(hm.length());
console.log('-----TEST keys----');
console.log(hm.keys());
console.log('-----TEST values----');
console.log(hm.values());
console.log('-----TEST entries----');
console.log(hm.entries());

console.log('-----TEST clear----');
hm.clear();
console.log('-----TEST length----');
console.log(hm.length());
console.log('-----TEST keys----');
console.log(hm.keys());
console.log('-----TEST values----');
console.log(hm.values());
console.log('-----TEST entries----');
console.log(hm.entries());

