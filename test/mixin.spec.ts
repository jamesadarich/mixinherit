import { Expect, Test, TestFixture } from "alsatian";
import Mixin from "../";

class A {
    aFunction() {
        console.log("a");
    }
}

class B {

    field = "test";

    get property() {
        return "test";
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

    @Test("properties exist")
    public extensionHasProperties() {

        const test = new C();

        Expect(test.property).toBeDefined();
    }

    @Test("fields exist")
    public extensionHasFields() {

        const test = new C();

        Expect(test.field).toBeDefined();
    }
}