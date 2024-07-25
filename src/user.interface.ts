export interface User {
    name: string; // required with minimum 5 characters
    address: {
      street: string; // required
      postcode: string;
    };
    designation: string;
    gender: string;
    course: string;
    remark: string;
  }
  