'use strict';

function Person(name, age){
  this.name = name;
  this.age = age;
}

function Employee(name, age, salary, department, hiredAt, maxSalaryMultiplier){
  Person.call(this, name, age);

  this.salary = salary;
  this.department = department;
  this.hiredAt = hiredAt || new Date();
  this.leftAt = null;
  this.status = 'active'; // 'active' fired' 'quit'
  this.maxSalaryMultiplier = maxSalaryMultiplier || 1;
  
  this.getInfo = function(){
    return this.name + " (" + this.age + ") works at " +
           this.department + " for " + this.salary + " usd since|from " + 
           this.hiredAt.toDateString() + (this.status === 'active' ? "." : 
           (" to " + this.leftAt.toDateString() + "."));
  };
  //quit(boolean isFired):boolean 
  //(set leftAt to now, set status to 'quit'/'fired') 
  //throws an Error if already left
  this.quit = function(isFired){
    if(this.leftAt !== null){
      throw new Error("This emplyee has already left the company");
      return false;
    }else if(isFired){
      this.status = 'fired';
      this.leftAt = new Date();
      return true;
    }else{
      this.leftAt = new Date();
      this.status = 'quit';
      return false;
    }
  };
  // increaseSalaryBy(number newSalary):number 
  //(throws an Error (if difference bigger than allowed))
  // eg current = 1000 multiplier = 1.1, 
  //if argument 1200 throw an Error
  this.increaseSalaryBy = function(newSalary){
    if(newSalary > this.salary * this.maxSalaryMultiplier){
      throw new Error("Difference bigger than allowed");
    } else {
      this.salary = newSalary;
    }
    return this.salary;
  };

  //setDepartment(string newDepartment):undefined (set department)
  this.setDepartment = function(newDepartment){
    if(['junior', 'medior', 'senior', 'architect'].indexOf(newDepartment) > -1){
      this.department = newDepartment;
      return true;
    }else{
      return false;
    }
    
  };
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Developer(name, age, salary, department, hiredAt, level){
  Employee.call(this, name, age, salary, department, hiredAt, 1.05);
  
  this.level = level;//'junior', 'medior', 'senior', 'architect'
  this.changeLevel = function(newLevel){
    if(this.level === newLevel){
      return false;
    }else{
      this.level = newLevel;
      return true;
    }
    
  };
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Director(name, age, salary, department, hiredAt){
  Employee.call(this, name, age, salary, department, hiredAt, 1.1);

  this.fireEmployee = function (employeeToFire){
    if(employeeToFire instanceof Employee){
      return employeeToFire.quit(true);
    } else{
      throw new Error("It is not an Employee");
      return false;
    }
  };

  this.promoteDeveloper = function(developerToPromote,newLevel){
    if(developerToPromote instanceof Developer){
      return developerToPromote.changeLevel(newLevel);
    }else{
      throw new Error("It is not an Developer");
      return false;
    }
  }

}

Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Director;





