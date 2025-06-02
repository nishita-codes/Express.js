//  export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT); have better option that is ZOD

// zOD -----Zod is a TypeScript-first schema declaration and validation library. It helps you define data structures and validate that data matches the expected types at runtime.
import {z} from "zod";
// example below--------->
// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19;

// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);




// coerce ----- to convert string into number and number into strings
const portSchema = z.coerce.number().min(1).max(65535).default(3000);

 export const PORT = portSchema.parse(process.env.PORT);