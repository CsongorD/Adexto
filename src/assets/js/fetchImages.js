import { storage } from "./firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

// You enter the name of the folder in the firebase storage,
// and it will give back the link to to images
async function fetchImages({ folder }) {
  const imagesRef = ref(storage, `${folder}/`);
  const result = [];
  const response = await listAll(imagesRef);
  const urls = response.items;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    let urlStr = await getDownloadURL(url);
    result.push(urlStr);
  }
  return result;
}

async function fetchModels({ folder }) {
  const imagesRef = ref(storage, `${folder}/`);
  const result = [];
  const response = await listAll(imagesRef);
  const models = response.prefixes;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    let modelName = model.name;
    let images = await fetchImages({ folder: `${folder}/${modelName}/` });
    let modelObject = {
      model: modelName,
      images: images,
    };
    result.push(modelObject);
  }

  return result;
}

function init() {
  fetchImages({ folder: "characteristics" });
  fetchImages({ folder: "columns" });
  fetchImages({ folder: "icons" });
  fetchImages({ folder: "medals" });
  fetchImages({ folder: "types" });
  fetchModels({ folder: "models" });
}

export { fetchModels, fetchImages };
