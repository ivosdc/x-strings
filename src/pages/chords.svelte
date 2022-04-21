<script>
    import {
        Page,
        Toolbar,
        Button,
        BlockTitle
    } from 'framework7-svelte';
    import GuitarChords from 'guitar-chords-viewer/src/GuitarChords.svelte';
    import 'framework7-icons';

</script>

<Page name="home">
    <BlockTitle>Guitar Chords</BlockTitle>
    <Toolbar top>
    </Toolbar>
    <div class="xstrings-block">
        <GuitarChords/>
    </div>
</Page>

<style>

    .xstrings-block {
        background-color: #1A1A1A;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>