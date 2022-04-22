const hamburger = document.querySelector('.hamburger');
const popupMenu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  popupMenu.classList.add('active');
  body.classList.add('scroll-lock');
  hamburger.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popupMenu.classList.remove('active');
  body.classList.remove('scroll-lock');
  hamburger.classList.remove('active');
});

const speakerSection = document.createElement('div');
const speakers = document.getElementById('speakers');

const featuredSpeaker = [
  {
    chessboard: 'images/chess-board.png',
    speaker1Name: 'Keith Bell',
    speaker1Title: '<i>Professor of Smart Grids, University of Strathclyde</i>',
    speaker1Intro: 'Keith Bell holds the Scottish Power Chair in Future Power Systems at the University of Strathclyde. He joined the University in 2005 having previously worked as an electrical engineering researcher in Bath, Manchester and Naples, and as a system development engineer in the electricity supply industry in Britain.',
    speaker1img: 'images/keith-bell.png',

    speaker2Name: 'Adam Berman',
    speaker2Title: '<i>Deputy Director for Generation Policy, Energy UK</i>',
    speaker2Intro: 'In this position, he advocates for ways to speed up the UK’s journey to Net-Zero through enabling low-carbon investment in clean power generation. Adam’s role is to ensure that Energy UK works closely with policymakers toward market-based policies that harness the power of the business        community to drive the energy transition.',
    speaker2img: 'images/adam-berman.png',

    speaker3Name: 'Andrew Jamieson',
    speaker3Title: '<i>Chief Executive, ORE Catapult</i>',
    speaker3Intro: 'Andrew is Chief Executive of the Offshore Renewable Energy Catapult, a UK wide technology and innovation centre supporting businesses to accelerate the design, deployment and commercialisation of offshore renewable energy – wind, wave and tidal power. Jamieson brings over 40 years experience in the Energy sector.',
    speaker3img: 'images/andrew-jamieson.png',

    speaker4Name: 'Maria Kalogera',
    speaker4Title: '<i>Innovations Manager, CrossWind</i>',
    speaker4Intro: 'Renewable Energies Specialist with an Electrical Engineering background (MSc in Power Systems and Sustainable Energy Technologies from TU Delft), comprehensive project experience in offshore wind projects (Borssele 3,4 and CrossWind) and in mega projects (Prelude and Browse FLNG) and an insatiable curiosity for emerging technologies, energy transition and finding solutions to tackle energy resource scarcity.',
    speaker4img: 'images/maria-kalogera.png',

    speaker5Name: 'Jon Gluyas',
    speaker5Title: '<i>Chair in Geoenergy, Carbon Capture & Storage, Orsted</i>',
    speaker5Intro: 'His current research examines the utility of abandoned and late-life petroleum fields for  supplying geothermal energy as well as the possibility that deep karst in Carboniferous limestones could also make major contribution the UK’s heating requirements as well as reducing the national carbon footprint.',
    speaker5img: 'images/jon-glyus.png',

    speaker6Name: 'Julian Leslie',
    speaker6Title: '<i>Head of Networks & Chief Engineer, National Grid ESO</i>',
    speaker6Intro: 'Responsible for identifying the future GB transmission network capability requirements and then making economic recommendations as to which options to take forward.',
    speaker6img: 'images/julian-leslie.png',
  },
];

featuredSpeaker.forEach((data) => {
  speakerSection.innerHTML = `
    <h3> Featured Speakers</h3>
    <div class="line"></div>
    <div class="speakers container">
        <div class="speaker1">
          <div>
            <img class="chessboard" src="${data.chessboard}" alt="">
            <img class="speaker-img" src="${data.speaker1img}" alt="">
          </div>
          <div class="speaker-detail">
            <h2>${data.speaker1Name}</h2>
            <h4>${data.speaker1Title}</h4>
            <p>${data.speaker1Intro}</p>
          </div>
      </div>  

      <div class="speaker1">
          <div>
            <img class="chessboard" src="${data.chessboard}" alt="">
            <img class="speaker-img" src="${data.speaker2img}" alt="">
          </div>
          <div class="speaker-detail">
            <h2>${data.speaker2Name}</h2>
            <h4>${data.speaker2Title}</h4>
            <p>${data.speaker2Intro}</p>
          </div>
      </div>  

      <div class="speaker1 hidden-mobile">
          <div>
            <img class="chessboard" src="${data.chessboard}" alt="">
            <img class="speaker-img" src="${data.speaker3img}" alt="">
          </div>
          <div class="speaker-detail">
            <h2>${data.speaker3Name}</h2>
            <h4>${data.speaker3Title}</h4>
            <p>${data.speaker3Intro}</p>
          </div>
      </div>  

      <div class="speaker1 hidden-mobile">
          <div>
            <img class="chessboard" src="${data.chessboard}" alt="">
            <img class="speaker-img" src="${data.speaker4img}" alt="">
          </div>
          <div class="speaker-detail">
            <h2>${data.speaker4Name}</h2>
            <h4>${data.speaker4Title}</h4>
            <p>${data.speaker4Intro}</p>
          </div>
      </div>  

      <div class="speaker1 hidden-mobile">
          <div>
            <img class="chessboard" src="${data.chessboard}" alt="">
            <img class="speaker-img" src="${data.speaker5img}" alt="">
          </div>
          <div class="speaker-detail">
            <h2>${data.speaker5Name}</h2>
            <h4>${data.speaker5Title}</h4>
            <p>${data.speaker5Intro}</p>
          </div>
      </div>  

      <div class="speaker1 hidden-mobile">
          <div>
            <img class="chessboard" src="${data.chessboard}" alt="">
            <img class="speaker-img" src="${data.speaker6img}" alt="">
          </div>
          <div class="speaker-detail">
            <h2>${data.speaker6Name}</h2>
            <h4>${data.speaker6Title}</h4>
            <p>${data.speaker6Intro}</p>
          </div>
      </div>  

      <div class="more hidden-desktop">MORE</div>
    </div>
    `;

  speakers.appendChild(speakerSection);
});
