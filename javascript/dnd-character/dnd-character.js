export const abilityModifier = (stat) => {
  if (stat < 3) { throw new Error('Ability scores must be at least 3'); }
  if (stat > 18) { throw new Error('Ability scores can be at most 18'); }

  return Math.floor((stat - 10) / 2);
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    let rolls = [Math.floor(Math.random()*4)+3, 
                Math.floor(Math.random()*4)+3, 
                Math.floor(Math.random()*4)+3,
                Math.floor(Math.random()*4)+3]; 
    rolls.sort((a,b) => {return a-b})
    return rolls[1] + rolls[2] + rolls[3];   
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}