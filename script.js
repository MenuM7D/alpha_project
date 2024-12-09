function appendNumber(num) {
    const display = document.getElementById("display");
    display.value += num;
    updateResult();
}

function appendOperator(op) {
    const display = document.getElementById("display");

    // منع إضافة رمزين متتاليين
    if (isOperator(display.value.slice(-1)) && isOperator(op)) {
        return; // منع إضافة الرموز المتتالية
    }

    display.value += op;
    updateResult();
}

function appendFunction(func) {
    const display = document.getElementById("display");
    display.value += func;
    updateResult();
}

function clearAll() {
    document.getElementById("display").value = "";
    document.getElementById("result").innerText = "0";
}

function clearDisplay() {
    document.getElementById("display").value = "";
    updateResult();
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    updateResult();
}

function handleEqual() {
    const display = document.getElementById("display");
    if (display.value.trim()) {
        document.getElementById("result").innerText = evalExpression(display.value);
        display.value = ""; // حذف العملية بعد عرض الناتج
    }
}

function updateResult() {
    const display = document.getElementById("display");
    const result = document.getElementById("result");

    // التحقق من وجود أرقام قبل الرموز
    if (display.value.trim() && !isOperator(display.value.slice(-1))) {
        result.innerText = evalExpression(display.value);
    } else {
        result.innerText = ""; // عدم عرض نتيجة فارغة أو غير مكتملة
    }
}

function evalExpression(expression) {
    try {
        let formattedExpression = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/π/g, Math.PI);

        let result = eval(formattedExpression);

        // التحقق من أن النتيجة ليست غير محدودة أو NaN
        return Number.isFinite(result) ? result : "لا توجد نتيجة";
    } catch (e) {
        return "لا توجد نتيجة";
    }
}

// التحقق من الرموز
function isOperator(char) {
    return ['+', '-', '×', '÷', '%', '^'].includes(char);
    }
