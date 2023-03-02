const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");


describe("Intern Class", () => {
    describe("Intern Name", () => {
      it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
        
        expect(obj.name).toBe("Daniel");
      });
      
      it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
  
        expect("id" in obj).toEqual(Number);
      });

      it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
  
        expect("email" in obj).toEqual(String);
      });

      it("should return an object containing 'school' property when called with the 'new' keyword", () => {
        const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
  
        expect("school" in obj).toEqual(String);
      });
    });

    describe("GetRole", () => {
        it("should return the Role 'Intern' when the getRole() function is called", () => {
          const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
    
          expect(obj.getRole()).toEqual('Intern');
        });
      });

    describe("GetRole", () => {
        it("should return the Role 'Intern' when the getRole() function is called", () => {
          const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
    
          expect(getSchool(obj)).toEqual('Intern');
        });
      });  
  });
  