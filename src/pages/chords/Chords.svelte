<script>
    import GuitarChord from 'guitar-chord/src/GuitarChord.svelte';
    import {getChords, empty_chord} from './chordsservice';

    export let note = '';
    let note_chords;
    let chord = empty_chord[0];
    $: note_chords = initChords(note);

    function initChords(note) {
        let chords = getChords(note);
        chord = chords[0];
        return chords;
    }

    let NOTES = ["C", "D", "E", "F", "G", "A", "B"];
    let fingering;
    $: fingering = setFingering(chord);
    let strings;
    $: strings = setStrings(chord);

    function getChordName(chord) {
        return chord.chordName.split(',').join('');
    }

    function setFingering(chord) {
        return chord.fingering.split(' ');
    }

    function setStrings(chord) {
        return chord.strings.split(' ');
    }

    function setBaseNote(base_note) {
        note = base_note;
    }

    function setChord(selected_chord) {
        chord = selected_chord;
    }

</script>
<div class="notes-menu">
    <div class="row">
        {#each NOTES as base_note}
            <div class="chord-button"
                 class:chord-button-selected={base_note === note.substring(0,1).toUpperCase()}
                 on:click={()=>{setBaseNote(base_note)}}>
                {base_note}
            </div>
        {/each}
    </div>
    {#if getChordName(note_chords[0]) !== ''}
        <div class="row">
            {#each note_chords as note_chord}
                <div class="chord-button"
                     class:chord-button-selected={getChordName(note_chord) === getChordName(chord)}
                     on:click={()=>{setChord(note_chord)}}>
                    {getChordName(note_chord)}
                </div>
            {/each}
        </div>
    {/if}
    <div class="chord">
        <GuitarChord {fingering} {strings}/>
    </div>
</div>
<style>
    .notes-menu {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        border: none;
        width: fit-content;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .chord {
        display: flex;
        align-items: center;
    }

    .chord-button {
        border: 1px solid #666;
        border-radius: 5px;
        color: #666;
        width: fit-content;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-weight: normal;
        font-size: larger;
        cursor: pointer;
        padding: 0.3rem 0.5rem;
    }

    .chord-button-selected {
        border: 1px solid #1A1A1A;
        color: #1A1A1A;
        background-color: #666;
    }

</style>