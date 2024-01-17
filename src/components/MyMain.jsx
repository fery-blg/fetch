import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  
} from "@material-tailwind/react";
 
export default function MyMain({movie}) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={movie.posterURL} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {movie.title}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
         {movie.description}
        </Typography>
      </CardBody>
      <CardFooter>
          <Typography
            >{movie.rating}</Typography>
      </CardFooter>
    </Card>
  );
}