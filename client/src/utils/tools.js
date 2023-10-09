

export const resumePreprocess = (data) => {
    let obj = {};
    if (data) {
        obj = {
            name: data.candidate[0].candidate.name,
            profile: data.candidate[0].candidate.profile,
            job: data.candidate[0].candidate.job,
            birthday: data.candidate[0].candidate.birthday,
            email: data.candidate[0].candidate.email,
            phone: data.candidate[0].candidate.phone,
            city: data.candidate[0].candidate.city,
            website: data.candidate[0].candidate.website,
            github: data.candidate[0].candidate.github,
            language: data.language,
            skill: data.skill,
            project: data.project,
            course: data.course,
            education: data.education,
            employment: data.employment
        }
    }
    return obj;
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const paddingZero = () => ({
    padding: 0,
})

export const contactIconSize = () => ({
    fontSize: '16px',
    marginTop: '5px',
    color: '#ce6464'
})

export const mobileContactIconSize = () => ({
    // fontSize: '16px',
    // marginTop: '5px',
    color: '#ce6464'
})

export const contactTextSize = () => ({
    fontSize: '0.75rem',
})

export const skillIcon = {
    javascript_icon: require('../icon/javascript_icon.png'),
    babel_icon: require('../icon/babel_icon.png'),
    chrome_extension_icon: require('../icon/chrome_extension_icon.png'),
    cloudinary_icon: require('../icon/cloudinary_icon.png'),
    css_icon: require('../icon/css_icon.png'),
    express_icon: require('../icon/express_icon.png'),
    firebase_icon: require('../icon/firebase_icon.png'),
    git_icon: require('../icon/git_icon.png'),
    github_icon: require('../icon/github_icon.png'),
    google_app_engine_icon: require('../icon/google_app_engine_icon.png'),
    heroku_icon: require('../icon/heroku_icon.png'),
    html_icon: require('../icon/html_icon.png'),
    jquery_icon: require('../icon/jquery_icon.webp'),
    material_ui_icon: require('../icon/material_ui_icon.png'),
    mongodb_icon: require('../icon/mongodb_icon.webp'),
    mongoose_icon: require('../icon/mongoose_icon.png'),
    mysql_icon: require('../icon/mysql_icon.webp'),
    nextjs_icon: require('../icon/nextjs_icon.png'),
    nodejs_icon: require('../icon/nodejs_icon.png'),
    npm_icon: require('../icon/npm_icon.png'),
    postman_icon: require('../icon/postman_icon.png'),
    react_bootstrap_icon: require('../icon/react_bootstrap_icon.png'),
    react_icon: require('../icon/react_icon.png'),
    redux_icon: require('../icon/redux_icon.webp'),
    restful_api_icon: require('../icon/restful_api_icon.png'),
    typescript_icon: require('../icon/typescript_icon.png'),
    vercel_icon: require('../icon/vercel_icon.png'),
    visual_studio_code_icon: require('../icon/visual_studio_code_icon.png'),
    webpack_icon: require('../icon/webpack_icon.png'),
    bootstrap_icon: require('../icon/bootstrap_icon.jpeg')
}

export const certificateUdemy = {
    bootcamp: require('../certificate/bootcamp.jpg'),
    git: require('../certificate/git.jpg'),
    html_css: require('../certificate/html_css.jpg'),
    javascript: require('../certificate/javascript.jpg'),
    mysql: require('../certificate/mysql.jpg'),
    react18: require('../certificate/react18.jpg'),
    university: require('../certificate/辍学证书.jpg'),
    school1: require('../certificate/高中毕业证书.jpg'),
    school2: require('../certificate/统考.jpg')
}




export const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...';
    } else {
        return str;
    }
}

export const insertHeaderIcon = (english) => {

    const cuteEmoji = require('../icon/menchera.webp');
    const head = document.querySelector('head');
    let title = 'Resume of Lai Chee Hoong';

    if (english) {
        title = 'Resume of Lai Chee Hoong';
    } else {
        title = '赖志宏的简历';
    }

    head.insertAdjacentHTML('afterbegin', `
    <link rel="icon" href="${cuteEmoji}" />
    <link rel="apple-touch-icon" href="${cuteEmoji}" />
    <title>${title}</title>
    `)
}

export const getWindowDimensions = () => {
    const { innerWidth } = window;
    // console.log(innerWidth);
    return innerWidth;
}

