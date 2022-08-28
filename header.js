
let appHeader = `                 
<nav class="navbar navbar-expand-sm navbar-light" id="back-color">
<div class="container flex-start">
    <a class="navbar-brand" href="#"> <img src="logo1.png" alt="Avatar Logo" style="width:40px;" class="rounded-pill"> </a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <!--Add index.html-->
            <li class="nav-item">
                <a class="nav-link  text-light" href="index.html"><abbr title="HOME"><img src="ihome.png" height="25px"></abbr></a>
            </li>
            <!--Add index.html-->
            <li class="nav-item">
                <a class="nav-link text-light" href="courses.html"><b>COURSES</b></a>
            </li>
            
            <!--Add index.html-->
            <li class="nav-item">
                <a class="nav-link text-light" href="faculty.html"><b>FACULTY</b></a>
            </li>
            
            <!--Add index.html-->
            <li class="nav-item">
                <a class="nav-link text-light" href="event.html"><b>EVENTS</b></a>
            </li>
            <!--Add index.html-->
            <li class="nav-item">
                <a class="nav-link text-light" href="about.html"><b>ABOUT</b></a>
            </li>
        </ul>
    </div>
</div>
</nav>
`;
document.getElementById("header").innerHTML = appHeader;