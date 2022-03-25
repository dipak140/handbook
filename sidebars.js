module.exports = {
  docs: {
    "Getting Started": ["intro", "architecture", "security", "faq"],
    Community: [
      "community/community-intro",
      "community/community-instances",
      "community/breakout-rooms",
      "community/third-party-software",
    ],
    "User Guide": [
      "user-guide/user-guide-start",
      "user-guide/supported-browsers",
      "user-guide/user-guide-join-jitsi-meeting",
      "user-guide/user-guide-start-a-jitsi-meeting",
      "user-guide/user-guide-share-a-jitsi-meeting",
      "user-guide/user-guide-jitsi-meet-on-mobile",
      "user-guide/user-guide-jitsi-meet-for-google-calendar",
      "user-guide/keyboard-shortcuts",
      "user-guide/user-guide-basic",
      "user-guide/user-guide-advanced",
    ],
    "Developer Guide": [
      "dev-guide/dev-guide-start",
      "dev-guide/dev-guide-contributing",
      {
        type: "category",
        label: "Web",
        items: [
          "dev-guide/dev-guide-web",
          "dev-guide/dev-guide-ljm",
          "dev-guide/dev-guide-web-integrations",
          "dev-guide/dev-guide-iframe",
          "dev-guide/dev-guide-react-sdk",
          "dev-guide/dev-guide-ljm-api",
        ],
      },
      {
        type: "category",
        label: "Mobile",
        items: [
          "dev-guide/dev-guide-mobile",
          "dev-guide/dev-guide-mobile-jitsi-meet",
          "dev-guide/mobile-feature-flags",
          "dev-guide/dev-guide-android-sdk",
          "dev-guide/dev-guide-ios-sdk",
        ],
      },
    ],
    "Self-Hosting Guide": [
      "devops-guide/devops-guide-start",
      {
        type: "category",
        label: "Deployment",
        items: [
          "devops-guide/devops-guide-requirements",
          "devops-guide/devops-guide-quickstart",
          "devops-guide/devops-guide-opensuse",
          "devops-guide/devops-guide-docker",
          "devops-guide/devops-guide-manual",
        ],
      },
      {
        type: "category",
        label: "Configuration",
        items: [
          "devops-guide/secure-domain",
          "devops-guide/ldap-authentication",
          "devops-guide/devops-guide-scalable",
          "devops-guide/reservation",
          "devops-guide/turn",
          "devops-guide/speakerstats",
          "devops-guide/videosipgw",
          "devops-guide/cloud-api",
        ],
      },
      "devops-guide/devops-guide-videotutorials",
      "devops-guide/faq",
    ],
  },
  "releases-sidebar": {
    Releases: ["releases"],
  },
};