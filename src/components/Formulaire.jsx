import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";

const MovieForm = () => {
  const [preview, setpreview] = useState("");


  const handleChange = (e) => {
    setpreview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., send data to a server or update state
    console.log("Form submitted:", e.target.title.value);
    const newMovie = {
      title: e.target.title.value,
      description: e.target.description.value,
      posterURL: e.target.posterURL.value,
      rating: e.target.rating.value,
    };

    const respone = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(newMovie)
    });
    toast.success("movie added successfully")
    setTimeout(()=>{

      window.location.pathname="/"
    }, 1500)
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Movie Registration
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Please provide the details for the movie registration.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            size="lg"
            placeholder="Enter movie title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            id="title"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Input
            size="lg"
            placeholder="Enter movie description"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            id="description"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Poster URL
          </Typography>
          <Input
            onChange={handleChange}
            size="lg"
            placeholder="Enter poster URL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            id="posterURL"
          />
          <img src={preview } />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Rating
          </Typography>
          <Input
            size="lg"
            placeholder="Enter movie rating"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            id="rating"
          />
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Register Movie
        </Button>
      </form>
    </Card>
  );
};

export default MovieForm;
