import { Injectable } from '@nestjs/common';

export const DEP = Symbol();
export class Dep {}

// @Injectable()
export class Service {
  constructor(readonly dep: Dep) {}
  getDep() {
    return this.dep;
  }
}
