$(document).ready(function(){
   var ans=0;  // Stores result initially 0
   // Attaching a callback function to click event

   $('#poweron').click(function(){

      $('#screen').empty();
      ans=0;
      console.log("Poweron");
      this.blur(); // Removes focus from button after clicking

   });

   $('#clear').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content.substr(0,content.length-1));
      console.log("Clear");
      console.log(content);
      this.blur();

   });

   $('#modulus').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'%');
      console.log("modulus");
      console.log(content);
      this.blur();
   });

   $('#divide').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'/');
     console.log("/");
     console.log(content);
     this.blur();
   });

   $('#number-7').click(function(){

      var content=$('#screen').val();
      console.log("Number 7");
      console.log(content);
      $('#screen').val(content+'7');
      this.blur();
   });

   $('#number-8').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'8');
      console.log("Number 8");
      console.log(content);
      this.blur();

   });

   $('#number-9').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'9');
     console.log("Number 9");
     console.log(content);

     this.blur();

   });

   $('#multiply').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'*');
      console.log("Multiply");
      console.log(content);
      this.blur();

   });
   $('#number-4').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'4');
     console.log("Number 4");
     console.log(content);
     this.blur();

   });

   $('#number-5').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'5');
     console.log("Number 5");
     console.log(content);
     this.blur();

   });

   $('#number-6').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'6');
      console.log("Number 6");
      console.log(content);
      this.blur();

   });

   $('#minus').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'-');
      console.log("Number 7");
      console.log(content);
      this.blur();

   });

   $('#number-1').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'1');
      console.log("Number 1");
      console.log(content);
      this.blur();

   });

   $('#number-2').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'2');
      console.log("Number 2");
      console.log(content);
      this.blur();

   });

   $('#number-3').click(function(){

      var content=$('#screen').val();
      $('#screen').val(content+'3');
      console.log("Number 3");
      console.log(content);
      this.blur();

   });

   $('#plus').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'+');
     console.log("Plus");
     console.log(content);
     this.blur();


   });

   $('#dot').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'.');
     console.log("Dot");
     console.log(content);
     this.blur();

   });

   $('#zero').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+'0');
     console.log("Zero");
     console.log(content);
     this.blur();


   });

   $('#result').click(function(){

     var content=$('#screen').val();
     $('#screen').val(content+ans.toString());
     console.log("Ans");
     console.log(content);
     this.blur();
   });

   $('#equals').click(function(){

      var content=$('#screen').val();
      console.log("Equals");
      console.log(content);
      $('#screen').empty();
      this.blur();


   });



});
