import React from 'react'
export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      image: "https://source.unsplash.com/800x500/?technology,code",
      description:
        "Web development is evolving rapidly with new frameworks, tools, and best practices shaping the future.",
    },
    {
      id: 2,
      title: "Why React is So Popular",
      image: "https://source.unsplash.com/800x500/?reactjs,programming",
      description:
        "React has become one of the most loved libraries for building modern user interfaces.",
    },
    {
      id: 3,
      title: "Top UI/UX Design Principles",
      image: "https://source.unsplash.com/800x500/?ui,ux,design",
      description:
        "Great UI/UX design improves usability and creates meaningful user experiences.",
    },
    {
      id: 4,
      title: "JavaScript Tips Every Developer Should Know",
      image: "https://source.unsplash.com/800x500/?javascript,developer",
      description:
        "JavaScript powers the web. Mastering its concepts can level up your development skills.",
    },
  ];

  return (
    <>
    <section className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Blog
        </h1>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>

                <button className="text-indigo-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
