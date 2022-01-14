const searchControl = ({
  selectorBtn,
  selectorForm,
  classActive,
  selectorClose,
  breakpoint,
}) => {
  const btn = document.querySelector(selectorBtn);
  const form = document.querySelector(selectorForm);
  const close = document.querySelector(selectorClose);

  form.classList.remove(classActive);

  const activateForm = () => {
    form.classList.add(classActive);

    btn.removeEventListener("click", activateForm);
    btn.type = "submit";
  };

  const deactivateForm = () => {
    form.classList.remove(classActive);
    btn.addEventListener("click", activateForm);
    close.style.display = "block";
    btn.type = "button";
  };

  btn.addEventListener("click", activateForm);
  close.addEventListener("click", deactivateForm);

  window.addEventListener("resize", () => {
    deactivateForm();
    
    if (document.documentElement.clientWidth > breakpoint) {
        close.style.display = "block";
      btn.addEventListener("click", activateForm);
      close.style.display = "block";

      close.addEventListener("click", deactivateForm);
    } else if (document.documentElement.clientWidth <= breakpoint) {
      
      form.classList.add(classActive);
      close.style.display = "none";
      btn.type = "submit";
    }
  });
};

export default searchControl;
