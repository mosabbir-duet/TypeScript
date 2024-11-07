type UserInfo = {
  id: number;
  name: string;
  email: string;
  devType: string;
};

const addCourseToStudent = <T>(student: T): T & { course: string } => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent<UserInfo>({
  id: 222,
  name: "Sabbir",
  email: "sabbir@gmail.com",
  devType: "hjl",
});

console.log(student1);
