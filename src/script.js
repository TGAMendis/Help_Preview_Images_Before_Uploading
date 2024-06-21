function previewBeforeUpload(id) {
  let element = document.querySelector("#" + id);
  if (element) {
    element.addEventListener("change", function (e) {
      if (e.target.files.length == 0) {
        return;
      }
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      let previewDiv = document.querySelector("#" + id + "-preview div");
      let previewImg = document.querySelector("#" + id + "-preview img");
      if (previewDiv && previewImg) {
        previewDiv.innerText = file.name;
        previewImg.src = url;
      }
    });
  } else {
    console.error("Element with id '" + id + "' not found.");
  }
}

previewBeforeUpload("file-1");
previewBeforeUpload("file-2");
previewBeforeUpload("file-3");