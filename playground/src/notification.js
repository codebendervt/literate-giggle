function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch(e) {
        return false;
    }

    return true;
}

function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
        // set the button to shown or hidden, depending on what the user answers
        if(Notification.permission === 'denied' || Notification.permission === 'default') {
            console.log('denied');
        } else {
            var img = '/to-do-notifications/img/icon-128.png';
            var text = 'HEY! Your task "' + 'twek' + '" is now overdue.';
            var notification = new Notification('To do list', { body: text, icon: img });
        }
    }

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
        console.log("This browser does not support notifications.");
    } else {
        if(checkNotificationPromise()) {
            Notification.requestPermission()
                .then((permission) => {
                    handlePermission(permission);
                })
        } else {
            Notification.requestPermission(function(permission) {
                handlePermission(permission);
            });
        }
    }
}


function notifyMe() {
    const checkNotificationPromise = () => {
        // set the button to shown or hidden, depending on what the user answers
        if(Notification.permission === 'denied' || Notification.permission === 'default') {
            return false
        } else {
            return true
        }
    }

    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }


    // Let's check whether notification permissions have already been granted
    else if (checkNotificationPromise()) {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!",{body:'were trying something new '});
        console.log(notification)
    }

    // Otherwise, we need to ask the user for permission
    else if (!checkNotificationPromise()) {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
            }
        });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}
