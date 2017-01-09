﻿$(document).ready(function () {
    var modBoolPlus = true;

    $(function () {
        $("#sortable").sortable({
            axis: "x",
            scroll: false,
            helper: "clone",
            opacity: 0.7
        });
        $("#sortable").disableSelection();
    });

    $('#btnToggleMod').click(function () {
        if ($(this).val() == "+") {
            $(this).val("-");
            $(this).addClass("btn-danger");
            $(this).removeClass("btn-success");
            modBoolPlus = false;
        }
        else {
            $(this).val("+");
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-success");
            modBoolPlus = true;
        }
    });
    $(document).on('mouseup', '.btn', function () {
        $(this).blur();
    });

    $("#btnClear").click(function () {
        $("#taResults").val("");
        $("#inResult").val("");
    });

    $("#btnRoll").click(function () {
        //warning toast
        if (!$.isNumeric($("#inAmt").val()) || !$.isNumeric($("#inNFace").val())) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": true,
                "progressBar": false,
                "positionClass": "toast-bottom-left",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            Command: toastr["warning"]("Roll Not Valid: NaN", "Warning");
        }
        else if (parseFloat($("#inAmt").val()) <= 0) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": true,
                "progressBar": false,
                "positionClass": "toast-bottom-left",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            Command: toastr["warning"]("Roll Not Valid: Amount must be at least One (1).", "Warning");
        }
        else if (parseFloat($("#inNFace").val()) <= 1) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": true,
                "progressBar": false,
                "positionClass": "toast-bottom-left",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            Command: toastr["warning"]("Roll Not Valid: Number of die faces must be at least Two (2).", "Warning")
        }
        else {
            //number of rolls
            var str = $("#inAmt").val() + "d" + $("#inNFace").val() + " rolls: [";
            var total = 0;

            for (var i = 0; i < $("#inAmt").val() ; ++i) {
                //random dice roll of the correct size
                var d = "" + $("#inNFace").val();
                var num = Math.floor((Math.random() * d) + 1);
                str += num;

                if (i != ($("#inAmt").val() - 1))
                    str += ", ";
                else
                    str += " ";

                total += num;
            }
            if ($.isNumeric($("#inMod").val()) && modBoolPlus == true) {
                str += "+ [" + $("#inMod").val() + "]";
                total += parseFloat($("#inMod").val());
            }
            else if ($.isNumeric($("#inMod").val()) && modBoolPlus == false) {
                str += "- [" + $("#inMod").val() + "]";
                total -= parseFloat($("#inMod").val());
            }
            str += "]";

            var wholeStr = $("#taResults").val();
            var newStr = str + "\n" + wholeStr;
            $("#taResults").val(newStr);
            $("#inResult").val(total);
        }
    });
});