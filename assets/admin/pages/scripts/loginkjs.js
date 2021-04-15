var Login = function () {

    var handleLogin = function () {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                checkcode: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "请输入用户名."
                },
                password: {
                    required: "请输入密码."
                },
                checkcode: {
                    required: "请输入验证码."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
                $('.login-logo').hide();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                //form.submit(); // form validation success, call ajax form submit
                $('.alert-danger', $('.login-form')).hide();
                $('.login-logo').show();
                loginkj();
            }
        });

        $('.login-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }

    var handleForgetPassword = function () {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                email: {
                    required: "Email is required."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.forget-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleRegister = function () {

        function format(state) {
            if (!state.id) return state.text; // optgroup
            return "<img class='flag' src='../../assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }

        if (jQuery().select2) {
            $("#select2_sample4").select2({
                placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
                allowClear: true,
                formatResult: format,
                formatSelection: format,
                escapeMarkup: function (m) {
                    return m;
                }
            });


            $('#select2_sample4').change(function () {
                $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        }

        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                fullname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true
                },
                city: {
                    required: true
                },
                country: {
                    required: true
                },

                username: {
                    required: true
                },
                password: {
                    required: true
                },
                rpassword: {
                    equalTo: "#register_password"
                },

                tnc: {
                    required: true
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                tnc: {
                    required: "Please accept TNC first."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }

    return {
        //main function to initiate the module
        init: function () {

            handleLogin();
            handleForgetPassword();
          //  handleRegister();

        }

    };

} ();

function changeCode() {
    var imgNode = document.getElementById("vimg");
    imgNode.src = "./media/Handler/logingraphic_Handler.ashx?t=" + (new Date()).valueOf(); ;  // 这里加个时间的参数是为了防止浏览器缓存的问题   
}

function loginkj() {
    if (($("#username").val() != "") && ($("#username").val().length < 14) && ($("#password").val() != "") && ($("#checkcode").val() != "")) {
        String.prototype.replaceAll = function(s1, s2) {
            return this.replace(new RegExp(s1, "gm"), s2);
        }
        var msguc = "";
        $.ajax({
            type: "post",
            datatype: "text",
            url: "./media/Handler/login_uc_Handler.ashx?userid="+$("#username").val()+"&password="+ $("#password").val(),
            async: false,
            data: {
                userid: $("#username").val(),
                password: $("#password").val()
            },
            success: function(msg) {
                msguc = msg.replaceAll("\"", "'");
                $.ajax({
                    type: "post",
                    datatype: "text",
                    url: "./media/Handler/login_Handler.ashx?userid="+$("#username").val()+"&password="+ $("#password").val(),
                    async: false,
                    data: {
                        userid: $("#username").val(),
                        password: $("#password").val(),
                        checkcode: $("#checkcode").val()
                    },
                    success: function(msg) {
                        var src2 = msguc.indexOf("' reload='1'>");
                        var msguc2 = msguc.substring(src2 + 13, msguc.length);
                        var src3 = msguc2.indexOf("' reload='1'>");
                        var msguc3 = msguc2.substring(src3 + 13, msguc2.length);
                        $.getScript(msguc.substring(msguc.indexOf("src='") + 5, msguc.indexOf("' reload='1'>")));
                        $.getScript(msguc2.substring(msguc2.indexOf("src='") + 5, msguc2.indexOf("' reload='1'>")));
                        $.getScript(msguc3.substring(msguc3.indexOf("src='") + 5, msguc3.indexOf("' reload='1'>")));
                        setTimeout(function() {
                            if (msg == "student") { top.location.href = "mycourse3.html"; console.log(top.location.href); } //{ window.location.href = "mycourse3.html"; }
                            else if (msg == "teacher") { top.location.href = "jscourse3.html"; } //{ window.location.href = "jscourse3.html"; }
                            else if (msg == "zkstu") { top.location.href = "zkcourse3.html"; } //{ window.location.href = "jscourse3.html"; }
                            else if (msg == "manager") { top.location.href = "glrwsxx.html"; }
                            else if (msg == "falsepass") { alert("密码不正确！"); }
                            else if (msg == "zc") { alert("请先注册！"); }
                            else if (msg == "checkcodeerror") { alert("验证码错误"); }
                        }, 1500);
                    },
                    error: function(XMLHttpRequest, textStatus, thrownError) {
                    }
                });
            },
            error: function(XMLHttpRequest, textStatus, thrownError) {
            }
        });
    }

}

/*$("#username").keyup(function() {
    if ($('html').hasClass("ie8") || $(html).hasClass("ie9")) {
        if ($("#username").val() != "") {
            if ($("#ph-labels").hasClass("visible-ie8")) { $("#ph-labels").removeClass("visible-ie8"); $("#ph-labels").addClass("hidden-ie8"); }
            if ($("#ph-labels").hasClass("visible-ie9")) { $("#ph-labels").removeClass("visible-ie9"); $("#ph-labels").addClass("hidden-ie9"); }
        }
        else {
            if ($("#ph-labels").hasClass("hidden-ie8")) { $("#ph-labels").removeClass("hidden-ie8"); $("#ph-labels").addClass("visible-ie8"); }
            if ($("#ph-labels").hasClass("hidden-ie9")) { $("#ph-labels").removeClass("hidden-ie9"); $("#ph-labels").addClass("visible-ie9"); }
        }
    }
});

$("#password").keyup(function() {
    if ($('html').hasClass("ie8") || $(html).hasClass("ie9")) {
        if ($("#password").val() != "") {
            if ($("#ph-labels-pass").hasClass("visible-ie8")) { $("#ph-labels-pass").removeClass("visible-ie8"); $("#ph-labels-pass").addClass("hidden-ie8"); }
            if ($("#ph-labels-pass").hasClass("visible-ie9")) { $("#ph-labels-pass").removeClass("visible-ie9"); $("#ph-labels-pass").addClass("hidden-ie9"); }
        }
        else {
            if ($("#ph-labels-pass").hasClass("hidden-ie8")) { $("#ph-labels-pass").removeClass("hidden-ie8"); $("#ph-labels-pass").addClass("visible-ie8"); }
            if ($("#ph-labels-pass").hasClass("hidden-ie9")) { $("#ph-labels-pass").removeClass("hidden-ie9"); $("#ph-labels-pass").addClass("visible-ie9"); }
        }
    }
});

$("#ph-labels").click(function () {
    $("#username").focus();
});

$("#ph-labels-pass").click(function () {
    $("#password").focus();
});*/