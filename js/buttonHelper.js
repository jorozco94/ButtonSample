export const buttonCreator = (element, options = {}) => {
  const { name, color, text = 'Click Here', center = false } = options;
  const btn = document.createElement('button');
  btn.setAttribute('name', name ? name : undefined);
  btn.style.color = color ? color : undefined;
  if (center) {
    btn.style.margin = '0 auto';
    btn.style.display = 'block';
  }
  btn.textContent = text;
  element.appendChild(btn);
}

