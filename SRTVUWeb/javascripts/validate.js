/**
* jsp页面数据验证文件
* 使用JavaScript语言编写
* 提供各种验证函数，各个页面进行选择调用
*/
//下面为选择调用的函数需调用的函数
function isNothing(value){//检查值value是否是空串
    var re = / /g;                //设置过滤字符为空格字符
    if((value.replace(re, "")).length==0)return true;
	return false;
}
//下面为选择调用的函数
function isEmpty(errString,value){//检查值value是否是空串
        var re = / /g;                //设置过滤字符为空格字符
        if(isNothing(value))return errString;
        return "";
        }

        function isPositiveInteger(errString,value){//检查属性name的值value是否是正整数
        if(isNaN(Math.abs(value)) || value!=Math.abs(Math.floor(value)) || value==0||isNothing(value)) return errString;
        return "";
        }

function isInteger(errString,value){//检查值value是否是整数
        if(isNaN(Math.abs(value))||isNothing(value) || value.indexOf(".")!=-1)  return errString;
        return "";
        }

function isNNInteger(errString,value){//检查值value是否是非负整数
        if(isNaN(Math.abs(value)) || value!=Math.abs(Math.floor(value)) || isNothing(value) || value.indexOf(".")!=-1) return errString;
        return "";
        }

function isNatureInteger(errString,value){//检查值value是否是正整数
        if(isNaN(Math.abs(value)) || value!=Math.abs(Math.floor(value)) || value==0||isNothing(value) || value.indexOf(".")!=-1) return errString;
        return "";
        }

        function isFloat(errString,value){//检查值value是否是实数
        if(isNaN(Math.abs(value))||isNothing(value)) return errString;
        return "";
        }

        function isNNFloat(errString,value){//检查值value是否是非负实数
        if(value!=Math.abs(value) || isNothing(value)) return errString;
        return "";
        }

	function isDate(errString,value){//检查值value是否是合法日期
        var re = / /g;                //设置过滤字符为空格字符
        value=value.replace(re, "");
        var year=value.substr(0,4);
        var month=value.substr(5,2);
        var day=value.substr(8,2);
        if(isNatureInteger("NaN",year)+isNatureInteger("NaN",month)+isNatureInteger("NaN",day)!="")return errString;
        if (month < 1 || month > 12) {
            return errString;
        }
        if (day < 1 || day > 31) {
            return errString;
        }
        if ((month == 4 || month == 6 || month == 9 || month == 11) &&
            (day == 31)) {
            return errString;
        }
        if (month == 2) {
            var leap = (year % 4 == 0 &&
                       (year % 100 != 0 || year % 400 == 0));
            if (day>29 || (day == 29 && !leap)) {
                return errString;
            }
        }
        return "";
	}

