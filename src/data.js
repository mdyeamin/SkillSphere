export const getCourse = async () => {
  const res = await fetch(
    "https://skill-sphere-server-dgqe.onrender.com/courses",
  );
  const courses = await res.json();
  return courses;
};
export const getCourseDetails = async (id) => {
  const res = await fetch(
    `https://skill-sphere-server-dgqe.onrender.com/courses/${id}`,
  );
  const courses = await res.json();
  return courses;
};

export const getCategory =  async() => {
  const res =  await fetch("https://skill-sphere-server-dgqe.onrender.com/category")
 const category = await res.json()
 return category
};
