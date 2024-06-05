import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VendorHomePage = ({ isUserLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogin) {
      navigate("/");
    }
  }, [isUserLogin, navigate]);

  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");
  const [course, setCourse] = useState("");
  const [about, setAbout] = useState("");
  const [price, setPrice] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const url = "http://localhost:5000/api/users/faculty-protected/faculty-new-course";
    const formData = new FormData();

    formData.append("categoryId", category);
    formData.append("userId", user);
    formData.append("name", course);
    formData.append("about", about);
    formData.append("price", price);
    formData.append("videoUrl", videoUrl);    
    if (image) {
      formData.append("files", image);
    }

    console.log('FormData:', {
      categoryId: category,
      userId: user,
      name: course,
      about,
      price: price,
      videoUrl,      
      files: image,
    });

    const options = {
      method: "POST",
      headers: {        
        Accept: "application/json",
        Authorization: token,
      },
      body: formData,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        toast[result.success ? "success" : "error"](result.message, {
          position: "bottom-center",
          autoClose: 3000,
          closeOnClick: true,
          theme: "light",
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.", {
          position: "bottom-center",
          autoClose: 3000,
          closeOnClick: true,
          theme: "light",
        });
      }
    };

    fetchData();
  };

  return (
    <div>
      <h1>Welcome Faculty</h1>
      <h1>Add new Course</h1>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              autoComplete="category"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Category"
            />
          </div>
          <div>
            <label htmlFor="user" className="sr-only">
              User
            </label>
            <input
              id="user"
              name="user"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="user"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="User"
            />
          </div>
          <div>
            <label htmlFor="service" className="sr-only">
              Course Name
            </label>
            <input
              id="course"
              name="course"
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              autoComplete="course"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Course"
            />
          </div>
          <div>
            <label htmlFor="about" className="sr-only">
              About Course
            </label>
            <input
              id="about"
              name="about"
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              autoComplete="about"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="About"
            />
          </div>
          <div>
            <label htmlFor="price" className="sr-only">
              Price (leave blank if FREE)
            </label>
            <input
              id="price"
              name="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              autoComplete="price"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Price"
            />
          </div>
          <div>
            <label htmlFor="location" className="sr-only">
              Link to Course Video
            </label>
            <input
              id="videoUrl"
              name="videoUrl"
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              autoComplete="videoUrl"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Link to Course Video"
            />
          </div>          
          <div>
            <label htmlFor="image" className="sr-only">
              Service Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit New Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorHomePage;
