let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculate();
})

form.addEventListener("reset", function (event) {
    event.preventDefault();
    resetcalculator();
})

function calculate() {

    var s1 = parseFloat(document.getElementById("s1").value);
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    var s4 = parseFloat(document.getElementById("s4").value);
    var s5 = parseFloat(document.getElementById("s5").value);
    var s6 = parseFloat(document.getElementById("s6").value);
    var s7 = parseFloat(document.getElementById("s7").value);
    var os;

    document.getElementsByName("optSub").forEach(radio => {
        if (radio.checked) {
            os = parseInt(radio.value);
        }
    });

    if (s1 >= 0 && s2 >= 0 && s3 >= 0 && s4 >= 0 && s5 >= 0 && s6 >= 0 && s7 >= 0 && s1 <= 5 && s2 <= 5 && s3 <= 5 && s4 <= 5 && s5 <= 5 && s6 <= 5 && s7 <= 5) {

        function output() {
            var subTotalSubjectCount = 6;
            var subTotalGPAsum = s1 + s2 + s3 + s4 + s5 + s6 + s7;
            var countableGPAsum = subTotalGPAsum - 2;
            var gpa = countableGPAsum / subTotalSubjectCount;
            var result = gpa.toFixed(2);
            if (result > 5) result = 5;
            document.querySelector("span").setAttribute("style", "display: block;")
            document.querySelector("table").setAttribute("style", "display: none;")
            document.querySelector("span").innerHTML = "Your GPA is " + result;
            document.querySelector("input[type='submit']").setAttribute("style", "display: none;")
        }

        if (s1 > 0 && s2 > 0 && s3 > 0 && s4 > 0 && s5 > 0 && s6 > 0 && s7 > 0 && s1 <= 5 && s2 <= 5 && s3 <= 5 && s4 <= 5 && s5 <= 5 && s6 <= 5 && s7 <= 5) {
            output();
        } else if (os == 0 && s1 > 0 && s2 > 0 && s3 > 0 && s4 > 0 && s5 > 0 && s7 > 0 && s1 <= 5 && s2 <= 5 && s3 <= 5 && s4 <= 5 && s5 <= 5 && s7 <= 5) {
            output()
        } else if (os == 1 && s1 > 0 && s2 > 0 && s3 > 0 && s4 > 0 && s5 > 0 && s6 > 0 && s1 <= 5 && s2 <= 5 && s3 <= 5 && s4 <= 5 && s5 <= 5 && s6 <= 5) {
            output();
        } else {
            document.querySelector("span").setAttribute("style", "display: block; color: red;")
            document.querySelector("table").setAttribute("style", "display: none;")
            document.querySelector("span").innerHTML = "You'r fail";
        }

    } else {

        document.querySelector("span").setAttribute("style", "display: block; color: red;")
        document.querySelector("table").setAttribute("style", "display: none;")
        document.querySelector("span").innerHTML = "Wrong input! Enter valid grade point.";

    }

}

function resetcalculator() {
    document.querySelector("#s1").value = ""
    document.querySelector("#s2").value = ""
    document.querySelector("#s3").value = ""
    document.querySelector("#s4").value = ""
    document.querySelector("#s5").value = ""
    document.querySelector("#s6").value = ""
    document.querySelector("#s7").value = ""
    document.querySelector("#hm").checked = false
    document.querySelector("#bio").checked = false
    document.querySelector("span").innerHTML = ""
    document.querySelector("input[type='submit']").removeAttribute("style", "display: none;")
    document.querySelector("table").removeAttribute("style", "display: none;")
}