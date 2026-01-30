let sample = {
  "a": [21321],
  "b.c": "adssdads",
  "b.def": ["dasdas"],
  "x.fff": 213123,
  "x.dddd": ["dsadasdsa", "adsasdas"],
  "x.fdds.sss": "das"
}

function unflatten(obj) {
  const result = {};

  for (const key in obj) {
    const keys = key.split('.');
    let current = result; // ! just a refernce is added ⚡⚡⚡

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];

      if (i === keys.length - 1) {
        // Last key - assign the value
        current[k] = obj[key];
      } else {
        // Not last key - create nested object if doesn't exist
        current[k] = current[k] || {};
        current = current[k];
      }
    }
  }

  return result;
}

console.log(unflatten(sample))

// final =  {a: [21321],b: {'c': 'adssdads', def:
//  ['dasdas']}, x: {fff: 213123, dddd: ['dsadasdsa','adsasdas'], fdds: {sss:'das'}}}
