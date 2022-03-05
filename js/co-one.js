var ur1 = "https://script.google.com/macros/s/";
var ur2= "AKfycbycipUSssDn_ChquA2ZvM9eHDYRZl_In_ItxBxTNvWS8MG1E4CWUf6huQx4jJCUjLWJIw";
function inwallCo() {
  document.body.style.pointerEvents ="none";
  var email1 = $("#email").val();
  var pass = $("#pcodeCo").val();
  if (email1 != 0 && pass != 0) {
    document.getElementById("loader").style.visibility = "visible";
    document.getElementById("checkP").innerHTML = "";
    var url = ur1+ur2+"/exec" + "?callback=ctrlqcoin&chemid=" + email1 + "&chpass=" + pass + "&action=chcord";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  } else {
    return false;
  }
}
function ctrlqcoin(e){
  var res= e.records;
  if(res!="ID not found!"){
    document.getElementById("signInCo").style.display = "none";
    document.getElementById("CoDashboard").style.display = "block";
    document.getElementById("showProfileCo").innerHTML = '<div align="center"><img id="propic" src="' + res[0].ProfilePic + '" width="170px"><div id="name" style="padding-top:14px;"><h5 style="margin:0px;">' + res[0].Subject + ' </h5></div><p style="font-size:18px;margin:0px;">' + res[0].Class + ' (' + res[0].Board + ') </p><h4 style="margin:0px;color:#48485c;">' + res[0].FName + ' ' + res[0].LName + ' </h4><span class="geninfoid">&#8226; ID: '+res[0].CoID+' '+'&#8226; Email: '+res[0].Email+'</span></div>';
    document.getElementById("loader").style.visibility = "hidden";
    document.body.style.pointerEvents ="auto";
  }
  else{
    document.getElementById("checkP").innerHTML = "User email and password not found.";
    document.getElementById("loader").style.visibility = "hidden";
    document.body.style.pointerEvents ="auto";
  }
}
repassone.addEventListener('submit', (event) => {
  var ur1 = "https://script.google.com/macros/s/";
var ur2= "AKfycbxcNauDAjq4bIZtj03QUO3hibJC7lr7ij_R73yvKRV1bcq4JX2o6w6o59QGFVg4n0YRAQ";
  $('#checkemid').hide();
  document.getElementById("loader-fp").style.visibility = "visible";
  var mailat =  document.getElementById('mailrepass').value;

  var url = ur1+ur2+"/exec" + "?callback=ctrlqchemid&chemid=" + mailat + "&action=chcordm";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

console.log(url);

});
function ctrlqchemid(e){
  var res= e.records;
  if(res=="ID found!"){
    document.getElementById("checkemid").style.display = "none";
    $("#resetp_two").show();
    $("#resetp_one").hide();
    var k =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
 
    document.getElementById('vercodepre').value = k;
    sendEmail();
    document.getElementById("loader-fp").style.visibility = "hidden";
  }
  else{
    document.getElementById("checkemid").style.display = "block";
    document.getElementById("checkemid").innerHTML = "User email not found.";
    document.getElementById("loader-fp").style.visibility = "hidden";
    setTimeout(function() {
      jQuery('#checkemid').fadeOut('fast');
    }, 5000);
  }
}
function sendEmail() {
  var k =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
  var mailat =  document.getElementById('mailrepass').value;
  document.getElementById('vercodepre').value = k;
    Email.send({
      SecureToken : "cc4823c2-6012-4e3c-b375-9fa519b23754",
        To: mailat,
        From: "noreply@mastrowall.com",
        Subject: "Email Verification",
        Body:  "<html><body style='background-color:#161616;color:white;border-radius:10px;'><div align='center' style='padding:40px;'><h2 style='color:white'>W E L C O M E</h2><h2><a target='_blank' href='https://mastrowall.com' style='text-decoration:none;'>M A S T R O W A L L</a></h2>" + "<p style='color:white;'>Your Confirmation Code is: </p><h3 style='color:black;width:140px;background-color:#e6e6e6;border-radius:4px;padding:6px;'>"+ k +"</h3><br><p style='color:white;'>Contact: <a href='mailto:mail@mastrowall.com'>mail@mastrowall.com</a></p><h4 style='color:white;'>Thank You</h4><p style='font-size:12px;color:#cccccc;'>N.B. Do not reply to this email</p></div></body></html>",
    })
        .then(function (message) {
      document.getElementById('checkemid-2').style.display= 'block';
      document.getElementById('checkemid-2').innerHTML= 'Verification code send to your email.';
      setTimeout(function() {
        jQuery('#checkemid').fadeOut('fast');
      }, 10000);
        
        });
    }

  $('#confirm_passwordnew').on('keyup', function() {
    if ($('#passwordnew').val() == $('#confirm_passwordnew').val()) {
      $('#messagenew').html('Matching').css('font-size', '12px');
      document.getElementById('repassconfirm').disabled = false;
    } else {
      $('#messagenew').html('Not Matching').css('font-size', '12px');
      document.getElementById('repassconfirm').disabled = true;
    }
  });

function verfycode(){
 var verc = $('#vercode').val();
 var prec = $('#vercodepre').val();
 if(verc == prec){
  document.getElementById('verconfirm').disabled = false;
 }
 else{
  document.getElementById('verconfirm').disabled = true;
   return false;
 }
}


repassthree.addEventListener('submit', (event) => {
  document.getElementById("loader-fp").style.visibility = "visible";
  var pass1 = "https://script.google.com/macros/s/";
  var pass2 = "AKfycbyEV5w729VQLCQABgWH_6-xfn_57OksiqvyUjjlsupH0nI_VePRBg2hjMFxMEBwgQRJsw";
  var newP = $('#passwordnew').val();
  var emid = $('#mailrepass').val();
    var urlp = pass1+pass2+"/exec" + "?callback=ctrlqrepass&mailrepass=" + emid + "&passwordnew=" + newP + "&action=cuiweryuiwrnweroumorilewr-wer";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urlp,
      method: "GET",
      dataType: "jsonp"
    });
});


function ctrlqrepass(){

  document.getElementById("loader-fp").style.visibility = "hidden";
  $('#resetp_three').hide();
  $('#resetp_four').show();
}