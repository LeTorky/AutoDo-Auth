class abstractClass {
  constructor(classType) {
    this.className = classType.name;
    if (this.className == this.constructor.name)
      throw TypeError(
        `Cannot instantiate an instance from ${this.className} abstract class.`
      );
  }

  abstractMethodFactory(fn) {
    throw TypeError(
      `Cannot invoke abstract function ${fn} of type ${this.className} abstract class.`
    );
  }

  static staticAbstractMethodFactory(fn, classType) {
    throw TypeError(
      `Cannot invoke abstract function ${fn} of type ${classType.name}.`
    );
  }
}

export default abstractClass;
