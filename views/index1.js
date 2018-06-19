<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Parser Demo</title>
   <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  
<link href="lib/bootstrap-slider/bootstrap-slider.css" rel="stylesheet">
<link rel="stylesheet" href="style.css" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
   
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    
</head>
<body>
    <div class="wrapper">
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                        <a class="logo" href="#"><img src="images/logo.png"/> <span>Parser Demo</span></a>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                          <span class="select_outer"><i class="fa fa-location-arrow"></i> 
                         <!-- <select class="select_box" >
                            <option value="United States">United States</option>
                            <option value="india">India</option>
                          </select>-->
                        </span> 
                        
                         <a class="btn btn-default btn-select btn-select-light">
                            <input type="hidden" class="btn-select-input" id="" name="" value="" />
                            <span class="btn-select-value">United States</span>
                             <ul>
                                 <div class="listing_scroll">
                                    <li>Afghanistan</li>
                                    <li>Albania   </li>
                                    <li>India</li>
                                    <li>Algeria</li>
                                    <li>American Samoa</li>
                                    <li>Andorra</li>
                                    <li>Angola</li>
                                    <li>Anguilla</li>

                                    <li>Afghanistan</li>
                                    <li>Albania   </li>
                                    <li>India</li>
                                    <li>Algeria</li>
                                    <li>American Samoa</li>
                                    <li>Andorra</li>
                                    <li>Angola</li>
                                    <li>Anguilla</li>  
                                 </div> 
                                 
                            </ul>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </header>
        
        <section class="dropdown_section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                       <form class="form-inline choose_doc_form">
                          <div class="form-group">
                            <label for="doctype">Document Type</label>
                                    <a class="btn btn-default btn-select btn-select-light" id="doc_type"> 
                                    <input type="hidden" class="btn-select-input" id="" name="" value="" />
                                    <span class="btn-select-value">Select</span>
                                     <ul>
                                        <li>Select</li>
                                        <li>Driver's License</li>
                                        <li>Aadhar Card</li>
                                    </ul>
                              </a>
                          </div>
                           
                           <div style="" id="select_state" class="form-group">
                            <label for="doctype">SELECT STATE</label>
                             <a class="btn btn-default btn-select btn-select-light">
                                    <input type="hidden" class="btn-select-input" id="" name="" value="Select" />
                                    <span class="btn-select-value">Select</span>
                                     <ul>
                                        <li>Select</li>
                                        <li>Karnataka</li>
                                    </ul>
                              </a>   
                          </div>
                          <button id="step_2" type="button" class="btn btn-danger">Go</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        
        <section class="upload_section" style="">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 text-center margin-top-40 padding-bottom-100">
                         <div class="error">
                            We arent able to read your image. Please reupload a better quality image
                        </div>
                        <input type="file" id="upload_files" name="" class="" style="opacity: 0;position:  absolute;z-index: -99;" />
                        <div class="col-md-12 padding-bottom-40">
                        <a href="javascript:void(0);" class="upload_icon"></a>
                    </div> 
                    <h3 class="upload_title">Upload an image of your Driving License</h3>  
                    <p class="font14">JPG, PNG, not exceeding 5MB</p>   
                    <p>Your images are extremely confidential and is used <br/> only for for your demo purpose</p>  
                        <span class="or_txt">or</span>
                        <p class="font16 c00">Choose from our list of  
                        <a href="" class="upload_link" data-toggle="modal" data-target="#myModal">preselected images</a></p>    
                    </div>
                </div>
            </div>
        </section>
   
        <!-- Modal -->
        <div id="myModal" class="modal right fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <a href="" class="close_btn" data-dismiss="modal"><i class="fa fa-close"></i></a>
              <div class="modal-body" style="padding:0;">

                    <div class="inner_div">
                        <p class="c00 font16 text-center">Select one of the images</p>
                        <div class="images_div">
                            <a href="" class="select_img"><img src="images/driv_01.png"/></a>
                            <a href=""><img src="images/transport-department.png"/></a>
                            <a href=""><img src="images/driving-licence.png"/></a>
                        </div> 
                    </div>

                    <div class="popup_footer">
                        <button type="button" class="btn-danger">Choose</button>
                    </div>
              </div>

            </div>

          </div>
        </div>
    
        
        
        
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <p>© 2018 Autonom8. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 col-sm-6 text-right">
                        <p>Read our <a href="#">Terms</a>  &  <a href="#">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

  
    
    
</body>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script type="text/javascript" src="lib/bootstrap-slider/bootstrap-slider.js"></script>
<link href="https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900" rel="stylesheet">


<script>
        $(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
		
		
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
            
     $("#doc_type li").on('click',function(){
        if($(this).html() == "Aadhar Card"){
		
			$('#select_state').fadeOut('slow');
            $('.choose_doc_form button').addClass('active');
        }else{
		
			if($(this).html() == "Select"){
                 $('#select_state').fadeOut('slow');
                 $('.choose_doc_form button').removeClass('active');
            }else{
			
				if($("#select_state input").val() == 'Select'){
                     $('#select_state').fadeIn('slow');
                    $('.choose_doc_form button').removeClass('active');
                }else{
				$('#select_state').fadeIn('slow');
                    $('.choose_doc_form button').addClass('active');
                }
                
            } 
           
        }
    });
	
	
      $("#select_state li").on('click',function(){
                if($(this).html() == "Select"){
                    $('.choose_doc_form button').removeClass('active');
                }else{
                     $('.choose_doc_form button').addClass('active');
                }
          });
     $("#step_2").on('click',function(){
      $('.upload_section').fadeIn('slow');
        if($("#doc_type input").val() == 'Aadhar Card'){
             $('.upload_title').html('Upload an image of your Aadhar Card');
        }else{
             $('.upload_title').html('Upload an image of your Driving License');
        }
     
    });   


	
    $(".upload_icon").on('click',function(){
      $('#upload_files').trigger('click');
    });  
    $(".images_div > a").on('click',function(e){
        e.preventDefault();
      $(".images_div > a").removeClass('select_img');
      $(this).addClass('select_img');
    });   
    $("#upload_files").on('change',function(){
	
		$(".upload_section").html('<img src="images/blockchain_loader2.gif">');
		setTimeout(function() {   //calls click event after a certain time

			window.location.replace("http://trackstatus.net/Parser-Demo/demo_new/Parser-Demo-html/parser_ui_step3.html");
			
		}, 20000);
	
        //window.location.replace("http://trackstatus.net/Parser-Demo/demo_new/Parser-Demo-html/parser_ui_step3.html");
        //window.location.replace("/parser_ui_step3.html");
    });               
});

$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});

    </script>