(() => {

    window.customSite = {
        title: 'Start your game development career | GameDevHQ.com',

        id: 'gdhq', //unique identifier
        siteName: 'GameDevHQ.com',

        theme_obj : {
            primary: '#2294A7',
            secondary: '#FFA142',
            accent: '#8c9eff',
            error: '#b71c1c'
        },

        howToYoutubeId_string: 'vyDPTDQa4-I',
        longerHowToYoutubeId_string: 'vyDPTDQa4-I',

        favicon_url: 'images/favicon.ico',

        // navbar_logo_url: '/images/gamedev.png',
        navbar_logo_HTML: `<img src="{{baseUrl}}images/gamedevhq.png" style="height: 25px;">`,
        navbar_sitename_HTML: 'gdhq',
        // navbar_style_object:{
        //     'position':'relative',
        //     'background-color': 'white',
        //     'transform': 'translate(0,0)',
        //     'left': 0
        // },
        // navbar_alwaysHideSpacer_bool:true,
        // navbar_showLowerOnFrontPage_bool: true,

        // beforeNavbar_html: '<div id="gdtv_header_inject" style="max-width:1440px;max-height:66px;margin-left:auto;margin-right:auto;"><div style="height:66px;background-color:#23A729;"></div></div></div>',

        // hero
        hero_background_color: '#2294A7',
        hero_background_url: '/images/gdhq-background.jpg',
        hero_logo_url: '/images/gamedevhq.png',
        hero_logo_HTML: '<img style="width:125px;height:125px;" src="{{baseUrl}}/{{hero_logo_url}}">',
        hero_title_HTML: `Projects`,
        hero_description_HTML: `turning your passion for Unity and game development into a career`,

        // sidebar
        sidebar_description_HTML: `
            <p>Our goal is turning your passion for Unity and game development into a career.</p>
            <p>Begin making your first game with our zombie FPS course, included with the free membership!</p>
            <p>GamedevHQ's project site is powered by <a href="https://simmer.io" style="font-weight:400">simmer.io</a>.</p>`,

        // sidebar_social_obj:{
        //     discord: 'https://discordapp.com/invite/eUSFZdJ',
        //     twitter: 'https://twitter.com/GameDevTV',
        //     youtube: 'https://www.youtube.com/channel/UC2CRYvS0FWRkTpCU3l4j8Mg',
        //     facebook: 'https://www.facebook.com/GameDevTV',
        //     medium: null,
        //     contact: 'https://www.gamedev.tv/contact' //mailto: links also fine here.
        // },

        twitter_url: 'https://twitter.com/gamedevhq', //for twitter widget showing latest posts

        // top and bottom linkbar (appfooter)
        linkbar_accent_border:'1px solid #FFA142',
        linkbar_background_color:'#031403',

        // top linkbar
        toplinkbar_links_obj:{
            links: [
                {
                    externalUrl:'https://www.gamedev.tv/about',
                    text:'about'
                },
                {
                    relativeUrl:'/faq',
                    text:'faq'
                },
                {
                    externalUrl: 'http://blog.simmer.io/how-to-build-a-unity-game-for-webgl/',
                    text: 'unity webgl howto'
                },
                {
                    externalUrl:'https://community.gamedev.tv/tags/c/other/talk/sharemygame',
                    text:'support'
                },
                {
                    externalUrl:'https://www.udemy.com/user/gamedevtv/',
                    text:'courses'
                }
            ],
            delimiter_HTML:'&nbsp;&#8226;&nbsp;&nbsp;',
            color: '#ddd'
        },

        appfooter_links_obj:{
            links: [
                {
                    externalUrl:'https://www.udemy.com/user/gamedevtv/',
                    text: 'Courses'
                },

                {
                    externalUrl:'https://www.gamedev.tv/about',
                    text:'About'
                },
                {
                    relativeUrl:'/faq',
                    text:'FAQ'
                },
                {
                    externalUrl:'https://community.gamedev.tv/tags/c/other/talk/sharemygame',
                    text:'Support'
                },
                {
                    relativeUrl:'/contact',
                    text:'Contact'
                },
                {
                    relativeUrl:'/privacy',
                    text:'Privacy'
                },
                {
                    relativeUrl:'/gdpr',
                    text:'GDPR'
                },
                {
                    relativeUrl:'/terms',
                    text:'Terms'
                }
            ],
            delimiter_HTML:'&nbsp;&nbsp;',
            color: '#17A91D'

        },

        collections_array: [
            {
                isLatest:true
            }
        ],

        privacy_annotation_html : `ShareMyGame.com is operated by SIMMER.io. SIMMER.io's privacy policy is listed below. You may also review GameDev.tv's <a href="https://www.gamedev.tv/privacy-policy">privacy policy</a> for additional information about your privacy.`,
        tos_annotation_html : `ShareMyGame.com is operated by SIMMER.io. SIMMER.io's terms of service are listed below. You may also review GameDev.tv's <a href="https://www.gamedev.tv/privacy-policy">privacy policy</a> for additional information about your privacy.`,


        emailPreferencesRequired_bool: true,

        signup_emailOptInText_string:"Sign up for GameDev.tv's mailing list.",
        signup_emailPrechecked_bool: false,

        welcomeEmail_text:{
            subject: 'Welcome to ShareMyGame.com',
            text: `Congratulations on signing up for ShareMyGame.com!

We're all excited to see what games you put up at https://ShareMyGame.com/upload.

Cheers,
The GameDev.tv Team & SIMMER.io`
        },

        appfooter_copyright_HTML:'&copy; 2019 EmbraceIT Ltd.',

        // upload page
        upload_dropzone_background: 'radial-gradient(circle, rgba(17,17,17,1) 0%, #0D700C 100%, #0D700C 100%)',

        // version: shown in footer, useful for debugging version of this script.
        version_string: 'smg1.0',

        // omit if you don't want to show silly cookie notice
        cookie_notice_html: '<div>This site uses cookies to run optimally. By continuing to use this site, you consent to the our use of cookies.</div><div style="font-weight:bold">Details: <a href="/privacy" target="_blank">Privacy</a> | <a href="/gdpr" target="_blank">GDPR</a> | <a href="/tos" target="_blank">Terms</a>.</div>'
    }
})();
