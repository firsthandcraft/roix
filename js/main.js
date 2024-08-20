window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.getElementById('about-link');
    var newPage = document.getElementById('new-page');
    var closeModal = document.getElementById('close-modal');

 // About 링크 클릭 시 모달 열기/닫기
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 링크 동작을 막음
        newPage.classList.toggle('hidden'); // 모달창을 열거나 닫음 (토글)
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeModal.addEventListener('click', function() {
        newPage.classList.add('hidden'); // 모달창을 숨김
    });

    // 모달창 밖을 클릭하면 모달 닫기
    window.addEventListener('click', function(event) {
        if (event.target == newPage) {
            newPage.classList.remove('hidden'); // 모달창을 숨김
        }
    });
});
