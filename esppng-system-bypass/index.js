const form = document.getElementById("credentials-form");

function redirect(txtNoMak, txtPwd) {
    const menuUrl = 'https://mrsmkualaklawang.edu.my/epelajar/MenuUtama.asp';
    const formData = new FormData();
    formData.append('txtNoMak', txtNoMak);
    formData.append('txtPwd', txtPwd);

    fetch(menuUrl, {
        method: 'POST',
        body: formData,
        mode: "no-cors"
    }).then(response => {
        if (response.status !== 200) {
            window.alert("error")
            console.log(response);
        } else {
            window.location.href = menuUrl;
        }
    })
}

function unlockCORSAnywhere() {
    // Create a URL for the CORS Anywhere unlock endpoint
    const unlockURL = 'https://cors-anywhere.herokuapp.com/corsdemo';

    // Send an OPTIONS request to the unlock endpoint
    fetch(unlockURL, {
        method: 'OPTIONS',
        headers: {
            'Origin': 'https://Hakimi0804.github.io', // Replace with your website's origin
            'Access-Control-Request-Method': 'POST', // Replace with the HTTP method you intend to use
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('CORS Anywhere unlocked');
            // You can now proceed to make POST requests
        } else {
            console.error('Failed to unlock CORS Anywhere');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const txtNoMak = document.getElementById('txtNoMak').value;
    const txtPwd = document.getElementById('txtPwd').value;

    console.log(`No. Maktab: ${txtNoMak}`);
    console.log(`No. KP: ${txtPwd}`);
  
    const menuUrl = 'https://mrsmkualaklawang.edu.my/epelajar/MenuUtama.asp';
    const formData = new FormData(document.getElementById("credentials-form"));

    // fetch(menuUrl, {
    //     method: 'POST',
    //     body: formData,
    //     mode: "no-cors",
    // }).then(response => {
    //     if (!response.ok) {
    //         window.alert("error");
    //         console.debug(response);
    //     } else {
    //         window.location.href = menuUrl;
    //     }
    // })

    unlockCORSAnywhere();
    fetch('https://cors-anywhere.herokuapp.com/https://mrsmkualaklawang.edu.my/epelajar/MenuUtama.asp', {
        method: 'POST',
        body: formData,
        headers: {
            'X-Requested-With': 'XMLHttpRequest' // Required header for CORS Anywhere
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Form data sent successfully');
            window.location.href = menuUrl;
        } else {
            window.alert("error");
            console.error('Failed to send form data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
