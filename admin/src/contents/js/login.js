// $('.toggle').on('click', function() {
//     $('.container').stop().addClass('active');
// });

$('#forgotPwd').on('click', function() {
   $('.container').stop().addClass('active');
   $('#mainLoginForm').hide();
   $('#cardForHelp').show();
});

$('.close').on('click', function() {
   $('.container').stop().removeClass('active');
   $('#mainLoginForm').show();
   $('#cardForHelp').hide();
});

$('#frmLogin').on('submit', function() {
   var user = $('#Username').val();

   alert(1);
   var text = ["Simulating user ...", "Fetching permissions ...", "Personifying ..."];
   var counter = 0;
   setInterval(change, 1000);

   $('#mainContainer').hide();
   $('#welcomeText').show();
   $('#lblWelcome').addClass('welComeLabel');
   $('#user').text(user + ',');

   function change() {
       $('#preperatoryStats').text(text[counter]);
       counter++;
       if (counter > text.length) {
           window.location.href = 'index1.html';
       }
   }
})