function revealText(elementId, text) {
  var element = document.getElementById(elementId);
  var index = 0;

  function reveal() {
    element.textContent += text[index];
    index++;

    if (index === text.length) {
      clearInterval(revealInterval);
    }
  }

  var revealInterval = setInterval(reveal, 25); // Adjust the interval as needed
}

function revealText1(elementId, text) {
  var element = document.getElementById(elementId);
  var index = 0;

  function reveal() {
    element.textContent += text[index];
    index++;

    if (index === text.length) {
      clearInterval(revealInterval);
    }
  }

  var revealInterval = setInterval(reveal, 1000); // Adjust the interval as needed
}

window.onload = function() {
  // Call the revealText function for each header element
  revealText1('first-text', 'My Love..Vaibhavi');
  setTimeout(function() {
    revealText('pulsatingText', ' ❤️');
  }, 1000); // Wait for 1000 milliseconds (1 second) before revealing the second part

  // Call the revealText function for each section element
  revealText('paragraph1', 'Honey, I met you in a very unexpected way. ' +
    'I make you cry, many times and I know I have a girl that purely loves me. ' +
    'I\'m deeply in love with you honey and I can\'t change it, I want my darling to understand me ' +
    'and stay with me. I make you worry, so many times. You still stay with me, try to figure things out ' +
    'and I love you honey...soo much. ' +
    'One thing I want you to know is that this guy isn\'t telling you something for his personal gain ' +
    'He\'s loving you and everything he is saying is for you, only you ' +
    'I want my future wife to be a nice ,strong , resilient person');

  setTimeout(function() {
    revealText('heading2', 'You are Special, baby....');
  }, 15000); // Wait for 2000 milliseconds (2 seconds) before revealing the second part

  setTimeout(function() {
    revealText('heading3', 'You are my love, I fell in love with you. Will you be my girl and stay with me in ups and downs ' +
      'will you stay with me and grow with me? ' +
      'will you stay and marry me one day? ' +
      'you\'re my first love honey and this first should be the last \n\n' +
      '.....U WILL BE MINE RIGHT!!');
  }, 16000); // Wait for 4000 milliseconds (4 seconds) before revealing the third part
};



var easing = 0.5;
var buttonOffsetX = 0;
var targetButtonOffsetX = 0;
var coordMouseX;
var coordMouseY;

$(function(){
  var posButton = $('.button-secondary').offset();
  var buttonW = $('.button-secondary').outerWidth();
  var buttonH = $('.button-secondary').outerHeight();

  $(document).on('mouseup', function(e){
    $('.modal-ask').removeClass('clicking');
  });
  
  $('.button').on('click', function(){
    thanks();
  });
  
  $(document).on('mousemove', function(e) {
    
    coordMouseX = e.pageX - posButton.left;
    coordMouseY = e.pageY - posButton.top;
    
    targetButtonOffsetX = Math.max ( coordMouseX+10, 0 );
  })
  
  function thanks() {
    $('.modal-ask').removeClass('show');
    $('.modal-thanks').addClass('show');
    
    setTimeout(function(){
      $('.modal-thanks').removeClass('show');
    },5000);
  }
  
  function update() {
    if (coordMouseX >= 0
     && coordMouseX <= 125
     && coordMouseY >= 0
     && coordMouseY <= buttonH) {
    } else {
      targetButtonOffsetX = 0;
    }
    buttonOffsetX += (targetButtonOffsetX - buttonOffsetX) * easing;
    
    $('.button-secondary-inner').css({
      left: (buttonOffsetX)+'px'
    });
    
    requestAnimationFrame(update);
  }
  
  requestAnimationFrame(update);
});



function yes() {
  // Play the audio
  var audio = new Audio('perfect.mp3');
  audio.volume = 0.01;
  audio.play();

  // Show the initial message
  alert('I WILL TAKE CARE OF YOU FOR THE REST OF MY LIFE HONEY');

  // Ask the user a follow-up question
  var userResponse = confirm('You will really stay with me, right?');

  // Check the user's response
  if (userResponse) {
    alert('That\'s wonderful! Let\'s cherish our time together.');
  } else {
    alert(`I understand. Let me know if there's anything on your mind.`);
  }
}


function no() {
  // Show the initial message
  alert('PLEASE HONEY');

  // Ask the user a follow-up question
  var userResponse = confirm('You will stay with me, right?');

  // Check the user's response
  if (userResponse) {
    alert('I LOVE YOU SOOO MUCH HONEY');
  }
}

