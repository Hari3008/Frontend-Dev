
document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');
    // function for selecting item
    function getItem(item){
        removeAllBorder();
        removeAllContent();
        this.classList.add('tab-border');
        const tabContentitem = document.querySelector(`#${this.id}-content`);
        tabContentitem.classList.add('show');    
    }
    function removeAllBorder(){
        tabItems.forEach(item => item.classList.remove('tab-border'));
    }
    function removeAllContent(){
        tabContentItems.forEach(item => item.classList.remove('show'));
    }
    tabItems.forEach(item => item.addEventListener('click',getItem));

});