document.getElementById("khodamForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("fullName").value;
  const khodam = generateKhodam(name);
  document.getElementById(
    "result"
  ).innerHTML = `<p>Selamat ${name}, khodammu adalah .. ${khodam}!</p>`;
  document.getElementById("fullName").value = "";
});

function generateKhodam(asma) {
  const listKhodam = [
    "Anak Macan",
    "Bajing Terbang",
    "Cicak Rawa",
    "Daun Kelor",
    "Elang Gurun",
    "Fotocopy KTP",
    "Gajah Terbang",
    "Harum Melati",
    "Inti Bumi",
    "Jaran Kepang",
    "Kuda Binal",
    "Lumba-lumba",
    "Menjangan Ali-ali",
    "Naga Bonar",
    "Oseng Tempe",
    "Pisang Emas",
    "Raja Singa",
    "Sayur Asem",
    "Tanduk Rusa",
    "Udang Ebi",
    "Visual Studio",
    "Wedhus Gembel",
    "Xenomorph Predator",
    "Yakult Yogurt",
    "Zebra Cross",
  ];

  const index = asma.length % listKhodam.length;
  return listKhodam[index];
}
