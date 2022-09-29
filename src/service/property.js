const Types = {
  CATEGORY: "CATEGORY",
  CHANNEL: "CHANNEL",
};

class Property {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  static get Types() {
    return Types;
  }
}

export default Property;
