import CHORDS from './all-chords-chart';

export let empty_chord = [{
    chordName: '',
    fingering: 'X X X X X X',
    strings: 'X X X X X X'
}];

export function getChords(note) {
    let chords = empty_chord;
    if (note !== '') {
        note = note.substring(0, 1);
        chords = CHORDS[note];
    }
    return chords;
}