export class InputCell {
  constructor(v) {
    this.handlers = [];
    this.setValue(v);
  }

  setValue(v) {
    this.value = v;
    this.callHandlers();
  }

  onChanged(handler) {
    this.handlers.push(handler);
  }

  callHandlers() {
    this.handlers.forEach(handler => handler(this));
  }
}

export class ComputeCell {
  constructor(inputs, fn) {
    this.fn = fn;
    this.setValue(fn(inputs));
    inputs.forEach(input => {
      input.onChanged(() => {
        this.setValue(fn(inputs));
      });
    });
  }

  setValue(v) {
    this.value = v;
  }
}

export class CallbackCell {
  constructor() {}
}
