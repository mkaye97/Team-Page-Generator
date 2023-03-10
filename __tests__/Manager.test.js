const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


describe("Manager Class", () => {
    describe("Manager Name", () => {
      it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
        const obj = new Manager("Daniel", 489, "daniel@email.com", 42);
        
        expect(obj.name).toBe("Daniel");
      });
      
      it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
        const obj = new Manager("Daniel", 489, "daniel@email.com", 42);
  
        expect(obj.id).toBe(489);
      });

      it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Manager("Daniel", 489, "daniel@email.com", 42);
  
        expect(obj.email).toBe("daniel@email.com");
      });

      it("should return an object containing 'Office Number' property when called with the 'new' keyword", () => {
        const obj = new Manager("Daniel", 489, "daniel@email.com", 42);
  
        expect(obj.officeNumber).toBe(42);
      });
    });

    describe("GetRole", () => {
        it("should return the Role 'Manager' when the getRole() function is called", () => {
          const obj = new Manager("Daniel", 489, "daniel@email.com", 42);
    
          expect(obj.getRole()).toBe("Manager");
        });
      }); 
  });
