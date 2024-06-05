import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Digital Literacy & Skill Development Society Learning Platform
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            quam non justo dapibus accumsan.
          </p>
        </section>
      
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-md animate-fade-in">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Computer Courses
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum sapiente cupiditate fugit iure eius alias rem accusamus mollitia nobis?
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-md shadow-md animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Management Courses
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quia possimus officia distinctio dolores. Quis dignissimos accusantium enim molestias a.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-md shadow-md animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Skill Development Courses
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quaerat temporibus hic ex magni quidem maxime expedita eum omnis nesciunt!
            </p>
          </div>
        </section>
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src="https://www.johnacademy.co.uk/wp-content/uploads/2020/01/Trending-And-Best-Selling-Courses-To-Get-a-Job-1.png"
              alt="img-01"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
            <img
              src="https://www.onlinecourserank.com/wp-content/uploads/best-online-programming-courses-1200x675.jpg"
              alt="img-02"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
            <img
              src="https://www.aeccglobal.in/images/easyblog_articles/158/skill-development-courses.webp"
              alt="img-03"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 bottom-0 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Learning Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
