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
  
        expect(obj.id).toBe(489);
      });

      it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
        const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
  
        expect(obj.email).toBe("daniel@email.com");
      });

      it("should return an object containing 'school' property when called with the 'new' keyword", () => {
        const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
  
        expect(obj.school).toBe("Harvard");
      });
    });

    describe("GetRole", () => {
        it("should return the Role 'Intern' when the getRole() function is called", () => {
          const obj = new Intern("Daniel", 489, "daniel@email.com", "Harvard");
    
          expect(obj.getRole()).toBe("Intern");
        });
      }); 
  });
  