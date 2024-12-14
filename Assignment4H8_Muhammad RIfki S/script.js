window.onload = function() {
    loadData();
};

function editButton() {
    const form = document.getElementById("form");
    form.style.display = "block"; 
    document.getElementById("nama").value = document.getElementById("display-nama").innerText;
    document.getElementById("role").value = document.getElementById("display-role").innerText;
    document.getElementById("availability").value = document.getElementById("display-availability").innerText;
    document.getElementById("usia").value = document.getElementById("display-usia").innerText;
    document.getElementById("lokasi").value = document.getElementById("display-lokasi").innerText;
    document.getElementById("pengalaman").value = document.getElementById("display-pengalaman").innerText;
    document.getElementById("email").value = document.getElementById("display-email").innerText;
}

function updateBiodata(event) {
    event.preventDefault();
    const data = {
        nama: document.getElementById("nama").value,
        role: document.getElementById("role").value,
        availability: document.getElementById("availability").value,
        usia: document.getElementById("usia").value,
        lokasi: document.getElementById("lokasi").value,
        pengalaman: document.getElementById("pengalaman").value,
        email: document.getElementById("email").value
    };

    for (const key in data) {
        localStorage.setItem(key, data[key]);
        document.getElementById("display-" + key).innerText = data[key];
    }

    document.getElementById("form").style.display = "none";
}

function loadData() {
    const keys = ["nama", "role", "availability", "usia", "lokasi", "pengalaman", "email"];
    keys.forEach(key => {
        if (localStorage.getItem(key)) {
            document.getElementById("display-" + key).innerText = localStorage.getItem(key);
        }
    });
}