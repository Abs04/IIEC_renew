console.log("header loading..");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("technoHeaderPlaceHolder").innerHTML = headerContent;
    console.log("header loaded!");

    // Mobile Menu Toggle
    document.querySelector(".mobile-nav-toggler").onclick = function () {
        console.log("clicked!");
        document.body.classList.add("mobile-menu-visible");
    };

    // Close Mobile Menu
    document.querySelector(".mobile-menu .menu-backdrop").onclick =
        document.querySelector(".mobile-menu .close-btn").onclick = function () {
            document.body.classList.remove("mobile-menu-visible");
        };

    // Clone Desktop Menu to Mobile Menu
    const desktopMenu = document.querySelector(".main-menu .navigation").cloneNode(true);
    document.querySelector(".mobile-menu .menu-outer").appendChild(desktopMenu);

    // Dropdown Functionality for Mobile Menu
    const mobileDropdownButtons = document.querySelectorAll(".mobile-menu .dropdown > a");

    mobileDropdownButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (button.nextElementSibling && button.nextElementSibling.tagName === 'UL') { // Check if the next sibling is a UL (submenu)
                event.preventDefault(); // Prevent default link behavior only if it has a submenu
                button.classList.toggle('open'); // Toggle the 'open' class on the button
                button.nextElementSibling.classList.toggle('open'); // Toggle the 'open' class on the dropdown menu
            }
        });
    });
});

$(document).ready(function () {
    // Dropdown Functionality for Desktop Menu
    $('.dropdown > a').click(function (event) {
        if ($(this).siblings('ul').length) {  // Check if the link has a submenu
            //event.preventDefault(); // Prevent default link behavior only if it has a submenu
            $(this).siblings('ul').slideToggle(); // Toggle the dropdown menu
            $(this).toggleClass('open'); // Toggle the 'open' class on the link
        }
    });
});

const headerContent = `
<header class="main-header style-two style-three">
    <!-- header-upper -->
    <div class="header-upper-two">
        <div class="auto-container">
            <div class="upper-inner clearfix">
                <div class="logo-box pull-left">
                    <figure class="logo"><a href="../../index.html"><img src="../images/iiec-logo.png" alt=""></a>
                    </figure>
                </div>
                <ul class="info-box pull-right clearfix">

                    <li class="btn-box"><a href="https://iiec.iubat.edu/" class="theme-btn-one"
                            target="_blank">IUBAT
                            Innovation and Enterpreneurship Center</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- header-lower -->
    <div class="header-lower">
        <div class="pattern-layer" style="background-image: url(../images/shape/shape-23.png);"></div>
        <div class="auto-container">
            <div class="outer-box clearfix">
                <div class="menu-area pull-left clearfix">
                    <!--Mobile Navigation Toggler-->
                    <div class="mobile-nav-toggler">
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                        <i class="icon-bar"></i>
                    </div>
                    <nav class="main-menu navbar-expand-md navbar-light">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                <li><a href="../../index.html">Home</a></li>

                                <li class="dropdown"><a href="../../index.html">Segments</a>
                                    <ul>
                                        <li><a href="../pages/rulebook.html">Drone Racing</a></li>
                                        <li><a href="../pages/rulebook.html">Line Follower Robot</a></li>
                                        <li><a href="../pages/rulebook.html">Soccer Bot</a></li>
                                        <li><a href="../pages/rulebook.html">Battle Bot</a></li>
                                        <li><a href="../pages/rulebook.html">Project Showcasing</a></li>
                                        <li><a href="../pages/rulebook.html">Business Case Study</a></li>
                                        <li><a href="../pages/rulebook.html">Techathon</a></li>

                                    </ul>
                                </li>

                                <li><a href="rulebook.html" target="_blank">Rulebook</a></li>

                                <li><a href="gallery.html">Gallery</a></li>

                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul class="menu-right-content pull-right clearfix">
                    <li class="social-icons">
                        <ul class="social-links clearfix">
                            <li><a href="../../index.html"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="../../index.html"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!--sticky Header-->
</header>
<!-- main-header end -->

<!-- Mobile Menu  -->
<div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn"><i class="fas fa-times"></i></div>

    <nav class="menu-box">
        <div class="nav-logo"><a href="../../index.html"><img src="../images/iiec-logo.png" alt="" title=""></a>
        </div>
        <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        </div>
        <div class="contact-info">
            <h4>Contact Info</h4>
            <ul>
                <li>4 Embankment Drive Road,Sector-10, Uttara Model Town,
                    Dhaka-1230.</li>
                <li><a href="tel:+8801521469392">+88-01521469392
                    </a></li>
                <li><a href="mailto:innovation.hub@iubat.edu">innovation.hub@iubat.edu</a></li>
            </ul>
        </div>
        <div class="social-links">
            <ul class="clearfix">
                <li><a href="../../index.html"><span class="fab fa-facebook-square"></span></a></li>
                <li><a href="../../index.html"><span class="fab fa-linkedin-in"></span></a></li>
            </ul>
        </div>
    </nav>
</div>
`;
