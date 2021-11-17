let modelWpr = document.querySelector(".modal"),
  step1 = document.querySelector(".step1"),
  step2 = document.querySelector(".step2"),
  dropdownWpr = document.querySelector(".dropdown"),
  fileUpload = document.querySelector("#fileUpload"),
  form1 = document.querySelector("#form1"),
  form2 = document.querySelector("#form2"),
  textarea = document.querySelector("#documentnotes"),
  droppedFiles = false,
  selectredFormate = '';

const toggleModal = () => {
  modelWpr.style.display == "none" || modelWpr.style.display == ""
    ? ((modelWpr.style.display = "flex"), resetForm())
    : (modelWpr.style.display = "none");
};

const toggleSwipe = () => {
  step1.classList[1] == "visible"
    ? (step1.classList.remove("visible"), step2.classList.add("visible"))
    : (step1.classList.remove("hidden"), step2.classList.add("hidden"));
};

const submit = () => {
  toggleModal();
  droppedFiles == true && alert( `File is Attached !!! \nName : ${droppedFiles[0].name} \nType : ${selectredFormate}\nNote : ${textarea.value}`);
  form1.reset();
  form2.reset();
  fileUpload.querySelector(".labelwpr").classList.add("visible");
  fileUpload.querySelector(".filename").classList.remove("visible");
  fileUpload.querySelector(".filename").innerHTML = '';
  dropdownWpr.querySelector("button .text").innerHTML = dropdownWpr.querySelector("button .text").getAttribute("data-val");
};

const resetForm = () => {
  step2.classList.remove("visible"), step1.classList.add("visible");
};

const dropdownToggle = () => {
  dropdownWpr.classList[1] !== "visible"
    ? dropdownWpr.classList.add("visible")
    : dropdownWpr.classList.remove("visible");
  return false;
};

const selectedDropdown = (e) => {
  selectredFormate = e.innerHTML
  e.closest(".dropdown").querySelector("button .text").innerHTML = selectredFormate;
  dropdownToggle();
};

const preventdefault = (e) => {
  e.preventDefault();
};

const drop = (e) => {
  e.preventDefault();
  droppedFiles = e.dataTransfer.files;
  fileUpload.querySelector(".labelwpr").classList.remove("visible");
  fileUpload.querySelector(".filename").classList.add("visible");
  fileUpload.querySelector(".filename").innerHTML = droppedFiles[0].name;
};
