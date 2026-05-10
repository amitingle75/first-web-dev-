let btn = document.querySelector("button");

if (btn) {

    btn.addEventListener("click", function(e) {

        e.preventDefault();

        let name = document.getElementById("rname").value.trim();
        let email = document.getElementById("remail").value.trim();
        let password = document.getElementById("rpass").value.trim();
        let division = document.getElementById("rdiv").value.trim();
        let branch = document.getElementById("rbranch").value;
        let prn = document.getElementById("rprn").value.trim();
        let remark = document.getElementById("rremark").value.trim();

        if (name === "") {
            alert("Enter your name");
            return;
        }

        if (name.length < 3) {
            alert("Name must contain at least 3 characters");
            return;
        }

        if (email === "") {
            alert("Enter your email");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Enter valid email");
            return;
        }

        if (password === "") {
            alert("Enter password");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (division === "") {
            alert("Enter division");
            return;
        }

        if (branch === "select") {
            alert("Select branch");
            return;
        }

        if (prn === "") {
            alert("Enter PRN");
            return;
        }

        if (isNaN(prn)) {
            alert("PRN must contain only numbers");
            return;
        }

        if (prn.length != 10) {
            alert("PRN must be 10 digits");
            return;
        }

        if (remark === "") {
            alert("Enter remark");
            return;
        }

        let studentData = {

            name: name,
            email: email,
            division: division,
            branch: branch,
            prn: prn,
            remark: remark
        };

        localStorage.setItem("student", JSON.stringify(studentData));

        alert("Registration Successful!");

    });

}