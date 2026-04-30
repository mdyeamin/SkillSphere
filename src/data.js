

export const getCOurse=async()=>{
const res = await fetch("https://skill-sphere-server-dgqe.onrender.com/courses")
const courses = await res.json()
return courses
}
export const getCOurseDetails=async(id)=>{
const res = await fetch(`https://skill-sphere-server-dgqe.onrender.com/courses/${id}`)
const courses = await res.json()
return courses
}