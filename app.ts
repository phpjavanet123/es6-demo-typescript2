// app.ts
import {Hero2} from './app2';
import {sum, product} from './app3';

export class Hero {
    id: number;
    name: string;

    constructor(name) {
        this.name = name;
    }

    myName()
    {
        return this.name;
    }
  }

  let hero = new Hero('krunal');
  console.log(hero.myName());
  
  
    let hero2 = new Hero('krunal222');
  console.log(hero2.myName());
  
  
  console.log(sum(2, 3));