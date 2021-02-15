import React from "react";
import "./LandingPage.css";
import chad from "./img/chad-removebg.png";
import $ from "jquery";

const LandingPage = () => {
  
  $('.intro-img').onclick = () =>
    function () {
      $(".intro-img").ripples("show");
    };

  var example = [
    "Hallo wêreld, ek is <br/> <strong>Chad Hoosain</strong>", //afrinkaans
    "Molo weHlabathi, ndinguye <br/> <strong>Chad Hoosain</strong>", //xhosa
    "Sawubona Mhlaba, nginguye <br/> <strong>Chad Hoosain</strong>", //zulu
    "Nǐ hǎo shìjiè, wǒ shì <br/> <strong>Chad Hoosain</strong>", //chinese
    "Hola mundo, soy <br/> <strong>Chad Hoosain</strong>", //spanish
    "Kon'nichiwa sekai, watashi wa <br/> <strong>Chad Hoosain</strong>", // japanese
    "Olá mundo estou <br/> <strong>Chad Hoosain</strong>", //portuguese
    "Hello World, I am <br/> <strong>Chad Hoosain</strong>" //english
  ];

  var sub_example = [
    "Voornemende webontwikkelaar", //afrinkaans
    "Umnqweno wewebhu", //xhosa
    "Ufisa unjiniyela wewebhu", //zulu
    "Yǒu bàofù de Web kāifā rényuán", //chinese
    "Aspirante a desarrollador web", //spanish
    "Iyoku-tekina u~ebu kaihatsu-sha", // japanese
    "Aspirante a desenvolvedor web", //portuguese
    "Aspiring Web Developer" //english
  ];

  var timeGap = 1800000 // every 24hours (in 86,400,000 milliseconds) | every 30min (in 30000 milliseconds)

  textSequence(0);
  function textSequence(i) {
    if (example.length > i) {
      setTimeout(function () {
        document.getElementById("sequence").innerHTML = example[i];
        textSequence(++i);
      }, timeGap); // every 24hours (in 86,400,000 milliseconds)
    } else if (example.length === i) {
      // Loop
      textSequence(0);
    }
  }

  textSequence2(0);
  function textSequence2(i) {
    if (sub_example.length > i) {
      setTimeout(function () {
        document.getElementById("sub-sequence").innerHTML = sub_example[i];
        textSequence2(++i);
      }, timeGap); // every 24hours (in 86,400,000 milliseconds)
    } else if (sub_example.length === i) {
      // Loop
      textSequence2(0);
    }
  }

  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <div id="left" className="col-sm-8">
            <h1
              id="sequence"
              className="animate__animated animate__bounce header "
            >
              Hello World, I am <br />
              <strong>Chad Hoosain</strong>
            </h1>
            <hr />
            <p id="sub-sequence" className="sub-header" data-aos="zoom-in-right">
              Aspiring Web Developer
            </p>
          </div>
          <div id="right" className="col-sm-4" data-aos="zoom-out-down">
            <img src={chad} alt="CH" className="landing-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
