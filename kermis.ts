//% weight=100 color=#F3A21B icon="\uF004"
namespace kermis {

    let notePlayedHandlers: Array<() => void> = [];

    function playNotes(notes: Array<number[]>) {
        let fraction = BeatFraction.Half;
        for (let note of notes) {
            if (note.length >= 2) {
                fraction = note[1];
            }
            music.playTone(note[0], music.beat(fraction));
            for (let handler of notePlayedHandlers) {
                handler();
            }
        }
    }

    //% block="on kermis note played"
    export function onKermisNotePlayed(handler: () => void) {
        notePlayedHandlers.push(handler);
    }

    //% block
    export function playFirstPartOfKermisChorus() {
        playNotes([
            [139, BeatFraction.Half],
            [131],
            [139],
            [247, BeatFraction.Whole],
            [220],
            [196, BeatFraction.Half],
            [196],
            [185],
            [196],
            [220, BeatFraction.Whole],
            [165],
            [165],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [196, BeatFraction.Half],
            [185],
            [165],
            [147],
            [165],
            [185],
            [196],
            [220],
            [247],
            [262, BeatFraction.Double],
            [247, BeatFraction.Whole],
        ]);
    }

    //% block
    export function playSecondPartOfKermisChorus() {
        playNotes([
            [147, BeatFraction.Half],
            [247],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [247, BeatFraction.Quarter],
            [247, BeatFraction.Half],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [247, BeatFraction.Quarter],
            [247, BeatFraction.Half],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [294, BeatFraction.Quarter],
            [262, BeatFraction.Half],
            [247],
            [220, BeatFraction.Whole],
            [165],
            [220, BeatFraction.Half],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [196, BeatFraction.Half],
            [185],
            [165],
            [147],
            [165],
            [185],
            [196],
            [220],
            [247],
            [262],
            [185],
            [220, BeatFraction.Double],
            [196, BeatFraction.Whole],
        ])
    }

}
