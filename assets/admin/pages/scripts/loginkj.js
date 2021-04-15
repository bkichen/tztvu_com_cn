

function changeCode() {
    var imgNode = document.getElementById("vimg");
    imgNode.src = "./media/Handler/logingraphic_Handler.ashx"; ;  // 这里加个时间的参数是为了防止浏览器缓存的
}

function loginkj() {
   // if (navigator.userAgent.toLowerCase().indexOf('se 2.x') > -1 ? false : true) {
   //     top.location.href = 'notic.html';
   // } else {

        if (($("#username").val() != "") && ($("#username").val().length < 14) && ($("#password").val() != "") && ($("#checkcode").val() != "")) {
            String.prototype.replaceAll = function(s1, s2) {
                return this.replace(new RegExp(s1, "gm"), s2);
            }
            var msguc = "";
            $.ajax({
                type: "post",
                datatype: "text",
                url: "./media/Handler/login_uc_Handler.ashx",
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
                        url: "./media/Handler/login_Handler.ashx",
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
   // }
}

$("#username").keyup(function () {
    if ($("#username").val() != "") {
        if ($("#ph-labels").hasClass("visible-ie8")) { $("#ph-labels").removeClass("visible-ie8"); $("#ph-labels").addClass("hidden-ie8"); }
        if ($("#ph-labels").hasClass("visible-ie9")) { $("#ph-labels").removeClass("visible-ie9"); $("#ph-labels").addClass("hidden-ie9"); } 
    }
    else {
        if ($("#ph-labels").hasClass("hidden-ie8")) { $("#ph-labels").removeClass("hidden-ie8"); $("#ph-labels").addClass("visible-ie8"); }
        if ($("#ph-labels").hasClass("hidden-ie9")) { $("#ph-labels").removeClass("hidden-ie9"); $("#ph-labels").addClass("visible-ie9"); } 
     }
});

$("#password").keyup(function () {
    if ($("#password").val() != "") {
        if ($("#ph-labels-pass").hasClass("visible-ie8")) { $("#ph-labels-pass").removeClass("visible-ie8"); $("#ph-labels-pass").addClass("hidden-ie8"); }
        if ($("#ph-labels-pass").hasClass("visible-ie9")) { $("#ph-labels-pass").removeClass("visible-ie9"); $("#ph-labels-pass").addClass("hidden-ie9"); }
    }
    else {
        if ($("#ph-labels-pass").hasClass("hidden-ie8")) { $("#ph-labels-pass").removeClass("hidden-ie8"); $("#ph-labels-pass").addClass("visible-ie8"); }
        if ($("#ph-labels-pass").hasClass("hidden-ie9")) { $("#ph-labels-pass").removeClass("hidden-ie9"); $("#ph-labels-pass").addClass("visible-ie9"); }
    }
});

$("#ph-labels").click(function () {
    $("#username").focus();
});

$("#ph-labels-pass").click(function () {
    $("#password").focus();
});