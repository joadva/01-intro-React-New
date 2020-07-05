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
