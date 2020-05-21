---
pagename: First steps in implementing and extending LivePerson
sitesection: Documents
categoryname: "Getting Started"
permalink: first-steps-in-implementing-and-extending-liveperson.html
indicator: both
---
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
     <iframe id="vimeo-iframe" src="https://player.vimeo.com/video/398468660?app_id=122963" width="100%" height="100%" frameborder="0" allow="autoplay;" title="FTUE" allowfullscreen >
   </iframe>
    <span class="close">&times;</span>

  </div>
</div>


### Introduction

Most user actions within LiveEngage can be performed programmatically using the REST API. Since we use a REST model, we recommend you be fluent in:

* JavaScript, and its iterations like Node.JS, as well as JSON. Although most JSON payloads tend to be simple, there are exceptions to this rule, like with Structured Content.

* Swift and Java, respectively, for Mobile App Messaging SDKs for iOS and Android.

* HTTP calls and responses, REST APIs, server to server communication and web applications.

* Retrieving information and data analysis/research for the Data APIs.

Also, if you have not already done so:

1. Read the [API Terms of Use](https://www.liveperson.com/policies/apitou).

2. Read the [Systems Requirements and Language Support](https://knowledge.liveperson.com/admin-settings-system-requirements.html) guide.

Before you can do anything, you must configure and understand a few things first. By the end of this Getting Started guide, you will be ready to customize and implement features in LiveEngage.

### Step 1. Create a LiveEngage account

Before you can use LiveEngage, you must first have a working account. If you don't already have one, you can sign up for a free trial account to get started with messaging, Conversation Builder, and LivePerson Functions. To add more seats or access features not included in the trial, you will need to upgrade to a paid subscription. You can chat with LivePerson sales on liveperson.com to get help from a specialist to find the right package for your business.

Some features you might want to enable are:

* Messaging and push notifications

* Bot for User type

* Authenticated chat

* Audio messaging

* Vibrate on new incoming message

* Photo sharing

{: .notice}
If you already have a LiveEngage account, you can use that account instead of creating a free trial account. However, we recommend creating a new account to make sure that any changes and customizations you make do not affect your site visitors until you are ready to launch them.

### Step 2. Accessing LivePerson APIs

Some of our APIs require authorization before you can use them. Authorization refers to the process of verifying what a user has access to. In authorization, a user or application is granted access to an API after the API determines the extent of the permissions that it should assign.

You will be able to read and learn how to work with LivePerson APIs using the following methodologies:

- Authorizing web server applications
- Authorizing server to server interactions
- OAuth 1.0 App Keys
- OAuth 2.0 (App-JWT)

Read the [accessing LivePerson APIs](/common-resources-accessing-liveperson-apis.html) document for more information on the various authorization methods.

### Next steps

Congratulations! You are now ready to customize and implement features in LiveEngage.

- **Integrate LiveEngage with iOS and Android apps** to create and manage digital engagements.  Additionally, customers can communicate with the brand's agents through their channel of choice. For more information, refer to the Mobile Messaging SDK for [Android](mobile-app-messaging-sdk-for-android-overview.html) or [iOS](mobile-app-messaging-sdk-for-ios-overview.html).

- **Enable consumer monitoring and engagement flows** to gather reporting data about the consumer, engagements, and campaigns. By combining monitoring capabilities with our Campaigns feature, you can display tailored engagements to the right consumer at the right time. For more information, refer to the [Monitoring API](monitoring-api-overview.html).

- **Integrate a messaging bot into LiveEngage** to send/receive text messages, send structured content, transfer the conversation to other skills, change Time To Response, and close a conversation. You use the [Agent Messaging SDK](messaging-agent-sdk-overview.html) to connect a bot, but your account must be enabled to support bot users. To check the enabled features for your account, contact your account team or LivePerson Support.

- **Manage users in LiveEngage** to update user lists that may need updating on a regular basis. You use the [Users API](users-api-overview.html) to make updates such as profile pictures, login names, passwords, or user assignments. You can also synchronize any HR or staffing system with LiveEngage.

- **Implement a retry policy**. We recommend that you add a mechanism to your API call to increase reliability and stability. Each component in a network can return an error, which can cause your application to fail.  If an error returns, the mechanism makes sure that your application attempts to retrieve the relevant information. [More information on our retry policy best practices can be found here](retry-and-keepalive-best-practices-overview.html).


<div class="lp-container">
    <div class="external-link-container">
        <div class="header-lp4-external">
            Further Reading
            <div class="link-padding" style="margin-top:24px">
                <a target="_blank" href="https://developers.liveperson.com/common-resources-accessing-liveperson-apis.html">
                    <img class="dots-container" src="img/four-dots.svg"/>
                        Accessing LivePerson APIs
                </a>
            </div>
            <div class="link-padding" >
                <a target="_blank" href="https://developers.liveperson.com/common-resources-create-api-keys.html">
                        <img class="dots-container" src="img/four-dots.svg"/>
                            Create API keys
                </a>
            </div>
            <div class="link-padding" >
                <a target="_blank" href="https://developers.liveperson.com/common-resources-domain-api.html">
                        <img class="dots-container" src="img/four-dots.svg"/>
                            Domain API
                </a>
            </div>
            <div class="link-padding" >
                <a target="_blank" href="https://developers.liveperson.com/common-resources-retry-policy-recommendations.html">
                        <img class="dots-container" src="img/four-dots.svg"/>
                        Retry policy recommendations
                </a>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("teaser-banner");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var player = document.getElementById('vimeo-iframe').contentWindow.document.getElementById('player');
// player.setAttribute('style', 'border: 4px solid white ');
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

</script>
