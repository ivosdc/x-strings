<script>
    import {
        Page,
        Toolbar,
        Link,
        BlockTitle
    } from 'framework7-svelte';
    import GuitarChords from 'guitar-chords-viewer/src/GuitarChords.svelte';
    import 'framework7-icons';

    let chamber_pitch = 440;

    function pitchUp() {
        chamber_pitch++;
    }

    function pitchDown() {
        chamber_pitch--;
    }
</script>

<Page name="home">
    <BlockTitle>Guitar chords overview</BlockTitle>
    <Toolbar top>
        <Link>
            <Link on:click={pitchDown}><i class="f7-icons">arrowtriangle_down</i></Link>
            {chamber_pitch} Hz
            <Link on:click={pitchUp}><i class="f7-icons">arrowtriangle_up</i></Link>
        </Link>
    </Toolbar>
    <div class="xstrings-block">
        <GuitarChords chamber_tone={chamber_pitch}/>
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