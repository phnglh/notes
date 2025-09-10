
var minimumTeachings = function(n, languages, friendships) {
    const langs = {};
    for (let i = 0; i < languages.length; i++) {
        langs[i + 1] = new Set(languages[i]);
    }

    const problematic = new Set();
    for (const [u, v] of friendships) {
        let canTalk = false;
        for (const lang of langs[u]) {
            if (langs[v].has(lang)) {
                canTalk = true;
                break;
            }
        }
        if (!canTalk) {
            problematic.add(u);
            problematic.add(v);
        }
    }

    if (problematic.size === 0) return 0;

    let res = Infinity;
    for (let lang = 1; lang <= n; lang++) {
        let cnt = 0;
        for (const person of problematic) {
            if (!langs[person].has(lang)) {
                cnt++;
            }
        }
        res = Math.min(res, cnt);
    }

    return res;
};
