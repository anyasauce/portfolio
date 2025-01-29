// let disableAccess = true;

// function disableShortcuts(e) {
//     if (disableAccess) {
//         if (e.key === "F12" || (e.ctrlKey && e.key === "u")) {
//             e.preventDefault();
//             return false;
//         }
//     }
// }

// function disableContextMenu(e) {
//     if (disableAccess) {
//         e.preventDefault();
//     }
// }

// document.addEventListener("keydown", disableShortcuts);
// document.addEventListener("contextmenu", disableContextMenu);

// function toggleAccess() {
//     disableAccess = !disableAccess;
//     alert(disableAccess ? "Access disabled" : "Access enabled");
// }

document.addEventListener('DOMContentLoaded', function () {

function render() {
    const root = document.getElementById('root');

    const content = `
    <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo.png" alt="">
        <h1 class="sitename">My Portfolio</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li class="nav-item"><a class="nav-link" href="#hero">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About Me</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#achievements">School Achievements</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

  <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section" data-aos="fade-up" data-aos-delay="200">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Aspiring Entry Level Full Stack Web Developer</h1>
            <p data-aos="fade-up" data-aos-delay="100">Passionate about creating both static and dynamic web applications using
              modern technologies.</p>
            <div class="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a href="#projects" class="btn-get-started">View My Projects <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/hero-img.png" class="img-fluid animated" alt="Entry Level Full Stack Web Developer">
          </div>
        </div>
      </div>
    </section><!-- /Hero Section -->


  <!-- About Section -->
  <section id="about" class="about section" data-aos="fade-up" data-aos-delay="200">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-md-6">
          <img src="assets/images/picture.jpg" class="img-fluid rounded-circle mb-3 smaller-img" alt="Profile Image">
        </div>
        <div class="col-md-6">
          <div class="container section-title" data-aos="fade-up">
            <h2>About</h2>
          </div><!-- End Section Title -->
            <h2>About Me</h2>
          <p>Hi, I'm Josiah Danielle Gallenero, an entry-level full stack web developer with a passion for creating both static
            and dynamic websites. My skills range from frontend design to backend development, and I'm always eager to learn new
            technologies.</p>          <p>I am currently a 2nd year college student at PHINMA University of Iloilo, pursuing my degree in Information
            Technology. In my free time, I work on personal projects and freelance gigs to expand my portfolio and
            experience.</p>
        </div>
      </div>
    </div>
  </section><!-- /About Section -->


  <!-- Stats Section -->
  <section id="stats" class="stats section" data-aos="fade-up" data-aos-delay="200">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6">
          <div class="stats-item d-flex align-items-center w-100 h-100">
            <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
            <div>
              <span class="purecounter" data-end="232">0</span>
              <p>Happy Clients</p>
            </div>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-md-6">
          <div class="stats-item d-flex align-items-center w-100 h-100">
            <i class="bi bi-journal-richtext color-orange flex-shrink-0" style="color: #ee6c20;"></i>
            <div>
              <span class="purecounter" data-end="521">0</span>
              <p>Projects</p>
            </div>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-md-6">
          <div class="stats-item d-flex align-items-center w-100 h-100">
            <i class="bi bi-headset color-green flex-shrink-0" style="color: #15be56;"></i>
            <div>
              <span class="purecounter" data-end="1463">0</span>
              <p>Hours Of Support</p>
            </div>
          </div>
        </div><!-- End Stats Item -->

        <div class="col-lg-3 col-md-6">
          <div class="stats-item d-flex align-items-center w-100 h-100">
            <i class="bi bi-people color-pink flex-shrink-0" style="color: #bb0852;"></i>
            <div>
              <span class="purecounter" data-end="15">0</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div><!-- End Stats Item -->
      </div>
    </div>
  </section><!-- /Stats Section -->

  <script>
    const counters = document.querySelectorAll('.purecounter');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-end');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  </script>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Skills Section -->
<section id="skills" class="skills section" data-aos="fade-up" data-aos-delay="200">
  <div class="container">
    <div class="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <p>Current Technologies I Use to Build Projects/Systems</p>
    </div><!-- End Section Title -->
    <div class="row text-center mt-1 gy-5">

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="100">
        <i class="fab fa-html5 fa-3x" style="color: #e34c26;"></i>
        <h5 class="mt-2">HTML5</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="200">
        <i class="fab fa-css3-alt fa-3x" style="color: #1572b6;"></i>
        <h5 class="mt-2">CSS3</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="300">
        <i class="fab fa-bootstrap fa-3x" style="color: #563d7c;"></i>
        <h5 class="mt-2">Bootstrap</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="400">
        <i class="fab fa-js fa-3x" style="color: #f0db4f;"></i>
        <h5 class="mt-2">JavaScript</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="500">
        <i class="fab fa-php fa-3x" style="color: #8993be;"></i>
        <h5 class="mt-2">PHP</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="600">
        <i class="fas fa-database fa-3x" style="color: #00758f;"></i>
        <h5 class="mt-2">MySQL</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="700">
        <i class="fab fa-java fa-3x" style="color: #007396;"></i>
        <h5 class="mt-2">Java</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="800">
        <i class="fab fa-python fa-3x" style="color: #3776ab;"></i>
        <h5 class="mt-2">Python</h5>
      </div>

      <!-- New GitHub Skill -->
      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="900">
        <i class="fab fa-github fa-3x" style="color: #211F1F;"></i>
        <h5 class="mt-2">GitHub</h5>
      </div>

    </div>
  </div>
</section>

<!-- Learning Section -->
<section id="learning" class="learning section" data-aos="fade-up" data-aos-delay="200">
  <div class="container">
    <div class="container section-title" data-aos="fade-up">
      <h2>Learning</h2>
      <p>Technologies I'm Currently Learning</p>
      <h5>I’m currently focused on PHP Vanilla, JavaScript, and Python. Some technologies
      are not recommended for my projects because I am still in the learning phase.</h5>

    </div><!-- End Section Title -->
    <div class="row text-center mt-1 gy-5">

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="100">
        <i class="fab fa-react fa-3x" style="color: #61DBFB;"></i>
        <h5 class="mt-2">React.js</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="200">
        <i class="fab fa-node-js fa-3x" style="color: #8CC84B;"></i>
        <h5 class="mt-2">Node.js</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="300">
        <i class="fab fa-php fa-3x" style="color: #8993be;"></i>
        <h5 class="mt-2">PHP Laravel</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="400">
        <i class="fab fa-react fa-3x" style="color: #61DBFB;"></i>
        <h5 class="mt-2">React Native</h5>
      </div>

      <div class="col-md-3 col-6 icon-box" data-aos="fade-up" data-aos-delay="500">
        <i class="fab fa-node-js fa-3x" style="color: #8CC84B;"></i>
        <h5 class="mt-2">Express.js</h5>
      </div>

    </div>
  </div>
</section>


  <!-- Services Section -->
  <section id="services" class="services section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Check Our Services<br></p>
    </div><!-- End Section Title -->

    <div class="container">
      <div class="row gy-4">

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" id="frontend">
          <div class="service-item item-cyan position-relative">
            <i class="fab fa-html5 icon"></i>
            <h3>Front End Development</h3>
            <p>Create visually appealing and responsive websites using HTML, CSS, and JavaScript.</p>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200" id="backend">
          <div class="service-item item-orange position-relative">
            <i class="fab fa-php icon"></i>
            <h3>Back End Development</h3>
            <p>Develop server-side logic and database management using PHP and other back-end technologies.</p>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300" id="database">
          <div class="service-item item-teal position-relative">
            <i class="fas fa-database icon"></i>
            <h3>Database</h3>
            <p>Manage and manipulate databases effectively using MySQL and other database systems.</p>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400" id="programming">
          <div class="service-item item-red position-relative">
            <i class="fab fa-java icon"></i>
            <h3>Programming</h3>
            <p>Develop applications and software solutions using various programming languages like Java and Python.</p>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500" id="webdesign">
          <div class="service-item item-indigo position-relative">
            <i class="fas fa-paint-brush icon"></i>
            <h3>Web Design</h3>
            <p>Create stunning and user-friendly designs for websites and web applications.</p>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600" id="capstone">
          <div class="service-item item-pink position-relative">
            <i class="fas fa-project-diagram icon"></i>
            <h3>Capstone System</h3>
            <p>Develop comprehensive systems for capstone projects tailored to meet academic requirements.</p>
          </div>
        </div><!-- End Service Item -->

      </div>
    </div>

  </section><!-- /Services Section -->

        <!-- Projects Section -->
        <section id="projects" class="py-5" data-aos="fade-up" data-aos-delay="200">
          <div class="container">
            <div class="container section-title" data-aos="fade-up">
              <h2>Projects</h2>
              <p>Check Our Recent Projects<br></p>
            </div><!-- End Section Title -->
            <div class="row g-4 mt-4">
              <!-- Project 1 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/reservation.png" class="card-img-top" alt="Project 1"
                    onclick="openModal('assets/project/reservation.png')">
                  <div class="card-body">
                    <h5 class="card-title">ITSD ID Reservation System</h5>
                      <p class="card-text">ID Reservation: A system designed to efficiently handle and manage ID reservations for users. <br>
                        Used Languages: PHP Vanilla, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 1 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/rizal.png" class="card-img-top" alt="Project 1"
                    onclick="openModal('assets/project/rizal.png')">
                  <div class="card-body">
                    <h5 class="card-title">Rizal Ibarra Profiling System</h5>
                    <p class="card-text">An efficient profiling system for Rizal's data. <br> Used Languages: PHP Vanilla,
                      MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 2 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/ibarra.png" class="card-img-top" alt="Project 2"
                    onclick="openModal('assets/project/ibarra.png')">
                  <div class="card-body">
                    <h5 class="card-title">Rizal Ibarra Profiling System</h5>
                    <p class="card-text">Centralizes and manages Ibarra's personal information effectively. <br> Used Languages:
                      PHP Vanilla, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 3 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/jb.png" class="card-img-top" alt="Project 3"
                    onclick="openModal('assets/project/jb.png')">
                  <div class="card-body">
                    <h5 class="card-title">Roblox Jailbreak System</h5>
                    <p class="card-text">A system for managing Roblox Jailbreak players' data. <br> Used Languages: PHP Vanilla,
                      MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 4 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/attendance.png" class="card-img-top" alt="Project 4"
                    onclick="openModal('assets/project/attendance.png')">
                  <div class="card-body">
                    <h5 class="card-title">Attendance System</h5>
                    <p class="card-text">Tracks and manages attendance records efficiently. <br> Used Languages: PHP Vanilla,
                      MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 5 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/attendanceform.png" class="card-img-top" alt="Project 5"
                    onclick="openModal('assets/project/attendanceform.png')">
                  <div class="card-body">
                    <h5 class="card-title">Attendance Form System</h5>
                    <p class="card-text">Simplifies attendance submission through an online form. <br> Used Languages: PHP
                      Vanilla, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 6 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/phusms.png" class="card-img-top" alt="Project 6"
                    onclick="openModal('assets/project/phusms.png')">
                  <div class="card-body">
                    <h5 class="card-title">Phinma UI Student Management System</h5>
                    <p class="card-text">Manages student records and information for efficiency. <br> Used Languages: Python
                      Flask, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 7 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/coffee.png" class="card-img-top" alt="Project 7"
                    onclick="openModal('assets/project/coffee.png')">
                  <div class="card-body">
                    <h5 class="card-title">Coffee Shop System</h5>
                    <p class="card-text">Handles orders and inventory for coffee shop operations. <br> Used Languages: PHP
                      Vanilla, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 8 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/water.png" class="card-img-top" alt="Project 8"
                    onclick="openModal('assets/project/water.png')">
                  <div class="card-body">
                    <h5 class="card-title">Water Refiling System</h5>
                    <p class="card-text">Efficiently manages water refilling service requests. <br> Used Languages: PHP Vanilla,
                      MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 9 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/feedback.png" class="card-img-top" alt="Project 9"
                    onclick="openModal('assets/project/feedback.png')">
                  <div class="card-body">
                    <h5 class="card-title">Feedback Form System</h5>
                    <p class="card-text">Collects and organizes user feedback efficiently. <br> Used Languages: PHP Vanilla,
                      MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 10 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/id.png" class="card-img-top" alt="Project 10"
                    onclick="openModal('assets/project/id.png')">
                  <div class="card-body">
                    <h5 class="card-title">ID Generator System</h5>
                    <p class="card-text">Generates unique IDs for various applications. <br> Used Languages: PHP Vanilla, MySQL,
                      Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 11 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/rfid.png" class="card-img-top" alt="Project 11"
                    onclick="openModal('assets/project/rfid.png')">
                  <div class="card-body">
                    <h5 class="card-title">RFID System</h5>
                    <p class="card-text">Manages RFID-based attendance and tracking system. <br> Used Languages: PHP Vanilla,
                      MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 12 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/codewebtech.png" class="card-img-top" alt="Project 12"
                    onclick="openModal('assets/project/codewebtech.png')">
                  <div class="card-body">
                    <h5 class="card-title">E-Commerce System</h5>
                    <p class="card-text">Facilitates online shopping and transaction management. <br> Used Languages: PHP
                      Vanilla, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 13 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/sdms.png" class="card-img-top" alt="Project 13"
                    onclick="openModal('assets/project/sdms.png')">
                  <div class="card-body">
                    <h5 class="card-title">SDMS Student Management System</h5>
                    <p class="card-text">Comprehensive system for managing student information. <br> Used Languages: PHP
                      Vanilla, MySQL, Bootstrap, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 14 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/design.png" class="card-img-top" alt="Project 13"
                    onclick="openModal('assets/project/design.png')">
                  <div class="card-body">
                    <h5 class="card-title">Coffee Shop Web Design</h5>
                    <p class="card-text">Comprehensive system for managing student information. <br> Used Languages: HTML, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 15 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/web.png" class="card-img-top" alt="Project 13"
                    onclick="openModal('assets/project/web.png')">
                  <div class="card-body">
                    <h5 class="card-title">Good Student Web Design</h5>
                    <p class="card-text">Comprehensive system for managing student information. <br> Used Languages: HTML, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 16 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/calculator.png" class="card-img-top" alt="Project 13"
                    onclick="openModal('assets/project/calculator.png')">
                  <div class="card-body">
                    <h5 class="card-title">IOS Calculator Web Design</h5>
                    <p class="card-text">Comprehensive system for managing student information. <br> Used Languages: HTML, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 17 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/codeweb.png" class="card-img-top" alt="Project 13"
                    onclick="openModal('assets/project/codeweb.png')">
                  <div class="card-body">
                    <h5 class="card-title">E-Commerce Web Design</h5>
                    <p class="card-text">Comprehensive system for managing student information. <br> Used Languages: HTML, Bootstrap, JavaScript,
                      CSS.</p>
                  </div>
                </div>
              </div>
              <!-- Project 18 -->
              <div class="col-md-4">
                <div class="card h-100">
                  <img src="assets/project/giveaway.png" class="card-img-top" alt="Project 13"
                    onclick="openModal('assets/project/giveaway.png')">
                  <div class="card-body">
                    <h5 class="card-title">Giveaway System</h5>
                    <p class="card-text">Comprehensive system for managing student information. <br> Used Languages: HTML, PHP Vanilla, JavaScript, CSS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Modal for Projects -->
        <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="projectModalLabel">Project Image</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="" id="modalProjectImage" class="img-fluid" alt="Project Image">
              </div>
            </div>
          </div>
        </div>

        <script>
          function openModal(imageSrc) {
            document.getElementById('modalProjectImage').src = imageSrc;
            var myModal = new bootstrap.Modal(document.getElementById('projectModal'));
            myModal.show();
          }
        </script>

        <!-- Achievements Section -->
        <section id="achievements" class="py-5 bg-light" data-aos="fade-up" data-aos-delay="200">
          <div class="container">
            <div class="container section-title" data-aos="fade-up">
              <h2>School Achievement</h2>
              <p>Check Our Achievements<br></p>
            </div><!-- End Section Title -->
            <div class="row g-4 mt-4">
              <!-- Achievement 1 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/dean lister.jpg" class="card-img-top" alt="Top 1 Student"
                    onclick="openAchievementModal('assets/achievements/dean lister.jpg')">
                  <div class="card-body text-center">
                    <h5 class="card-title">Dean's Lister Award</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 2 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/cid 2.jpg" class="card-img-top" alt="Dean's Lister Award"
                    onclick="openAchievementModal('assets/achievements/cid 2.jpg')">
                  <div class="card-body text-center">
                    <h5 class="card-title">CID Participation</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 3 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/cid.jpg" class="card-img-top" alt="Hackathon Winner"
                    onclick="openAchievementModal('assets/achievements/cid.jpg')">
                  <div class="card-body text-center">
                    <h5 class="card-title">CID 2nd Place Award</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 4 -->
              <div class="col-md-4">
                <div class="card">
                  <iframe src="assets/achievements/ITE 186.pdf" class="card-img-top" style="height: 240px; width: 100%;"
                    frameborder="0" onclick="openAchievementModal('assets/achievements/ITE 186.pdf')"></iframe>
                  <div class="card-body text-center">
                    <h5 class="card-title">Computer Programming 1</h5>
                    <p class="card-text">Year Level: 1st Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 5 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/ITE 083.jpg" class="card-img-top" alt="Coding Challenge Runner-Up"
                    onclick="openAchievementModal('assets/achievements/ITE 083.jpg')">
                  <div class="card-body text-center">
                    <h5 class="card-title">Top 10 in Project Management</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 6 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/ITE 298.jpg" class="card-img-top" alt="Community Service Award"
                    onclick="openAchievementModal('assets/achievements/ITE 298.jpg')">
                  <div class="card-body text-center">
                    <h5 class="card-title">Top 10 in Information Management</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 7 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/backstroke.png" class="card-img-top" alt="Community Service Award"
                    onclick="openAchievementModal('assets/achievements/backstroke.png')">
                  <div class="card-body text-center">
                    <h5 class="card-title">Bronze in the RELAY BACKSTROKE MEN CATEGORY in PED 032 Swimming Culminating Activity</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 8 -->
              <div class="col-md-4">
                <div class="card">
                  <img src="assets/achievements/freestyle.png" class="card-img-top" alt="Community Service Award"
                    onclick="openAchievementModal('assets/achievements/freestyle.png')">
                  <div class="card-body text-center">
                    <h5 class="card-title">Bronze in the RELAY FREESTYLE MEN CATEGORY in PED 032 Swimming Culminating Activity</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
              <!-- Achievement 9 -->
              <div class="col-md-4">
                <div class="card">
                    <video class="card-img-top" controls height="320">
                      <source src="assets/achievements/464516904_9533455060014651_4704631232703033457_n.mp4" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  <div class="card-body text-center">
                    <h5 class="card-title">5KM Run in Milo Marathon</h5>
                    <p class="card-text">Year Level: 2nd Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Modal for Achievements -->
        <div class="modal fade" id="achievementModal" tabindex="-1" aria-labelledby="achievementModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="achievementModalLabel">Achievement Image</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="" id="modalAchievementImage" class="img-fluid" alt="Achievement Image">
                <iframe id="modalAchievementPdf" src="" width="100%" height="500px" frameborder="0" style="display: none;"></iframe>
              </div>
            </div>
          </div>
        </div>
        <script>
          function openAchievementModal(imageSrc) {
            document.getElementById('modalAchievementImage').src = imageSrc;

            var modal = new bootstrap.Modal(document.getElementById('achievementModal'));
            modal.show();
          }
        </script>

<section id="contact" class="contact section" data-aos="fade-up" data-aos-delay="200">

  <!-- Section Title -->
  <div class="container section-title aos-init aos-animate" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Contact Us</p>
  </div><!-- End Section Title -->

  <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

    <div class="row gy-4">

      <div class="col-lg-6">
        <div class="row gy-4">
          <div class="col-md-6">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-geo-alt-fill icon"></i>
              <h3>Country</h3>
              <p>Philippines, 5000</p>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="300">
              <i class="bi bi-chat-dots-fill icon"></i>
              <h3>Contact Us</h3>
              <p class="mt-3">
                <strong>WhatsApp:</strong> <a href="https://wa.me/639100616716" target="_blank">+6391 0061 6716</a><br>
                <strong>Telegram:</strong> <a href="https://t.me/anyaqt1" target="_blank">anyaqt1</a>
              </p>
            </div>
          </div><!-- End Contact Info Item -->


          <div class="col-md-6">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="400">
              <i class="bi bi-envelope-fill icon"></i>
              <h3>Email Us</h3>
              <p><strong>Email:</strong> <span><a href="mailto:anyajb014@gmail.com">anyajb014@gmail.com</a></span></p>
            </div>
          </div><!-- End Email Info Item -->

          <div class="col-md-6">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="500">
              <i class="bi bi-clock-fill icon"></i>
              <h3>Open Hours</h3>
              <p>Monday - Friday</p>
              <p>9:00AM - 05:00PM</p>
            </div>
          </div><!-- End Open Hours Info Item -->

        </div>
      </div>

      <div class="col-lg-6">
        <form id="my-form" action="https://formspree.io/f/xovqvdoj" method="POST" class="mt-4 needs-validation"
          novalidate data-aos="fade-up" data-aos-delay="200">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input type="text" class="form-control" name="name" placeholder="Your Name" required>
                <label for="name">Your Name</label>
                <div class="invalid-feedback">
                  Please provide your name.
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input type="email" class="form-control" name="email" placeholder="Your Email" required>
                <label for="email">Your Email</label>
                <div class="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <div class="form-floating">
                <input type="text" class="form-control" name="subject" placeholder="Subject" required>
                <label for="subject">Your Subject</label>
                <div class="invalid-feedback">
                  Please provide a subject.
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="form-floating">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              <label for="message">Your Message</label>
              <div class="invalid-feedback">
                Please enter your message.
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-lg" name="submit"><i class="bi bi-send-fill"></i> Send
              Message</button>
          </div>
        </form>
      </div>

      <script>
        (function () {
          'use strict'
          var forms = document.querySelectorAll('.needs-validation')
          Array.prototype.slice.call(forms)
            .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }
                form.classList.add('was-validated')
              }, false)
            })
        })()
      </script>

    </div>

  </div>

</section>

  <!-- Include SweetAlert -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script>
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);

      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Thanks for your submission!',
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'There was a problem submitting your form',
          });
        }
      }).catch(error => {
        // Check for connection issues
        if (navigator.onLine) {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'There was a problem submitting your form due to a slow internet connection.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'No internet connection. Please check your network and try again.',
          });
        }
      });
    }

    form.addEventListener("submit", handleSubmit);
  </script>

  </main>

  <footer id="footer" class="footer" data-aos="fade-up" data-aos-delay="200">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="d-flex align-items-center">
            <span class="sitename">Josiah Danielle Gallenero</span>
          </a>
          <div class="footer-contact pt-3">
            <p>Philippines, 5000</p>
            <p class="mt-3"><strong>WhatsApp:</strong> <span>+6391 0061 6716</span></p>
            <p><strong>Telegram:</strong> <span>@anyaqt1</span></p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#about">About Me</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#webdesign">Web Design</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#webdesign">Web Development</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#backend">Back End Development</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#frontend">Front End Development</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#programming">Programming</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#database">Database</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#capstone">Capstone</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <p>Stay connected with us through our social media platforms for updates, insights, and more.</p>
          <div class="social-links d-flex">
            <a href="https://github.com/josiahgallenero" target="_blank"><i class="bi bi-github">1</i></a>
            <a href="https://github.com/anyasauce" target="_blank"><i class="bi bi-github">2</i></a>
            <a href="https://www.facebook.com/josiahhhh8" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/_josiahhhhh1/" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/josiah-danielle-gallenero-750966290/" target="_blank"><i
                class="bi bi-linkedin"></i></a>
            <a href="https://t.me/anyaqt1" target="_blank"><i class="bi bi-telegram"></i></a>
            <a href="https://wa.me/yourWhatsAppNumber" target="_blank"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span id="currentYear"></span> <strong>Josiah Danielle Gallenero</strong> | All Rights Reserved</p>

      <script>
        document.getElementById("currentYear").textContent = new Date().getFullYear();
      </script>
  </footer>
    `;

    root.innerHTML = content;

}

render();

});