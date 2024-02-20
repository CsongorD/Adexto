function readContextFromFolder({ folderPath }) {
  let folderArr = folderPath.split("/");
  let folder = folderArr[folderArr.length - 1];

  switch (folder) {
    case "characteristics":
      return require.context("../../assets/images/characteristics", true);
    case "medals":
      return require.context("../../assets/images/medals", true);
    case "gallery":
      return require.context("../../assets/images/gallery", true);
    case "icons":
      return require.context("../../assets/images/icons", true);
    case "types":
      return require.context("../../assets/images/types", true);
    case "models":
      return require.context("../../assets/images/models", true);
    case "columns":
      return require.context("../../assets/images/columns", true);
    default:
      return null;
  }
}

function getImagesFromFolder({ folderPath }) {
  const folderContext = readContextFromFolder({ folderPath: folderPath });
  const imagePaths = folderContext.keys();
  return imagePaths.map((path) => folderContext(path));
}

function getModels() {
  const folderContext = readContextFromFolder({
    folderPath: "../../assets/images/models",
  });
  const imagePathArr = folderContext.keys();

  const imageObjects = imagePathArr.map((path) => {
    let pathArr = path.split("/");
    return {
      model: pathArr[1],
      file: pathArr[2],
    };
  });

  imageObjects.sort((a, b) => parseInt(a.model) - parseInt(b.model));

  let groupedModelsList = [];

  for (let i = 0; i < imageObjects.length; i++) {
    const img = imageObjects[i];
    const imageModel = img.model;

    const imgPath = "./" + imageModel + "/" + img.file;

    let staticPath = folderContext(imgPath);
    const filteredListByGroup = groupedModelsList.filter(
      (group) => group.model === imageModel
    );

    if (filteredListByGroup.length > 0) {
      filteredListByGroup[0].images.push(staticPath);
    } else {
      groupedModelsList.push({
        model: imageModel,
        images: [staticPath],
      });
    }
  }
  return groupedModelsList;
}

export { getModels, getImagesFromFolder };
