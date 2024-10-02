function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item).default || r(item);
  });
  console.log(images);

  return images;
}

const images = importAll(
  require.context("../public/img/uae", false, /\.(png|jpe?g|svg|avif|jpg)$/)
);

const imagePaths = Object.keys(images);

export const movies = imagePaths.slice(0, 5).map((key, index) => ({
  id: index + 1,
  poster: "/img/uae/" + key,
  name: "Awards",
}));

const fullmovies = imagePaths.map((key, index) => ({
  id: index + 1,
  poster: "/img/uae/" + key,
  name: "Awards",
}));

export const randomMoviesSet1 = fullmovies
  .sort(() => Math.random() - 0.5)
  .concat(fullmovies.sort(() => Math.random() - 0.5))
  .concat(fullmovies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = fullmovies
  .sort(() => Math.random() - 0.5)
  .concat(fullmovies.sort(() => Math.random() - 0.5))
  .concat(fullmovies.sort(() => Math.random() - 0.5));
