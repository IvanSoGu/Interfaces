$(document).ready(function(){

    $("#Ej1").click(function(){

        $("#Ej1").toggle(5000,function(){

            $("#Ej1").toggle(3000,function(){

                $("#Ej1").toggle(200,function(){

                    $("#Ej1").toggle(2000,alert("He tardado 2 segundos en mostrarme"));

                })

            })

        })

    })

    $("#Ej2").mouseenter(function(){

        $("#Ej2").fadeTo(400, 0.3);

    })

    $("#Ej2").mouseleave(function(){

            $("#Ej2").fadeTo(400, 1);

        }

    );

    $aux=0;

    $("#Ej3").click(function(){

        if($aux%2==0){

            $("#Ej3").animate({position: "relative", left:'-=400px'},'slow');

        }else{
  
            $("#Ej3").animate({position: "relative", left:'+=400px'},'fast');

        }

        $aux++;

    })

    $("#check1").change(function(){

        if($("#check1").is(":checked")){

            $("#fila1").hide();

        }else{

            $("#fila1").show();

        }

    })

    $("#check2").change(function(){

        if($("#check2").is(":checked")){

            $("#fila2").hide();

        }else{

            $("#fila2").show();

        }

    })

    $("#check3").change(function(){

        if($("#check3").is(":checked")){

            $("#fila3").hide();

        }else{

            $("#fila3").show();

        }

    })

    $("#asignatura1").focus(function(){

        $("#label1").css({color: "red"});

    })

    $("#asignatura2").focus(function(){

        $("#label2").css({color: "red"});

    })

    $("#asignatura3").focus(function(){

        $("#label3").css({color: "red"});

    })

    $("#asignatura1").focusout(function(){

        $("#label1").css({color: "green"});

    })

    $("#asignatura2").focusout(function(){

        $("#label2").css({color: "green"});

    })

    $("#asignatura3").focusout(function(){

        $("#label3").css({color: "green"});

    })

    $("div.selected > p").css({"background-color": "yellow", color: "black"});

})