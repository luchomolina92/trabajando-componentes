import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";

const ContentRowTop = () => {
  const dataMovies = [
    {
      title: "MOVIES IN DATA BASE",
      number: 21,
      border: "border-left-primary",
      icon: "fa-film",
    },
    {
      title: "TOTAL AWARDS",
      number: 79,
      border: "border-left-success",
      icon: "fa-award",
    },
    {
      title: "Actors quantity",
      number: 49,
      border: "border-left-warning",
      icon: "fa-user",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
      <ContentRowMovies dataMovies={dataMovies} />
      <div className="row">
        <LastMovieInDb />
        <GenresInDb />
      </div>
    </div>
  );
};

export default ContentRowTop;
