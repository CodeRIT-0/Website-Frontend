import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Team() {
  let message = `Some general info about faculty.`;
  return (
    <div>
      <div>
        <div class="container">
          <h2 class="section-title">The Faculty</h2>
          <i class="fa fa-address-book"></i>
          <p class="section-subtitle">{message}</p>
        </div>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/AnnapurnaMam.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Dr Annapurna P. Patil</h3>

            <div class="team-info">
              <p>Faculty Co-ordinator</p>
            </div>

            <ul class="team-icon">
              <li>
                <a
                  href="https://msrit.edu/department/faculty-detail.html?dept=cse&ID=1"
                  class="twitter"
                >
                  <i class="fa fa-home"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="team-item">
            <img
              src={require("../../images/PradeepSir.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Pradeep Kumar D</h3>

            <div class="team-info">
              <p>Faculty Co-ordinator</p>
            </div>

            <ul class="team-icon">
              <li>
                <a
                  href="https://msrit.edu/department/faculty-detail.html?dept=cse&ID=18"
                  class="twitter"
                >
                  <i class="fa fa-home"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="team-item">
            <img
              src={require("../../images/JamunaMam.png")}
              class="team-img"
              alt="pic"
            />

            <h3>Jamuna S Murthy</h3>

            <div class="team-info">
              <p>Faculty Co-ordinator</p>
            </div>

            <ul class="team-icon">
              <li>
                <a
                  href="https://msrit.edu/department/faculty-detail.html?dept=cse&ID=22"
                  class="twitter"
                >
                  <i class="fa fa-home"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div>
        <div class="container">
          <h2 class="section-title">Senior Core</h2>

          <p class="section-subtitle">/* pun */</p>
        </div>
        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/ReeshaShenoy.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Reesha Shenoy</h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>
              The name's Reesha, CSE 4th year. Bet I can beat you at chess.
              Ambidextrous, goofy extrovert. I prefer my puns indented ;) .
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/reesha-shenoy"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/UtkarshAgarwal.jfif")}
              class="team-img"
              alt="pic"
            />

            <h3>Utkarsh Agarwal</h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>
              Utkarsh - Dogaholic, Code-slinger and a harmonious senior you'd
              love to talk to.
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/utkarsh-agarwal-654470191/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/SinchanaML.jpeg")}
              class="team-img"
              alt="pic"
            />

            <h3>Sinchana M L</h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>
              An otaku. I have an obsession with the "one more episode"
              syndrome. I love making food. Don't forget to invite me to your
              next jam session!
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href=" https://www.linkedin.com/in/sinchana-lingaraju"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/PrasanthiGandham.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Prasanthi Gandham</h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>
              An average cat enjoyer who listens to The Weeknd on weekdays and
              watches anime during the weekends.
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/prash2002/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/JayeshGoyal.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Jayesh Goyal </h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>
              Introvert yet keeps it real | Lazy yet hardworking | Emotional yet
              logical | Love philosophical and scientific paradoxes
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/jayesh-goyal-966a8820a"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="team-item">
            <img
              src={require("../../images/TarunDatwani.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Tarun Datwani</h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>A Geek Nerd and an Optimist</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/tarun-datwani-a46b13193/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/Subinoy.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Subinoy Karmakar </h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>Geek. Sports buff. Coder. In that order.</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/subinoy-karmakar-5089351b3"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/ChiragSinha.jpeg")}
              class="team-img"
              alt="pic"
            />

            <h3>Chirag Sinha</h3>

            <div class="team-info">
              <p>Senior Core Member</p>
            </div>

            <p>
              I love stress so I started doing programming since then I only see
              red colours in my solutions and red coders in discuss section.
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/chiragsinha07/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div>
        <div class="container">
          <h2 class="section-title">Junior Core</h2>

          <p class="section-subtitle">/* pun */</p>
        </div>
        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/AyushJain.jpeg")}
              class="team-img"
              alt="pic"
            />
            <h3>Ayush Jain</h3>
            <div class="team-info">
              <p>Junior Core Member</p>
            </div>
            <p>A Fanta Funny Guy</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/ayush-jain-b4540a17b"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/AbhiroopSingh.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Abhiroop Singh</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>bunking every possible class and extending deadlines</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/abhiroop-singh-49043320a/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/ninaadshenoy.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Ninaad P S</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>
              A memeophile, a die hard football fan and I eat Hide n Seek line
              by line in the most traditional way. Also hold a record for
              getting rickrolled the most times.
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/ninaad-shenoy-825039211/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/AshishUpadhyay.jpeg")}
              class="team-img"
              alt="pic"
            />
            <h3>Ashish Upadhyay</h3>
            <div class="team-info">
              <p>Junior Core Member</p>
            </div>
            <p>I think I am funny and can code too.</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/ashish-upadhyay-51aa211b8"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/Arya.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Arya</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>
              A finicky without a surname. Living my prettiest fairytale and
              worst nightmare simultaneously.
            </p>

            <ul class="team-icon">
              <li>
                <a href="http://linkedin.com/in/arya-151512203" class="twitter">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/AnirudhaDargar.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Anirudha Dargar</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>love watching taarak mehta ka ooltah chashmah</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/anirudha-dargar-726bb6236/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/MaitriPTadas.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Maitri P</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>A Bibliophile and an ambivert who loves travelling.</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/maitri-p-tadas-25286b202"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/JayJariwala.jpeg")}
              class="team-img"
              alt="pic"
            />

            <h3>Jay Jariwala</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>
              I generally finish any movie within 30-40 min by skipping most of
              the part,Following Eat Sleep Code repeat with less attendence!!!!
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/jay-jariwala-b13528223/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="team-item">
            <img
              src={require("../../images/IshaanShetty.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Ishaan V Shetty </h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>
              Hello! I am a die hard sport enthusiast in a coding world!! Being
              a cinephile myself, i love watching old classic cult movies, if
              you're into the same....Hiii best friend;). I am cool as ice in
              the world of stress and tension leading a typical life of an
              engineering student (yes this is how every engineer is)
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/ishaanshetty2040"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="section-white">
          <div class="team-item">
            <img
              src={require("../../images/Prajwal.jpg")}
              class="team-img"
              alt="pic"
            />
            <h3>PRAJWAL B MEHENDARKAR </h3>
            <div class="team-info">
              <p>Junior Core Member</p>
            </div>
            <p>
              #! /rit/coderit in_code_rit=true while[in_code_rit] echo "Hi , I'm
              Prajwal B 3rd year ISE student" echo "AI/ML & Flutter
              enthusiastic" echo "Favorite hangout place - Foo bar" echo "For
              more info refer documentation" done
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/prajwal-b-mehendarkar-657544210"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/Rishu.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Rishu Rai</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>To understand recursion. You must first understand recursion.</p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/rishu-rai-b2098a205"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="team-item">
            <img
              src={require("../../images/Harsh.jpg")}
              class="team-img"
              alt="pic"
            />

            <h3>Harsh Dutta Tewari</h3>

            <div class="team-info">
              <p>Junior Core Member</p>
            </div>

            <p>
              I am a Competitive Programmer who is highly addicted to DSA but at
              the same time, has a great affinity towards Development.
            </p>

            <ul class="team-icon">
              <li>
                <a
                  href="https://www.linkedin.com/in/harsh-dutta-tewari/"
                  class="twitter"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
