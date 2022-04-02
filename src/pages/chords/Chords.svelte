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
    <div class="notes-row">
        {#each NOTES as base_note}
            <div class="note-button"
                 class:button-selected={base_note === note.substring(0,1).toUpperCase()}
                 on:click={()=>{setBaseNote(base_note)}}>
                {base_note}
            </div>
        {/each}
    </div>
    {#if getChordName(note_chords[0]) !== ''}
        <div class="chords-row">
            {#each note_chords as note_chord}
                <div class="chord-button"
                     class:button-selected={getChordName(note_chord) === getChordName(chord)}
                     on:click={()=>{setChord(note_chord)}}>
                    {getChordName(note_chord)}
                </div>
            {/each}
        </div>
        <div class="chord">
            <GuitarChord {fingering} {strings}/>
        </div>
    {/if}
</div>
<style>
    .notes-menu {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .notes-row {
        display: flex;
        flex-wrap: wrap;
        border: none;
        width: fit-content;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .chords-row {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        border: none;
        width: fit-content;
        gap: 0.5rem;
    }

    .chord {
        width: 200px;
        display: flex;
        align-items: center;
    }

    .note-button {
        border: 1px solid #999;
        border-radius: 5px;
        color: #999;
        width: fit-content;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-weight: bolder;
        font-size: large;
        cursor: pointer;
        padding: 0 0.5rem;
    }

    .chord-button {
        border: 1px solid #999;
        border-radius: 5px;
        color: #999;
        width: available;
        text-align: center;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-weight: normal;
        font-size: small;
        cursor: pointer;
        padding: 0.2em 0.3rem;
    }

    .button-selected {
        border: 1px solid #1A1A1A;
        color: #1A1A1A;
        background-color: #999;
    }


</style>