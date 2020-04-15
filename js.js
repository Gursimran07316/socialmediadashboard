const wrapper = document.querySelector('.wrapper');
const grid_1 = document.querySelector('.grid-1');
const grid_2 = document.querySelector('.grid-2');
const header = document.querySelector('header');
document.querySelector('.switchHolder').addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    wrapper.classList.toggle('active');
    grid_1.classList.toggle('active');
    grid_2.classList.toggle('active');
    header.classList.toggle('active');
})
