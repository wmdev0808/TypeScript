/**
 * ----------------------------------------
 * Inheritance
 * ----------------------------------------
 * 1. Use the User class below.
 * 2. Create an Admin class that extends User.
 * 3. Create a Guest class that implements User.
 * 4. Have both classes below pass firstName, lastName and email in their constructors.
 */

export class User {
  firstName: string;
  lastName: string;
  email: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

export class Admin extends User {
  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}
