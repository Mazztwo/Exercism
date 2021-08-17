export class LinkedList {
  constructor()
  {
    this._count = 0;
    this._head = null;
    this._tail = null;
  }

  push(value) {
    let temp = {value: value, next: null};

    if (this._count === 0) {
      temp.prev = null;
      this._head = temp;
      this._tail = temp;
    }
    else {
      temp.prev = this._tail;
      this._tail.next = temp;
      this._tail = temp;
    }

    this._count++;
  }

  pop() {
    let val = this._tail.value
    this._count--;
    if (this._count === 0) {
      this._head = null;
      this._tail = null;
    }
    else {
      this._tail = this._tail.prev
      this._tail.next = null;
    }
    return val;
  }

  shift() {
    let val = this._head.value
    this._count--;

    if (this._count === 0) {
      this._head = null;
      this._tail = null;
    }
    else {
      this._head = this._head.next;
      this._head.prev = null;
    }
    return val;
  }

  unshift(value) {
    let temp = {value: value, prev: null};

    if (this._count === 0) {
      temp.next = null;
      this._head = temp;
      this._tail = temp;
    }
    else {
      temp.next = this._head;
      this._head.prev = temp;
      this._head = temp;
    }

    this._count++;
  }

  delete(value) {
    let curr = this._head;
    while (curr !== null) {
      if (curr.value === value) {
        if (this._count === 1) {
          this._head = null;
          this._tail = null;
          this._count--;
          break;
        }
        else if (this._head.value === value) {
          this._head = this._head.next;
          this._count--;
          break;
        }
        else if (this._tail.value === value) {
          this._tail = this._tail.prev;
          this._count--;
          break;
        }
        else {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
          this._count--;
          break;
        }
      }
      curr = curr.next;
    }
  }

  count() {
    return this._count;
  }
}