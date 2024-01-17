import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(async (res) => {
        const data = await res.json();
        console.log(data);

        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {" "}
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <main>
            <h2 className="font-semibold text-2xl mb-4">{movie.title}</h2>

            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <svg
                width="6px"
                height="6px"
                viewBox="0 0 6 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
              </svg>
            </div>

            <p className="mb-4 text-gray-500">{movie.description}</p>
            <p className="mb-4 text-gray-500">Rating :{movie.rating}</p>
          </main>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <iframe
                  referrerPolicy="no"
                  src={movie.trailer + "?autoplay=1"}
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Back Home{" "}
              </button>
            </aside>
            <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
              <img
                className="object-cover inline-block"
                src={movie.posterURL}
                alt="Product title"
                width="340"
                height="340"
              />
            </div>
          </div>

          <hr />
        </div>
      </section>
    </div>
  );
}

export default Movie;
