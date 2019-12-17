const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function currentYear () {
    const date = new Date();
    return date.getFullYear();
}

export function getCustomFormatedDateEN (timestamp) {
    const date = new Date(timestamp);
    const month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
export function getCustomFormatedDateKO (timestamp) {
    const date = new Date(timestamp);
    const month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();

    return `${year}년 ${month}월 ${day}일`;
}
export function getCustomFormatedDateJA (timestamp) {
    const date = new Date(timestamp);
    const month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();

    return `${year}年 ${month}月 ${day}日`;
}
export function getCustomFormatedDateZH (timestamp) {
    const date = new Date(timestamp);
    const month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();

    return `${year}年 ${month}月 ${day}日`;
}

let getCustomFormatedDate = getCustomFormatedDateEN;
switch (process.env.GATSBY_TARGET_LANG) {
    case 'ja':
        getCustomFormatedDate = getCustomFormatedDateJA;
    break;
    case 'ko':
        getCustomFormatedDate = getCustomFormatedDateKO;
    break;
    case 'zh':
        getCustomFormatedDate = getCustomFormatedDateZH;
    break;
}

export default getCustomFormatedDate;
