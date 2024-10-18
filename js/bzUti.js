// JScript File

function isTelNo(str) {
    var pattern = "0123456789-() ";
    if (str.length > 0) {
        if (str.length < 5) {
            return false;
        } else {
            for (var a = 0; a < pattern.length; a++) {
                if (pattern.indexOf(str.charAt(a), 0) == -1) return false;
            }
        }
    }
    return true;
}
function isMoney(str) {
    var pattern = "0123456789.";
    for (var a = 0; a < pattern.length; a++)
        if (pattern.indexOf(str.charAt(a), 0) == -1) return false;
    return true;
}
function isNumber(str) {
    if (str.length <= 0) return false;
    var pattern = "0123456789";
    for (var a = 0; a < pattern.length; a++)
        if (pattern.indexOf(str.charAt(a), 0) == -1) return false;
    return true;
}
function isMobile(str) {
    var pattern = "0123456789-() ";
    if (str.length > 0) {
        if (str.length < 10) {
            return false;
        } else {
            for (var a = 0; a < pattern.length; a++) {
                if (pattern.indexOf(str.charAt(a), 0) == -1) return false;
            }
        }
    }
    return true;
}
function isEmailAddr(email) {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.0123456789@~";
    var theStr = new String(email)
    var index = theStr.indexOf("@");

    for (var a = 0; a < pattern.length; a++) {
        if (pattern.indexOf(email.charAt(a), 0) == -1) return false;
    }
    if (theStr.indexOf(" ", 0) != -1) return false;
    if (index > 0) {
        var pindex = theStr.indexOf(".", index);
        if ((pindex > index + 1) && (theStr.length > pindex + 1)) return true;
    }
    return false;
}

function isURL(str) {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.0123456789/~:";
    if (str.length > 0) {
        if (str.length < 5) {
            return false;
        } else {
            if (str.lastIndexOf(".") == -1) { 											// khong tim thay dau cham
                return false;
            } else {
                if (str.lastIndexOf(".") == (str.length - 1)) return false;				// dau cham nam o cuoi cung
                //				if (!isAlpha(str.charCodeAt(str.lastIndexOf(".") + 1))) return false;	// sau dau cham khong phai ki tu Alphabet
            }
            for (var c = 0; c < pattern.length; c++) {
                if (pattern.indexOf(str.charAt(c), 0) == -1) return false;				// ki tu khong hop le
            }
        }
    }
    return true;
}
//KIEM TRA NGAY THANG
function isLeafYear(intYear) { 										/*Ham kiem tra nam nhuan*/
    var bleReturn = false;

    intYear += 2000;
    if (((intYear % 4) == 0) && !((intYear % 100) == 0)) bleReturn = true;
    else bleReturn = ((intYear % 400) == 0);
    return bleReturn;
}
function isValidDate(d, m, y) { 									/*Ham kiem tra ngay hop le*/
    var bleReturn = false;

    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        bleReturn = (d >= 1 && d <= 31);
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        bleReturn = (d >= 1 && d <= 30);
    } else if (m == 2) {
        if (isLeafYear(y)) bleReturn = (d >= 1 && d <= 29);
        else bleReturn = (d >= 1 && d <= 28);
    }
    return bleReturn;
}
function isDate(strDate) {
    var arrDate;
    var type = 1;// type = 2: mm/dd/yyyy ---- type = 1: dd/mm/yyyy
    separate = "/";//dau cach giua ngay thang nam
    arrDate = strDate.split(separate);
    //alert(arrDate);
    if (arrDate.length != 3) return false;
    else
        for (var i = 0; i < arrDate.length; i++) {
            if (isNaN(arrDate[i])) return false;
        }
    if (type == 1) return isValidDate(parseInt(arrDate[0], 10), parseInt(arrDate[1], 10), parseInt(arrDate[2], 10));
    else if (type == 2) return isValidDate(parseInt(arrDate[1], 10), parseInt(arrDate[0], 10), parseInt(arrDate[2], 10));
}
function openWindow(filename, winname, width, height) {
    var features, top, left;

    left = (window.screen.width - width) / 2;
    top = (window.screen.height - height) / 2;
    features = "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
    void (window.open(filename, winname, features));
}
function selectList(sel, val) {
    for (i = 0; i < sel.options.length; i++)
        if (sel.options[i].value == val) {
            sel.options[i].selected = true;
            break;
        }
}
function radCheck(rad, val) {
    for (i = 0; i < rad.length; i++) {
        if (rad[i].value == val) {
            rad[i].checked = true;
            break;
        }
    }
}
function CheckB(box, val) {
    if (box.value == val) {
        box.checked = true;
    }
}
function showAlertDiv(obj, title, width, height) {
    var bzAlertShow = dhtmlmodal.open('Alert', 'div', obj, title, 'width=' + width.toString() + 'px,height=' + height.toString() + 'px,left=220px,top=100px,resize=0,scrolling=0');
    return bzAlertShow;
}

function bodauTiengViet(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");

    str = str.replace("\"", "");
    str = str.replace("'", "");
    str = str.replace("%", "");
    str = str.replace("@", "");
    str = str.replace("@", "");
    str = str.replace("®", "");
    str = str.replace(".", "");
    str = str.replace(";", "");
    str = str.replace(":", "");
    str = str.replace("`", "");
    str = str.replace("^", "");
    str = str.replace("+", "");
    str = str.replace("=", "");
    str = str.replace("$", "");
    str = str.replace("#", "");
    str = str.replace("!", "");
    str = str.replace("/", "");
    str = str.replace("*", "");
    str = str.replace("“", "");
    str = str.replace("”", "");
    str = str.replace("?", "");
    str = str.replace(",", "");
    str = str.replace("\\", "");
    str = str.replace("{", "");
    str = str.replace("}", "");
    str = str.replace("|", "");
    str = str.replace("(", "");
    str = str.replace(")", "");

    str = str.replace("--", "-");
    str = str.replace("---", "-");
    str = str.replace("----", "-");
    str = str.replace("-----", "-");
    str = str.replace("----", "-");
    str = str.replace("---", "-");
    str = str.replace("--", "-");
    str = str.replace("...", "-");

    str = str.replace(" ", "-");
    return str;
}