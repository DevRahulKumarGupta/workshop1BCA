document.addEventListener("DOMContentLoaded", function () {
    const storedData = sessionStorage.getItem("active");

    if (storedData) {
        const userData = JSON.parse(localStorage.getItem(storedData));

        document.getElementById("profileName").innerText = userData.name || "Not Provided";
        document.getElementById("profileEmail").innerText = userData.email || "Not Provided";
        document.getElementById("profileDOB").innerText = userData.dob || "Not Provided";

        const profilePicElement = document.getElementById("profilePic");
        if (userData.profilePic) {
            profilePicElement.src = userData.profilePic;
        } else {
            profilePicElement.src = "../images/default-avatar.png";
        }

        const socialMediaList = document.getElementById("profileSocialMedia");
        socialMediaList.innerHTML = "";

        if (userData.socialMedia) {
            for (const [key, value] of Object.entries(userData.socialMedia)) {
                const listItem = document.createElement("li");
                const iconClass = getSocialMediaIcon(key);
                listItem.innerHTML = `<a href="${value}" target="_blank"><i class="fab ${iconClass}"></i></a>`;
                socialMediaList.appendChild(listItem);
            }
        }
    } else {
        document.getElementById("profileContainer").innerHTML = '<p>No user data found. Please <a href="./index.html"><strong>register</strong></a> first.</p>';
    }
});

function getSocialMediaIcon(platform) {
    switch (platform.toLowerCase()) {
        case 'facebook': return 'fa-facebook';
        case 'twitter': return 'fa-twitter';
        case 'x': return 'fa-twitter';
        case 'linkedin': return 'fa-linkedin';
        case 'instagram': return 'fa-instagram';
        case 'github': return 'fa-github';
        case 'youtube': return 'fa-youtube';
        case 'pinterest': return 'fa-pinterest';
        case 'snapchat': return 'fa-snapchat-ghost';
        case 'tiktok': return 'fa-tiktok';
        case 'reddit': return 'fa-reddit';
        case 'whatsapp': return 'fa-whatsapp';
        case 'phone': return 'fa-whatsapp';
        case 'telegram': return 'fa-telegram';
        case 'tumblr': return 'fa-tumblr';
        case 'flickr': return 'fa-flickr';
        case 'vimeo': return 'fa-vimeo';
        case 'spotify': return 'fa-spotify';
        case 'discord': return 'fa-discord';
        case 'xing': return 'fa-xing';
        case 'behance': return 'fa-behance';
        case 'dribbble': return 'fa-dribbble';
        default: return 'fa-link';
    }
}


function clearSession() {
    sessionStorage.clear();
    alert("You have been logged out!");
    window.location.href = "login.html";
}
