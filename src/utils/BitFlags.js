export const tags = {
    action: 1 << 0,
    adventure: 1 << 1,
    drama: 1 << 2,
    comedy: 1 << 3,
    fantasy: 1 << 4,
    school: 1 << 5,
    game: 1 << 6,
    supernatural: 1 << 7,
    thriller: 1 << 8,
    yuri: 1 << 9,
    shounen: 1 << 10,
    mystery: 1 << 11,
    magic: 1 << 12,
    harem: 1 << 13,
    sci_fi: 1 << 14,
    yaoi: 1 << 15,
    sports: 1 << 16,
    romance: 1 << 17,
    music: 1 << 18,
    tournaments: 1 << 19,
    school_club: 1 << 20,
    horror: 1 << 21,
    war: 1 << 22,
}



export function parseTagBitflags(flags) {
    let results = [];
    for (const key in tags) {
        if (flags & tags[key]) {
            results.push(key)
        }
    }
    return results
}