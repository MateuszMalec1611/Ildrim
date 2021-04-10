(function footer() {
    const footerYear = document.querySelector('.footer__describe-year');

    const handleCurrentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
    }
    handleCurrentYear();
})();