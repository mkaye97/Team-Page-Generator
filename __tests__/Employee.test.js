const Arithmetic = require("../lib/Employee");
const Employee = require("../lib/Employee");


describe("Employee Class", () => {
    describe("Employee Name", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.name).toBe("Matt Kaye");
        });

        it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.id).toBe(817);
        });

        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.email).toBe("matt@email.com");
        });
    });

    describe("GetRole", () => {
        it("should return the Role 'Employee' when the getRole() function is called", () => {
            const obj = new Employee("Matt", 489, "Matt@email.com", "Harvard");

            expect(obj.getRole()).toBe("Employee");
        });
    });

    describe("GetName", () => {
        it("should return a string containing a 'Name' property when the getName() function is called ", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.getName()).toBe("Matt Kaye");
        });
    });

    describe("GetID", () => {
        it("should return a number containing an 'ID' property when the getID() function is called", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.getID()).toBe(817);
        });
    });

    describe("GetEmail", () => {
        it("should return a string containing an 'Email' property when the getEmail() function is called", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.getEmail()).toBe("matt@email.com");
        });
    });

    describe("GetRole", () => {
        it("should return the Role 'Employee' when the getRole() function is called", () => {
            const obj = new Employee("Matt Kaye", 817, "matt@email.com");

            expect(obj.getRole()).toBe("Employee");
        });
    });

});