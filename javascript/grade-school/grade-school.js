export class GradeSchool {

  constructor() {
    this._roster = new Map();
  }

  roster() {
    let ror = {};
    for(let k of this._roster.keys()) {
      ror[k] = this._roster.get(k);
    }
    return ror;
  }

  add(name, grade) {
    if (this._roster.has(grade)) {
      let curr = this._roster.get(grade);
      curr.push(name);
      curr.sort();
      this._roster.set(grade, curr);
    }
    else {
      this._roster.set(grade, [name]);
    }
  }

  grade(grade) {
    if (this._roster.has(grade)) { return this._roster.get(grade).sort();}
    return [];
  }
}
