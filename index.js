function dateChanger(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    console.log(date.toLocaleDateString('de-DE', options));

    console.log(date.toLocaleDateString('ar-EG', options));

    console.log(date.toLocaleDateString('ja-JP', options));

    console.log(date.toLocaleDateString('ko-KR', options));

    console.log(date.toLocaleDateString('en-CA', options));

    console.log(date.toLocaleDateString(undefined, options));

}

module.exports = dateChanger;