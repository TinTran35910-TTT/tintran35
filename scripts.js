function toggleDetail(id) {
    var detailElement = document.getElementById(id);
    if (detailElement.style.display === 'block') {
        detailElement.style.display = 'none';
    } else {
        detailElement.style.display = 'block';
    }
}
