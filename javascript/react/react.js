export class InputCell {
  constructor(v) {
    this.handlers = [];
    this.setValue(v);
  }

  setValue(v) {
    this.value = v;
    this.callHandlers();
  }

  addCallback(handler) {
    this.handlers.push(handler);
  }

  callHandlers() {
    this.handlers.forEach(handler => handler(this));
  }
}

export class ComputeCell extends InputCell {
  constructor(inputs, fn) {
    super(inputs);
    this.fn = fn;
    this.setValue(fn(inputs));
    inputs.forEach(input => {
      input.addCallback(() => {
        this.setValue(fn(inputs));
      });
    });
  }
}

export class CallbackCell {
  constructor(fn) {}
}
