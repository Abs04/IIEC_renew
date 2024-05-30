console.log("footer loading...");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footerPlaceholder").innerHTML = footerContent;
  console.log("footer loaded!");
});

const footerContent = `
<!-- main-footer -->
<footer class="main-footer alternat-2 bg-color-1">
  <div
    class="pattern-layer"
    style="background-image: url(assets/images/shape/shape-32.png)"
  ></div>
  <div class="footer-top">
    <div class="shape">
      <div class="shape-3"></div>
      <div class="shape-4"></div>
    </div>
    <div class="auto-container">
      <div class="row clearfix">
        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
          <div class="footer-widget logo-widget">
            <div class="footer-logo">
              <figure class="logo">
                <a href="index.html"
                  ><img src="assets/images/iiec-logo.png" alt=""
                /></a>
              </figure>
            </div>
            <div class="text">
              <ul class="info clearfix">
                <li>
                  <i class="icon-26"></i>4 Embankment Drive Road,Sector-10,
                  Uttara Model Town, Dhaka-1230.
                </li>
                <li>
                  <i class="icon-24"></i>Call Us:
                  <a href="tel:+8801521469392">+88-01521469392</a>
                </li>
                <li>
                  <i class="icon-25"></i
                  ><a href="mailto:innovation.hub@iubat.edu"
                    >innovation.hub@iubat.edu</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
          <div class="footer-widget post-widget ml-70">
            <div class="widget-title">
              <h4>Latest Events</h4>
            </div>
            <div class="post-inner">
              <div class="post">
                <h5>
                  <a href="blog-details.html"
                    >A New World View Our Global Impact.</a
                  >
                </h5>
                <span class="post-date">27 May, 2021</span>
              </div>
              <div class="post">
                <h5>
                  <a href="blog-details.html"
                    >Proper Self-collection of Nasal Swabs.</a
                  >
                </h5>
                <span class="post-date">26 May, 2021</span>
              </div>
              <div class="post">
                <h5>
                  <a href="blog-details.html"
                    >Evidence Lacking for Widespread Vitamin.</a
                  >
                </h5>
                <span class="post-date">25 May, 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
          <div class="footer-widget links-widget ml-70">
            <div class="widget-title">
              <h4>Usefull Link</h4>
            </div>
            <div class="widget-content">
              <ul class="links-list clearfix">
                <li><a href="index.html">About Company</a></li>
                <li><a href="index.html">Services</a></li>
                <li><a href="index.html">How It Works</a></li>
                <li><a href="index.html">Our Blog</a></li>
                <li><a href="index.html">Contact Us</a></li>
                <li><a href="index.html">Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
          <div class="footer-widget subscribe-widget">
            <div class="widget-title">
              <h4>Subscribe</h4>
            </div>
            <div class="widget-content">
              <p>
                Lorem ipsum dlor sit amet, conect adipisicing elit sed do
                eiusmod.
              </p>
              <form action="contact.html" method="post" class="subscribe-form">
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                  <button type="submit"><i class="icon-27"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom centred">
    <div class="auto-container">
      <div class="copyright">
        <p>
          <a href="index.html"><b>IIEC</b></a> &copy; 2023 All Right Reserved
        </p>
      </div>
    </div>
  </div>
</footer>
<!-- main-footer end -->
`;
