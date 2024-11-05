function filterButtons() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById("buttonList");
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const button = li[i].getElementsByTagName("a")[0];
        if (button.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}