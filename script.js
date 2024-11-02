document.getElementById('logoutButton').addEventListener('click', function() {
    // Logika untuk mengakhiri sesi pengguna
    // Misalnya, menghapus token dari localStorage atau sessionStorage
    localStorage.removeItem('userToken'); // Contoh jika Anda menyimpan token di localStorage

    // Mengarahkan pengguna kembali ke halaman login
    window.location.href = 'login.html'; // Ganti dengan URL halaman login Anda
});
function showContent(contentId, link) {
    var contents = document.getElementsByClassName('content-section');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';

    var links = document.getElementsByClassName('nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    link.classList.add('active');
}