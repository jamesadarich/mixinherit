import { Expect, Test, TestFixture } from "alsatian";
import Mixin from "../";

class A {
    aFunction() {
        console.log("a");
    }
}

class B {

    field = "field value";

    get property() {
        return "property value";
    }

    bFunction() {
        console.log("b");
    }
}

class C extends Mixin(A, B) implements A, B {
    field: string;
    property: string;
    aFunction: () => {}
    bFunction: () => {}
    cFunction() {
        console.log("c");
    }
}

@TestFixture("mixin tests")
export default class MixinTests {

    @Test("functions exist")
    public extensionHasFunctions() {
        const test = new C();

        Expect(test.aFunction).toBeDefined();
        Expect(test.bFunction).toBeDefined();
        Expect(test.cFunction).toBeDefined();
    }

    @Test("functions are the same")
    public extensionHasSameFunctions() {
        const test = new C();

        Expect(test.aFunction).toBe(new A().aFunction);
        Expect(test.bFunction).toBe(new B().bFunction);
    }

    @Test("properties exist")
    public extensionHasProperties() {

        const test = new C();

        Expect(test.property).toBeDefined();
    }

    @Test("properties are the same")
    public extensionHasSameProperties() {

        const test = new C();

        Expect(test.property).toBe(new B().property);
    }

    @Test("fields exist")
    public extensionHasFields() {

        const test = new C();

        Expect(test.field).toBeDefined();
    }

    @Test("fields are the same")
    public extensionHasSameFields() {

        const test = new C();

        Expect(test.field).toBe(new B().field);
    }
}