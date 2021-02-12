function sweetAlert() {
    swal("Good job!", "Product purchased\n!", "success");


}
window.onload= function() {

    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    console.log(scrollToTopBtn);
    var rootElement = document.documentElement

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    scrollToTopBtn.addEventListener("click", scrollToTop)
};
