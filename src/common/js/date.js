/**
 * Created by lordchen on 16/5/24.
 */
define('date', function (require, exports, module) {
    function $formatDate(date, formatStr) {
        //格式化时间
        var arrWeek = ['日', '一', '二', '三', '四', '五', '六'],
            str = formatStr
                .replace(/yyyy|YYYY/, date.getFullYear())
                .replace(/yy|YY/, $addZero(date.getFullYear() % 100, 2))
                .replace(/mm|MM/, $addZero(date.getMonth() + 1, 2))
                .replace(/m|M/g, date.getMonth() + 1)
                .replace(/dd|DD/, $addZero(date.getDate(), 2))
                .replace(/d|D/g, date.getDate())
                .replace(/hh|HH/, $addZero(date.getHours(), 2))
                .replace(/h|H/g, date.getHours())
                .replace(/ii|II/, $addZero(date.getMinutes(), 2))
                .replace(/i|I/g, date.getMinutes())
                .replace(/ss|SS/, $addZero(date.getSeconds(), 2))
                .replace(/s|S/g, date.getSeconds())
                .replace(/w/g, date.getDay())
                .replace(/W/g, arrWeek[date.getDay()]);
        return str;
    }

    function $addZero(v, size) {
        for (var i = 0, len = size - (v + "").length; i < len; i++) {
            v = "0" + v;
        }
        return v + "";
    }

    exports.format = $formatDate;
    exports.addZero = $addZero;
});