/**
* Template Name: DevFolio - v4.7.1
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
html {
  font-size: 16px;
  font-family: 'Avenir Next', 'HelveticaNeue-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body {
  /* background-color: #f5f5f5;*/
  background-color: white  ;
  color: #4e4e4e;
}

mark {
  background-color: black;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: black;
  font-family: "Avenir Next";
}

p { 
  font-family: "Avenir Next";
  font-size: 18px;
  color: black;
  font-weight: 400;
 }

a {
  color: #1e1e1e;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}
a:hover {
  color: #0078ff;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

.p-r {
  position: relative;
}

.color-a {
  text-decoration: none;
  color: #0078ff;
}

.color-d {
  color: #f5f5f5;
}

.color-text-a {
  text-decoration: none;
  color: #4e4e4e;
}

.box-shadow, .card-blog, .work-box, .service-box, .paralax-mf {
  box-shadow: 0 13px 8px -10px rgba(0, 0, 0, 0.1);
}

.box-shadow-a, .button:hover {
  text-decoration: none;
  box-shadow: 0 0 0 4px #cde1f8;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-6 {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.1;
}

.avatar {
  width: 32px;
  height: 32px;
  margin-right: 4px;
  overflow: hidden;
}

.bg-image {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
@media (max-width: 1024px) {
  .bg-image {
    background-attachment: scroll;
  }
}

.overlay-mf {
  background-color: #0078ff;
}

.overlay-mf {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
}

.paralax-mf {
  position: relative;
  padding: 8rem 0;
}

.display-table {
  width: 100%;
  height: 100%;
  display: table;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
}

/*--/ Sections /--*/
.sect-4 {
  padding: 4rem 0;
}

.sect-pt4 {
  padding-top: 4rem;
}

.sect-mt4 {
  margin-top: 4rem;
}

/*--/ Title s /--*/
.title-s {
  font-weight: 600;
  color: #1e1e1e;
  font-size: 1.1rem;
}

/*--/ Title A /--*/
.title-box {
  margin-bottom: 4rem;
}

.title-a {
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
}

.subtitle-a {
  text-decoration: none;
  color: #4e4e4e;
}

.line-mf {
  width: 40px;
  height: 5px;
  background-color: #0078ff;
  margin: 0 auto;
}

/*--/ Title Left /--*/
.title-box-2 {
  margin-bottom: 3rem;
}

.title-left {
  font-size: 2rem;
  position: relative;
}
.title-left:before {
  content: "";
  position: absolute;
  height: 3px;
  background-color: #0078ff;
  width: 100px;
  bottom: -12px;
}

/*------/ Box /------*/
.box-pl2 {
  padding-left: 2rem;
}

.box-shadow-full {
  padding: 3rem 1.25rem;
  position: relative;
  background-color: #fff;
  margin-bottom: 3rem;
  z-index: 2;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}
@media (min-width: 768px) {
  .box-shadow-full {
    padding: 3rem;
  }
}

/*------/ Socials /------*/
.socials {
  padding: 1.5rem 0;
}
.socials ul li {
  display: inline-block;
}
.socials .ico-circle {
  height: 40px;
  width: 40px;
  font-size: 1.2rem;
  border-radius: 50%;
  line-height: 1.6;
  margin: 0 15px 0 0;
  box-shadow: 0 0 0 3px #0078ff;
  transition: all 500ms ease;
}
.socials .ico-circle:hover {
  background-color: #0078ff;
  color: #fff;
  box-shadow: 0 0 0 3px #cde1f8;
  transition: all 500ms ease;
}

/*------/ Ul resect /------*/
.ul-resect, .widget-tags ul, .widget-sidebar .list-sidebar, .box-comments .list-comments, .blog-wrapper .post-meta ul, .list-ico, .socials ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.list-ico {
  line-height: 2;
}
.list-ico span {
  color: #0078ff;
  margin-right: 10px;
}

/*------/ Ico Circle /------*/
.ico-circle {
  height: 100px;
  width: 100px;
  font-size: 2rem;
  border-radius: 50%;
  line-height: 1.55;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 0 0 10px #0078ff;
  display: block;
}

/*------/ Owl Carousel /------*/
.owl-theme .owl-dots {
  text-align: center;
  margin-top: 18px;
}
.owl-theme .owl-dots .owl-dot {
  display: inline-block;
}
.owl-theme .owl-dots .owl-dot span {
  width: 18px;
  height: 7px;
  margin: 5px 5px;
  background: #cde1f8;
  border: 0px solid #cde1f8;
  display: block;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
}
.owl-theme .owl-dots .owl-dot:hover span {
  background-color: #cde1f8;
}
.owl-theme .owl-dots .owl-dot.active span {
  background-color: #1B1B1B;
  width: 25px;
}

/*--/ Scrolltop s /--*/
.scrolltop-mf {
  position: relative;
  display: none;
}
.scrolltop-mf span {
  z-index: 999;
  position: fixed;
  width: 42px;
  height: 42px;
  background-color: #0078ff;
  opacity: 0.7;
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: center;
  color: #fff;
  top: auto;
  left: auto;
  right: 30px;
  bottom: 50px;
  cursor: pointer;
  border-radius: 50%;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #0078ff;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}
.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}
.back-to-top:hover {
  background: #298eff;
  color: #fff;
}
.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*------/ Prelaoder /------*/
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #f2f2f2;
  border-top: 6px solid #0078ff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1s linear infinite;
  animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*------/ Button /------*/
.button {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  transition: all 500ms ease;
  cursor: pointer;
}
.button:focus {
  outline: 0;
}
.button:hover {
  background-color: #0062d3;
  color: #fff;
  transition: all 500ms ease;
}

.button-a {
  text-decoration: none;
  background-color: #0078ff;
  color: #fff;
  border-color: #cde1f8;
}

.button-big {
  padding: 0.9rem 2.3rem;
  font-size: 1.2rem;
}

.button-rouded {
  border-radius: 5rem;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}
#header .logo {
  font-size: 28px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  letter-spacing: 1px;
}
#header .logo a {
  color: #fff;
}
#header .logo img {
  max-height: 40px;
}
#header.header-scrolled {
  background: rgba(0, 0, 0, 0.9);
  padding: 12px 0;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar > ul > li {
  white-space: nowrap;
  padding: 10px 0 10px 30px;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  white-space: nowrap;
  transition: 0.3s;
  letter-spacing: 0.4px;
  position: relative;
  text-transform: uppercase;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar > ul > li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -6px;
  left: 0;
  width: 0;
  background-color: #fff;
  visibility: hidden;
  transition: all 0.3s ease-in-out 0s;
}
.navbar a:hover:before, .navbar li:hover > a:before, .navbar .active:before {
  visibility: visible;
  width: 80%;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #fff;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 30px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  color: #4e4e4e;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #0078ff;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(78, 78, 78, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile > ul > li {
  padding: 0;
}
.navbar-mobile a:hover:before, .navbar-mobile li:hover > a:before, .navbar-mobile .active:before {
  visibility: hidden;
}
.navbar-mobile a, .navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #4e4e4e;
}
.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #0078ff;
}
.navbar-mobile .getstarted, .navbar-mobile .getstarted:focus {
  margin: 15px;
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
  color: #0078ff;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  height: 100vh;
  position: relative;
  color: #fff;
}
.hero .hero-content {
  text-align: center;
  position: absolute;
}
.hero .overlay-itro {
  background-color: rgba(255,255,255, 0.3);
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
}
.hero .hero-title {
  color: black;
  font-weight: 600;
  font-size: 3rem;
}
@media (min-width: 768px) {
  .hero .hero-title {
    font-size: 4.5rem;
  }
}
.hero .hero-subtitle {
  font-family: "Avenir Next";
  font-size: 1.5rem;
}
@media (min-width: 768px) {
  .hero .hero-subtitle {
    font-size: 2.5rem;
    font-weight: 399;
  }
}
.hero .text-slider-items {
  display: none;
}

.hero-single {
  height: 350px;
}
.hero-single .hero-content {
  margin-top: 30px;
}
.hero-single .hero-title {
  text-transform: uppercase;
  font-size: 3rem;
}
@media (min-width: 768px) {
  .hero-single .hero-title {
    font-size: 3.5rem;
  }
}
.hero-single .breadcrumb {
  background-color: transparent;
  color: #0078ff;
}
.hero-single .breadcrumb .breadcrumb-item:before {
  color: #cde1f8;
}
.hero-single .breadcrumb .breadcrumb-item.active {
  color: #cde1f8;
}
.hero-single .breadcrumb a {
  color: #fff;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about-mf .box-shadow-full {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.about-mf .about-img {
  margin-bottom: 2rem;
}
.about-mf .about-img img {
  margin-left: 10px;
}
@media (min-width: 767px) {
  .about-mf .box-pl2 {
    margin-top: 3rem;
    padding-left: 0rem;
  }
}

.skill-mf span {
  color: #4e4e4e;
}
.skill-mf .progress {
  background-color: #cde1f8;
  margin: 0.5rem 0 1.2rem 0;
  border-radius: 0;
  height: 0.7rem;
}
.skill-mf .progress .progress-bar {
  height: 0.7rem;
  background-color: #0078ff;
}

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.service-box {
  background-color: #fff;
  padding: 2.5rem 1.3rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  text-align: center;
}
.service-box:hover .ico-circle {
  transition: all 500ms ease;
  color: #fff;
  background-color: #0078ff;
  box-shadow: 0 0 0 10px #cde1f8;
}
.service-box .service-ico {
  margin-bottom: 1rem;
  color: #1e1e1e;
}
.service-box .ico-circle {
  transition: all 500ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.service-box .ico-circle i {
  line-height: 0;
  font-size: 40px;
}
.service-box .s-title {
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  padding: 0.4rem 0;
}
.service-box .s-description {
  color: #4e4e4e;
}

/*--------------------------------------------------------------
# Counter
--------------------------------------------------------------*/
.counter-box {
  color: #fff;
  text-align: center;
}
@media (min-width: 577px) {
  .counter-box {
    margin-bottom: 1.8rem;
  }
}

.counter-ico {
  margin-bottom: 1rem;
}
.counter-ico .ico-circle {
  height: 60px;
  width: 60px;
  line-height: 1.5;
  box-shadow: 0 0 0 10px #cde1f8;
}

.counter-num .counter {
  font-size: 2rem;
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.work-box {
  margin-bottom: 3rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
}
.work-box:hover img {
  transform: scale(1.3);
}

.work-img {
  display: block;
  overflow: hidden;
}
.work-img img {
  transition: all 1s;
}

.work-content {
  padding: 2rem 3% 1rem 4%;
}
.work-content .w-more {
  color: #4e4e4e;
  font-size: 0.8rem;
}
.work-content .w-more .w-ctegory {
  color: #0078ff;
}
.work-content .w-like {
  font-size: 2.5rem;
  color: #0078ff;
  float: right;
}
.work-content .w-like a {
  color: #0078ff;
}
.work-content .w-like .num-like {
  font-size: 0.7rem;
}

.w-title {
  font-size: 1.2rem;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}
.portfolio-details .portfolio-details-slider img {
  width: 100%;
}
.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}
.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #0078ff;
}
.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #0078ff;
}
.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(78, 78, 78, 0.08);
}
.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}
.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}
.portfolio-details .portfolio-description {
  padding-top: 30px;
}
.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}
.portfolio-details .portfolio-description p {
  padding: 0;
}

/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.testimonial-box {
  color: #fff;
  text-align: center;
}
.testimonial-box .author-test {
  margin-top: 1rem;
}
.testimonial-box .author-test img {
  margin: 0 auto;
}
.testimonial-box .author {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 1rem 0;
  display: block;
  font-size: 1.4rem;
}
.testimonial-box .comit {
  font-size: 2rem;
  color: #0078ff;
  background-color: #fff;
  width: 52px;
  height: 52px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  line-height: 1.6;
}
@media (min-width: 768px) {
  .testimonial-box .description {
    padding: 0 5rem;
  }
}
@media (min-width: 992px) {
  .testimonial-box .description {
    padding: 0 8rem;
  }
}
@media (min-width: 1200px) {
  .testimonial-box .description {
    padding: 0 13rem;
  }
}

.swiper-pagination {
  margin-top: 20px;
  position: relative;
}
.swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 1;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: #fff;
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.footer-paralax {
  padding: 4rem 0 0 0;
}

.contact-mf {
  margin-top: 4rem;
}
@media (min-width: 767px) {
  .contact-mf .box-pl2 {
    margin-top: 3rem;
    padding-left: 0rem;
  }
}

.php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.php-email-form input, .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.php-email-form input:focus, .php-email-form textarea:focus {
  border-color: #0078ff;
}
.php-email-form input {
  padding: 10px 15px;
}
.php-email-form textarea {
  padding: 12px 15px;
  margin-bottom: 0;
}
.php-email-form button[type=submit] {
  background: #0078ff;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}
.php-email-form button[type=submit]:hover {
  background: #3393ff;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*--------------------------------------------------------------
# Blog
--------------------------------------------------------------*/
@media (min-width: 767px) {
  .card-blog {
    margin-bottom: 3rem;
  }
}
.card-blog .card-body {
  position: relative;
}
.card-blog .card-category-box {
  position: absolute;
  text-align: center;
  top: -16px;
  left: 15px;
  right: 15px;
  line-height: 25px;
  overflow: hidden;
}
.card-blog .card-category {
  display: inline-block;
  color: #fff;
  padding: 0 15px 5px;
  overflow: hidden;
  background-color: #0078ff;
  border-radius: 4px;
}
.card-blog .card-category .category {
  color: #fff;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.1px;
  margin-bottom: 0;
}
.card-blog .card-title {
  font-size: 1.3rem;
  margin-top: 0.6rem;
}
.card-blog .card-description {
  color: #4e4e4e;
}
.card-blog .post-author {
  display: inline-block;
}
.card-blog .post-date {
  color: #4e4e4e;
  display: inline-block;
  float: right;
}

/*--------------------------------------------------------------
# Blog Single
--------------------------------------------------------------*/
.post-box,
.form-comments,
.box-comments,
.widget-sidebar {
  padding: 2rem;
  background-color: #fff;
  margin-bottom: 3rem;
}
@media (min-width: 768px) {
  .post-box,
.form-comments,
.box-comments,
.widget-sidebar {
    padding: 3rem;
  }
}

.blog-wrapper .article-title {
  font-size: 1.5rem;
}
@media (min-width: 768px) {
  .blog-wrapper .article-title {
    font-size: 1.9rem;
  }
}
.blog-wrapper .post-meta {
  margin: 1rem 0;
}
.blog-wrapper .post-meta ul {
  border-left: 4px solid #0078ff;
  margin-top: 1rem;
}
.blog-wrapper .post-meta ul li {
  display: inline-block;
  margin-left: 15px;
}
.blog-wrapper .post-meta ul a {
  color: #0078ff;
}
.blog-wrapper .post-meta ul span {
  color: #1e1e1e;
}
.blog-wrapper .blockquote {
  border-left: 4px solid #0078ff;
  padding: 18px;
  font-style: italic;
}

/*------/ Comments /------*/
.box-comments .list-comments li {
  padding-bottom: 40px;
}
.box-comments .list-comments .comment-avatar {
  display: table-cell;
  vertical-align: top;
}
.box-comments .list-comments .comment-avatar img {
  width: 80px;
  height: 80px;
}
.box-comments .list-comments .comment-author {
  font-size: 1.3rem;
}
@media (min-width: 768px) {
  .box-comments .list-comments .comment-author {
    font-size: 1.5rem;
  }
}
.box-comments .list-comments .comment-details {
  display: table-cell;
  vertical-align: top;
  padding-left: 25px;
}
.box-comments .list-comments a {
  color: #0078ff;
}
.box-comments .list-comments span {
  color: #1e1e1e;
  font-style: italic;
}
.box-comments .comment-children {
  margin-left: 40px;
}

/*------/ Sidebar /------*/
.widget-sidebar .sidebar-title {
  font-size: 1.6rem;
  font-weight: 600;
  border-left: 5px solid #0078ff;
  padding-left: 15px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.widget-sidebar .list-sidebar li {
  position: relative;
  padding: 6px 0 6px 24px;
}
.widget-sidebar .list-sidebar li:before {
  position: absolute;
  content: "";
  width: 10px;
  height: 1px;
  left: 0;
  background-color: #0078ff;
  top: 20px;
}

.sidebar-search input {
  background-color: #fff;
  border-radius: 0;
  transition: all 0.5s ease-in-out;
}
.sidebar-search .btn-search {
  background-color: #0078ff;
  border-color: #0078ff;
  border-radius: 0;
  padding-left: 20px;
  padding-right: 20px;
}

.widget-tags ul li {
  display: inline-block;
  background-color: #0078ff;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.5rem;
  border-radius: 15px;
}
.widget-tags ul li a {
  color: #fff;
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
footer {
  text-align: center;
  color: #fff;
  padding: 25px 0;
  background: #0062d3;
}
footer .copyright {
  margin-bottom: 0.3rem;
}
footer .credits {
  margin-bottom: 0;
}
footer .credits a {
  color: #fff;
}
