function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("sidebar");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('header a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})

const activePage2 = window.location.pathname;
const navLinks2 = document.querySelectorAll('aside a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})