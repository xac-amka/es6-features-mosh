import Teacher from "./modularity/teacher";

const teacher = new Teacher("Amka", "Master");
teacher.walk();

// Default -> import ... from '';
// Named   -> import { ... } from '';
// Typically we use default export when there is single object for export.
// We can have both exports in a single file
