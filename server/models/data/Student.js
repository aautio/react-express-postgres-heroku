class Student {
    constructor(studentData) {
        this.studentId = studentData.student_id;
        this.firstName = studentData.first_name;
        this.lastName = studentData.last_name;
        this.email = studentData.email;
        this.password = studentData.password;
        this.phone = studentData.phone;
        this.schoolId = studentData.schoolId;
    }
}

module.exports = Student;