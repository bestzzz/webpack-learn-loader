console.log('111');

class F {
  constructor() {
    this.name = 'zz';
  };

  getName() {
    console.log(this.name);
  }
}

const f = new F();
f.getName();
