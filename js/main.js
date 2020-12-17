const sidebarButton = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.sidebar');

sidebarButton.addEventListener('click', ()=> {

    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        sidebarButton.style.marginLeft = 0;
    } else {
        sidebar.style.display = 'block';
        sidebarButton.style.marginLeft = '50%';
    }

});