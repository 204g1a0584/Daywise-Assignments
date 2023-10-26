
        let fname = sessionStorage.getItem('fname')
        let lname = sessionStorage.getItem('lname')
        let email = sessionStorage.getItem('email')
        let pass = sessionStorage.getItem('pass').length
        let setpass = ''
        for (let i = 0; i < pass; i++)
            setpass += '*'
        document.getElementById('fname').innerHTML += fname
        document.getElementById('lname').innerHTML += lname
        document.getElementById('email').innerHTML += email
        document.getElementById('pass').innerHTML += setpass


        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        function show_pop() {
            console.log('clicked')
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }