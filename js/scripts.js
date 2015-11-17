$(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt( $("input#age").val() ); // grab age value
    var gender = $("select#gender").val(); // grab gender value
    var bald = $("select#bald").val();  // grab bald value

    var quote = ((100 - age) * 3)

  // add 25 for age (male & female)
    if (age) {
      if (age <= 25) {
        quote+= 25;
      }

    // add 100 for being bald
      if (bald === "yes") {
        quote+= 100;
      } else {
        quote+= 50;
      }

    // add 25 just for being male
      if (gender === "male") {
        quote+= 25;
      }

    // post quote to page, unhide quote
      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert("Please enter in a number for your age")
    }

    event.preventDefault();
  });

});


  // add $25 for male
  // add $50 for under 26

// error check if age field is not filled
