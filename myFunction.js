/*Resume Section*/
const resumeList = {
  address: `<p>
          <span>Birth Date:</span> 16 Jan 2000.<br>
          <span>Number:</span> 096 356 9994.<br>
          <span>Email:</span> senkhemrin@gmail.com<br>
          <span>Place of Birth:</span> Khum Saeb, Kampong Prasat, Kampong Chhnang.<br>
          <span>Permanant Address:</span> Sak Sampov village, Sak Sampov commune, Dangkor district, phnom penh.<br>
          <span>Current Address:</span> St 110, Saensokh District, Tuek Thla Commune, Phnom Penh.
        </p>`,
  education: `<p>
                <span>2005-2011:</span> Completed primary at Hun Sen Sak Sam Pov Primary School.<br>
                <span>2011-2016:</span> Completed secondary at Pong Teok High School.<br>
                <span>2017-2018:</span> Completed BaccII at Pong Teok High School.<br>
                <span>2022-2023:</span> Completed Online course at Rean Web (HTML5, CSS3, Javascript , Bootstrap, JQuery).<br>
                <span>2023-Present:</span> CS First-year student of Asia Europe University.
              </p>`,
  language: `<p id="lang">
                <span>Khmer:</span> (Native).<br>
                <span>English:</span> (Medium).
              </p>`,
  skill: `
        <p id="skills">
          <span>Technology:</span><br>
          - Microsoft Office<br>
          - Canva<br>
          - Photoshop<br>
          - Figma<br>
          - C++<br>
          - OOP<br>
          - HTML5<br>
          - CSS3<br>
          - JavaScript<br>
          - jQuery<br>
          - Boostrap<br>
        </p><p id="skills">
        - Git & GitHub<br>
        - Node.js<br>
        - Express JS<br>
        - EJS<br>
        - APIs<br>
        - SQL<br>
        - React JS<br>
        </p>`
  ,
  experience: `
        <p id="experiences">
          <span>Product Catalog Officer Wingmall App at Wing Bank<br>
            (July 2023 - Aug 2024)</span><br>
           - Create Stores & Menus on Wingmall.<br>
  - Add Promotion Merchants on Wingmall.<br>
  - Create Stores and menus for Merchants.<br>
  - Update Menus, Stores, On Wingmall.<br>
  - Daily Works Report to Manager.<br>
  - Create Promotions on Wingmall.<br>
  - Edit Images and Covers on Wingmall.<br>
  - Call Customers about the win promotion.<br>
  - Communication with Merchant Owners.<br>
  - Relate With Sale Teams.<br>
  - Resolve Problems for Merchant Owners.<br>
  - Create Cover for Merchant in Wingmall App
        </p>`
};
$('.resume-body').html(resumeList.address);
$('.resume-desc li').click(function (e) {
  var dataInd = $(this).data('ind');
  $('.resume-desc li').removeClass('lst-address');
  $('.resume-desc li').removeClass('lst-desc-style');
  if (dataInd === 0) {
    $('.resume-body').html(resumeList.address);
    $(this).addClass('lst-desc-style');
  } else if(dataInd===1) {
    $('.resume-body').html(resumeList.education);
    $(this).addClass('lst-desc-style');
  } else if (dataInd === 2) {
    $('.resume-body').html(resumeList.language);
    $(this).addClass('lst-desc-style');
  }else if (dataInd === 3) {
    $('.resume-body').html(resumeList.skill);
    $(this).addClass('lst-desc-style');
  }else{
    $('.resume-body').html(resumeList.experience);
    $(this).addClass('lst-desc-style');
  }
});

/*Portfolio Section*/
const portfolioList = [
  {
    "projectName": "Project1",
    "image": "./projects/Project1.png",
    "title": "Add Items to Dashboard"
  },
  {
    "projectName": "Project1",
    "image": "./projects/fectchdata.png",
    "title": "Fetch Data from Back End"
  },
  {
    "projectName": "Project1",
    "image": "./projects/User Interface.png",
    "title": "User Interface"
  },
];
const projectVideoList = {
  video1: `<video src="./projects/Add Items.mp4" autoplay></video>`,
  video2: `<video src="./projects/Fetch Data From Backend.mp4" autoplay></video>`,
  video3: `<video src="./projects/Interface.mp4" autoplay></video>`,
}
projectList();
function projectList() {
  let txt = "";
  portfolioList.forEach((e,i) => {
    txt += `<li data-idd="${i}">
            <img src="${e['image']}" alt="${e['projectName']}">
            <p>${e['title']}</p>
          </li>`;
  });
  $('.portfolio-project').html(txt);
}

$('.portfolio-project li').click(function () {
  if ($(this).data('idd') === 0) {
    $('.projects-video').fadeIn();
    $('.projects-video .videos-list').html(projectVideoList.video1);
  } else if($(this).data('idd')===1) {
    $('.projects-video').fadeIn();
    $('.projects-video .videos-list').html(projectVideoList.video2);
  } else {
    $('.projects-video').fadeIn();
    $('.projects-video .videos-list').html(projectVideoList.video3);
  }
});
$('.projects-video #btn-close').click(function () {
  $('.projects-video').fadeOut();
});
