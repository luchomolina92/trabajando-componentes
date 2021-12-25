import MetricaMovies from "./MetricaMovies";

const ContentRowMovies = ({dataMovies}) => {
  return (
    <div className="row">
      {dataMovies.map((movie, index) => <MetricaMovies movie={movie} key={index}/>)} 
    </div>
  );
};

export default ContentRowMovies;
