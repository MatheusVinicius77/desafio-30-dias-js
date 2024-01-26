const spacingRange = document.querySelector('#spacing');
const blurRange = document.querySelector('#blur');
const baseRange = document.querySelector('#base');
const image = document.getElementsByTagName('img').item(0);

image.style.background = baseRange.value;
image.style.padding = spacingRange.min + 'px';
image.style.filter = `blur(${blurRange.value}px)`;

spacingRange.addEventListener('input', (value) => {
    image.style.padding = `${value.target.value}px`;
});

base.addEventListener('input', (value) => {
    image.style.background = value.target.value;
});

blurRange.addEventListener('input', (value) => {
    image.style.filter = `blur(${value.target.value}px)`;
});