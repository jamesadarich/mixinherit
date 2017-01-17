export default function Mixin(...constructors: Array<new (...args: Array<any>) => any>): new (...args: Array<any>) => Object
{
  const mixedClass = class {
    constructor() {
      return constructors[0].apply(constructors[1].apply(this, arguments) || this, arguments);
    }
  };
  void Object.assign(mixedClass.prototype, constructors[0].prototype, constructors[1].prototype);
  for (const p in constructors[1]) if (constructors[1].hasOwnProperty(p)) mixedClass[p] = constructors[1][p];
  for (const p in constructors[0]) if (constructors[0].hasOwnProperty(p)) mixedClass[p] = constructors[0][p];

  return mixedClass;/*
    const base = () => { };
    
    constructors.forEach(ctor => {
       Object.getOwnPropertyNames(ctor.prototype).forEach(name => {
            base.prototype[name] = ctor.prototype[name];
        });
    });

    return (base as any);*/
}