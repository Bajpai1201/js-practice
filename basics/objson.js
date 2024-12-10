// object de-structuring and json api intro-------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "rohit"
}

//course.courseInstructor

const {courseInstructor: instructor} = course;

//console.log(courseInstructor);
console.log(instructor);

// json api==========

/*{
    name: "rohit",
    coursename: "js in hindi",  // json structure
    price: "free"
}
*/
