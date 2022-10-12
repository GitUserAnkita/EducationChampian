import http from '../http-comman';

class CourseService {
  getAllCourse() {
    return http.get("/get_course");
  }

  addCourse(courses, onUploadProgress) {
    console.log("courses===", courses)
    let formData = new FormData();
    for (var key in courses) {
      formData.append(key, courses[key]);
    }
    return http.post("/create_course", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  
  editCourse(id,courses,onUploadProgress){
    console.log("courses===", Object.keys(courses))
    let formData = new FormData();
    for (var key in courses) {
      formData.append(key, courses[key]);
    }
    return http.put(`/Update_course/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  deleteCourse(id) {
    return http.delete(`/Delete_course/${id}`);
  }

  getAllCategory() {
    return http.get("/All_category");
  }

  createCategory(data) {
    return http.post("/create_category_new", data)
  }
  deleteCategory(id) {
    return http.delete(`/Delete_cat/${id}`)
  } 
}
export default new CourseService