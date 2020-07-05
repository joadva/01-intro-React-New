/* const getImagenPromesa = () => {
  const promersa = new Promise((resolve, reject) => {
    resolve("");
  });
  return promersa;
}; */
//getImagenPromesa().then(console.log);

try {
  const getImagen = async () => {
    const apiKey = "wE4otUFGIKpr5yB29TFG06tYwWghfXhq";
    const respeusta = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respeusta.json();
    console.log(data);

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  };
  getImagen().then(console.log);
} catch (error) {
  //maneo del error
  console.log(error);
}

/* 
const apiKey = "wE4otUFGIKpr5yB29TFG06tYwWghfXhq";

//api.giphy.com/v1/gifs/random?api_key=wE4otUFGIKpr5yB29TFG06tYwWghfXhq

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })

  .catch(console.warn);
 */
