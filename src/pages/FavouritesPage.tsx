import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const favourites = useAppSelector((state) => state.github.favourires);
  console.log(favourites);
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {!favourites.length ? (
          <li>No items.</li>
        ) : (
          favourites.map((link, id) => (
            <li key={id + 1}>
              <a href={link} key={id + 2} target="blank">
                {link}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FavouritesPage;
