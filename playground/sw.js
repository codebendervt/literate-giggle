// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
    // Keep the service worker alive until the notification is created.
    var title = data.title || "Something Has Happened";
    var message = data.message || "Here's something you might want to check out.";
    var icon = "images/new-notification.png";
    console.log(event)
    event.waitUntil(
        // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
        // self.registration.showNotification('ServiceWorker Cookbook', {
        //     body: 'Alea iacta est',
        // })
        new self.Notification(title, {
        body: message,
        tag: 'simple-push-demo-notification',
        icon: icon
        })
    );
});