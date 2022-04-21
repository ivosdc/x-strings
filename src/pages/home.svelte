<script>
    import {
        Page,
        Toolbar,
        Button,
        BlockTitle, Block
    } from 'framework7-svelte';
    import GuitarChords from 'guitar-chords-viewer/src/GuitarChords.svelte';
    import 'framework7-icons';

</script>

<Page name="home">
    <BlockTitle>Guitar Chords & Tuner</BlockTitle>
    <Block>
        <img src="static/x-strings-guitar.png" height="50" alt="about">
        <img src="static/x-strings-font.png" height="50" alt="about">
        <p>This software comes without warranty. Any usage is at your own risk.</p>
        <p>This software does not collect any data and has no connection to third party applications or companies.</p>
        <p>The usage of the audio-device in special the microphone is for pitch detection only to identify the tone
            of your guitar.</p>
        Copyright 2022, Ivo Bozic, ivolutione@gmail.com
    </Block>
</Page>

<style>
</style>