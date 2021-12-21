let res

  function shorturl() {
	  
     longUrl = document.querySelector("#cottorra").value;
	  	  
	 

    document.getElementById("searchbtn").disabled=true;
	document.getElementById("searchbtn").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Please wait...';
      


 var url = "https://2b7.us/api/index.php";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.getElementById("text").value = xhr.responseText;
            longenlace = xhr.parseJSON;
            
          }
            
               fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(longenlace)
    }).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    res = myJson;
    document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML=' Shorten it';
    if(res.key!=="")
 document.getElementById("result").value=longUrl+" https://"+window.location.host+res.key;    

  }).catch(function(err){alert("Unknow error. Please retry!");
  console.log(err);
  document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML=' Shorten it';})
	
	
 var pass = document.getElementById("result");
            pass.select();
            document.execCommand("copy"); 
            
            
        };
        xhr.send();
	  
      
      

	  	  
	  
  }


  $(function () {
    $('[data-toggle="popover"]').popover()
  })
