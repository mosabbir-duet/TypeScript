"use strict";
const addCourseToStudent = (student) => {
    const course = "Next Level Web Development";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addCourseToStudent({
    id: 222,
    name: "Sabbir",
    email: "sabbir@gmail.com",
    devType: "NLWd",
});
console.log(student1);
