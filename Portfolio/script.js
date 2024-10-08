$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Download button
    // Function to trigger the file download
    function downloadFile() {
        // Create a URL for the file you want to download
        const fileUrl = 'path_to_your_file'; // Replace 'path_to_your_file' with the actual file URL

        // Create an anchor element (hidden) to initiate the download
        const downloadAnchor = document.createElement('a');
        downloadAnchor.style.display = 'none';
        downloadAnchor.href = fileUrl;
        downloadAnchor.download = 'file_name_to_be_downloaded.ext'; // Replace 'file_name_to_be_downloaded.ext' with the desired file name and extension

        // Append the anchor element to the body and trigger the click event
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();

        // Clean up: Remove the anchor element from the DOM
        document.body.removeChild(downloadAnchor);
    }

    // Add a click event listener to the download button
    document.getElementById('downloadButton').addEventListener('click', downloadFile);


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});