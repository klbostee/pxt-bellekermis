//% weight=100 color=#F3A21B icon="\uF118"
namespace kermis {

    let notePlayedHandlers: Array<() => void> = [];

    function playNotes(notes: Array<number[]>) {
        for (let note of notes) {
            music.playTone(note[0], music.beat(note[1]));
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
            [131, BeatFraction.Half],
            [139, BeatFraction.Half],
            [247, BeatFraction.Whole],
            [220, BeatFraction.Whole],
            [196, BeatFraction.Half],
            [196, BeatFraction.Half],
            [185, BeatFraction.Half],
            [196, BeatFraction.Half],
            [220, BeatFraction.Whole],
            [165, BeatFraction.Whole],
            [165, BeatFraction.Whole],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [196, BeatFraction.Half],
            [185, BeatFraction.Half],
            [165, BeatFraction.Half],
            [147, BeatFraction.Half],
            [165, BeatFraction.Half],
            [185, BeatFraction.Half],
            [196, BeatFraction.Half],
            [220, BeatFraction.Half],
            [247, BeatFraction.Half],
            [262, BeatFraction.Double],
            [247, BeatFraction.Whole],
        ]);
    }

    //% block
    export function playSecondPartOfKermisChorus() {
        playNotes([
            [147, BeatFraction.Half],
            [247, BeatFraction.Half],
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
            [247, BeatFraction.Half],
            [220, BeatFraction.Whole],
            [165, BeatFraction.Whole],
            [220, BeatFraction.Half],
        ]);
        music.rest(music.beat(BeatFraction.Quarter));
        playNotes([
            [196, BeatFraction.Half],
            [185, BeatFraction.Half],
            [165, BeatFraction.Half],
            [147, BeatFraction.Half],
            [165, BeatFraction.Half],
            [185, BeatFraction.Half],
            [196, BeatFraction.Half],
            [220, BeatFraction.Half],
            [247, BeatFraction.Half],
            [262, BeatFraction.Half],
            [185, BeatFraction.Half],
            [220, BeatFraction.Double],
            [196, BeatFraction.Whole],
        ])
    }

}
