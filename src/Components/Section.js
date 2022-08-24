import AllCourses from "./AllCourses";

function Section() {
  return (
    <div className="section">
      <h2 className="section-title">
        Expand your career opportunities with Python
      </h2>
      <p className="section-desc">
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps.
      </p>
      <button className="explore-button">Explore Python</button>

      <AllCourses></AllCourses>
    </div>
  );
}

export default Section;
