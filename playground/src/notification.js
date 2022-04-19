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