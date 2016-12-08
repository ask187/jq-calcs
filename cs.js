$("document").ready(function () {
    var key = null;

    $(".clean").click(function () {
        $('.input').val("");

    });

    $(".Show").click(function () {
        var EText = $('#Result').val();
        if (EText != "0") {
            var val1 = EText;
            var ButtonVal = $(this);
            var val2 = ButtonVal.text();
            var Res = val1 + val2;
            $('#Result').val(Res);
        } else {
            $('#Result').val();
        }
    });
        $(function () {
        var interRes = null;
        var operator;
        $('.operators').click(function () {
            var value1 = $('#Result').val();
            if (interRes != null) {
                var result = ApplyOperation(interRes, value1, operator);
                interRes = result;
            } else {
                interRes = value1;
            }
            operator = $(this).text();
            $('input').val("");
        });
        
        $('#Calculate').click(function () {
            var op = operator;
            var res;
            var value2 = $('#Result').val();
            if ((value2 != "")) {
                res = ApplyOperation(interRes, value2, op);
            } else {
                res = interRes;
            }
            $('#Result').val(res);
            interRes = null;
        });
    });

    function ApplyOperation(value1, value2, operator) {
        var res;
        switch (operator) {
            case "+":
                res = addition(value1, value2);
                break;
            case "-":
                res = subtraction(value1, value2);
                break;
            case "*":
                res = multiplication(value1, value2);
                break;
            case "/":
                res = division(value1, value2);
                break;
        }
        return res;
    }

    function addition(first, second) {
        var a = parseFloat(first);
        var b = parseFloat(second);
        var total = a + b;
        return total;
    }

    function subtraction(first, second) {
        var a = parseFloat(first);
        var b = parseFloat(second);
        var sub = a - b;

        return sub;
    }

    function multiplication(first, second) {
        var a = parseFloat(first);
        var b = parseFloat(second);
        var product = a * b;

        return product;
    }

    function division(first, second) {
        var a = parseFloat(first);
        var b = parseFloat(second);
        var divi = a / b;
        return divi;
    }

});