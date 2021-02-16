const btn = document.querySelector('.btn');
const btnSearch = document.querySelector('.btn .iconSearch');
const btnClose = document.querySelector('.btn .iconClose');
const input = document.querySelector('.input');
const search = document.querySelector('.search');
// const icon = document.querySelector('.icon');

btnSearch.addEventListener('click', ()=>{
    search.classList.add('active');
    input.focus();
    btn.classList.add('active')
})
btnClose.addEventListener('click', ()=>{
    search.classList.remove('active');
    btn.classList.remove('active');
    input.value = '';
})