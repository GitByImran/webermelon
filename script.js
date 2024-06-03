document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        var collapseElement = item.querySelector('.accordion-collapse');
        if (collapseElement.classList.contains('show')) {
            item.classList.add('active');
        }

        item.addEventListener('shown.bs.collapse', function () {
            item.classList.add('active');
        });

        item.addEventListener('hidden.bs.collapse', function () {
            item.classList.remove('active');
        });
    });
});
