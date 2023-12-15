chrome.runtime.onInstalled.addListener(() => {
    // Set up an alarm to trigger every 30 minutes
    chrome.alarms.create({ periodInMinutes: 30 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "mindfulBrowsingAlarm") {
      showMindfulnessNotification();
    }
  });
  
  function showMindfulnessNotification() {
    const notificationOptions = {
      type: "basic",
      title: "Take a Break!",
      message: "It's time to pause and practice mindfulness for a few minutes.",
      iconUrl: "images/icon48.png"
    };
  
    chrome.notifications.create("mindfulnessNotification", notificationOptions);
  }
  